// fonts.ts
// Schriftarten-Definition
import { Geist, Geist_Mono, Blinker } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
  });
  
  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
  });
  
  const blinker = Blinker({
    variable: "--font-blinker",
    subsets: ["latin"],
    weight: "400",
    display: "swap",
  });
  
  export const fonts = {
    geistSans: geistSans.variable,
    geistMono: geistMono.variable,
    blinker: blinker.variable,
  };