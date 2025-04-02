import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// Prisma-Client-Instanz für den Datenbankzugriff
const prisma = new PrismaClient();

/**
 * API-Handler: Besucherzähler
 * - Holt die aktuelle Besucheranzahl aus der Datenbank
 * - Erhöht die Anzahl um 1 oder erstellt einen neuen Eintrag, falls keiner existiert
 * - Optimiert für atomare Datenbankoperationen zur Vermeidung von Race Conditions
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") { 
      return res.status(405).json({ error: "Methode nicht erlaubt" });
    }

    // Datenbankoperation: Aktualisiert oder erstellt den Besucherzähler in einer Transaktion
    const visitor = await prisma.$transaction(async (tx) => {
      const existingVisitor = await tx.visitor.findFirst();
      
      if (existingVisitor) {
        return tx.visitor.update({
          where: { id: existingVisitor.id },
          data: { count: { increment: 1 } }, // Sicherstellen, dass die Erhöhung atomar ist
        });
      }
      
      return tx.visitor.create({ data: { count: 1 } });
    });

    res.status(200).json({ count: visitor.count });
  } catch (error) {
    console.error("Fehler beim Datenbankzugriff:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  } finally {
    await prisma.$disconnect(); // Sicherstellen, dass die Datenbankverbindung ordnungsgemäß geschlossen wird
  }
}
