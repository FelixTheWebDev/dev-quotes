import React from "react";

type QuoteSectionProps = {
  quote: string;
  fetchQuote: () => void;
};

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, fetchQuote }) => {

  const isLoading = !quote; // Falls `quote` leer ist, sind wir noch am Laden.

  return (
    <div className="quote-container">
      {/* Button zum Abrufen eines neuen Zitats */}
      <button
        onClick={fetchQuote}
        className="loadQuoteButton"
      >
        Neues Zitat
      </button>

      <p className="quote-text">
        {isLoading ? "Zitat wird geladen..." : quote}
      </p>
    </div>
  );
};

export default QuoteSection;
