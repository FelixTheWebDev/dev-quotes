import React, { useEffect, useState } from "react";

type FooterProps = {
  visitorCount: number;
};

// Array mit humorvollen Entwicklernamen
const funnyNames4Devs = [
  "Syntax-Surfer",
  "Bug-Slayer",
  "Error-Exorzisten",
  "Java-Junkies auf Koffein ☕",
  "Commit-Commander",
  "Code-Magier auf Abwegen",
  "Debug-Dudes",
  "Git-Gurus",
  "Patch-Piraten",
  "Stack-Overflow-Sammler",
  "Breakpoint-Banditen",
  "Refactor-Rockstars",
  "Pixelkrieger",
  "NullPointer-Ninjas"
];

const Footer: React.FC<FooterProps> = ({ visitorCount = 0 }) => {
  const [randomDevName, setRandomDevName] = useState<string>("");
  

  useEffect(() => {
    // Setzt den zufälligen Namen erst im Browser um, da Math.Random im Client andere Werte zurückgibt wie beim SSR.
    setRandomDevName(funnyNames4Devs[Math.floor(Math.random() * funnyNames4Devs.length)]);
  }, [])

  return (
    <footer className="footer">
      {randomDevName && visitorCount > 0 && ( // Verhindert leere Werte während der ersten SSR-Hydration
        <><span className="span-count">{visitorCount} </span> humorvolle <span className="span-count"> {randomDevName} </span> haben diese Webseite bereits besucht! 😉</>
      )}
    </footer>
  );
};

export default Footer;
