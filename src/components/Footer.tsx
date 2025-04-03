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
  const [randomDevName] = useState<string>(
    funnyNames4Devs[Math.floor(Math.random() * funnyNames4Devs.length)]
  );

  return (
    <footer className="footer">
      {visitorCount > 0 && (
        <>
          <span className="span-count">{visitorCount} </span> humorvolle
          <span className="span-count"> {randomDevName} </span> haben diese Webseite bereits besucht! 😉
        </>
      )}
    </footer>
  );
};

export default Footer;
