"use client";

import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import useQuotes from "@/hooks/useQuotes";
import { useCallback } from "react";

// Dynamisches Importieren der ImageSection für bessere Performance (SSR deaktiviert)
const ImageSection = dynamic(() => import("@/components/ImageSection"), { ssr: false });

export default function Home() {
  // Custom Hook für Zitate und Besucheranzahl
  const { quote, fetchQuote, visitorCount } = useQuotes();

  // useCallback verhindert unnötige Neudeklarationen der Funktion
  const handleFetchQuote = useCallback(fetchQuote, [fetchQuote]);

  return (
    <div className="container">

      <Head>
        <title>Chuck Norris Dev Quotes</title>
      </Head>

      <main className="main-content">
        <Header />
        <section className="quote-section">
          <ImageSection />
          <QuoteSection quote={quote} fetchQuote={handleFetchQuote} />
        </section>

        <Footer visitorCount={visitorCount ?? 0} />
      </main>

    </div>
  );
}
