import { useEffect, useState } from "react";

/**
 * Custom Hook: useQuotes
 * - Holt ein zufälliges Chuck-Norris-Zitat aus der Kategorie "dev"
 * - Lädt die Besucheranzahl aus dem Backend
 */
const useQuotes = () => {
  const [quote, setQuote] = useState("");
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [lastQuote, setLastQuote] = useState(null);  // Zustand für den letzten Witz

  useEffect(() => {
    fetchQuote();
    fetchVisitorCount();
  }, []);

  /**
   * Ruft ein zufälliges Chuck-Norris-Zitat von einer API ab.
   * Verhindert doppelte Zitate und behandelt Fehler.
   */
  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random?category=dev");
      if (!res.ok) throw new Error("Failed to fetch quote");
      const data = await res.json();

      // Verhindere, dass der gleiche Witz zweimal hintereinander kommt
      if (data.value !== lastQuote) {
        setQuote(data.value);
        setLastQuote(data.value);  // Speichere den zuletzt angezeigten Witz
      } else {
        fetchQuote();  // Hole einen neuen Witz, falls der gleiche Witz wie zuvor
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  /**
   * Holt die Besucheranzahl vom Backend.
   * Fehler werden geloggt, um UI-Probleme zu vermeiden.
   */
  const fetchVisitorCount = async () => {
    try {
      const res = await fetch("/api/visitor");
      if (!res.ok) throw new Error("Failed to fetch visitor count");
      const data: { count: number } = await res.json(); // Typ für API-Response setzen  
      setVisitorCount(data.count);
    } catch (error) {
      console.error("Error fetching visitor count:", error);
    }
  };

  return { quote, fetchQuote, visitorCount };
};

export default useQuotes;
