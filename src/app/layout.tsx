import type { Metadata } from "next";
import { fonts } from "../utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Funny developer quotes",
  description: "Get a random funny developer quote from the Chuck Norris API",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${fonts.blinker} antialiased`}>{children}</body>
    </html>
  );
}
