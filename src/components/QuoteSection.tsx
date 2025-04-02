import React from "react";

type QuoteSectionProps = {
  quote: string;
  fetchQuote: () => void;
};

const QuoteSection: React.FC<QuoteSectionProps> = ({ quote, fetchQuote }) => {
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
        {quote}
      </p>
    </div>
  );
};

export default QuoteSection;
