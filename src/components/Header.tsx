"use client";

import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      {/* Logo der Seite */}
      <Image 
        src="/img/logo_w&s.svg" 
        alt="Logo W&S Digitalagentur" 
        width={100} 
        height={100} 
        className="m-1" 
        priority 
      />
    </header>
  );
};

export default Header;