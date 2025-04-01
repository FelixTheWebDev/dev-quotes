import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let visitor = await prisma.visitor.findFirst();
  if (!visitor) {
    visitor = await prisma.visitor.create({ data: { count: 1 } });
  } else {
    visitor = await prisma.visitor.update({
      where: { id: visitor.id },
      data: { count: visitor.count + 1 },
    });
  }
  res.status(200).json({ count: visitor.count });
}
