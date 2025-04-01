const QuoteSection = ({ quote, fetchQuote }) => {
  return (
    <div className="flex flex-col justify-end text-center p-5 pt-0 w-full">
      <button onClick={fetchQuote} className="px-3 py-2 text-white cursor-pointer rounded bg-gray-700 transition-all duration-300 active:bg-gray-600 active:scale-95 w-1/2 mb-5 mx-auto">
        Neues Zitat
      </button>
      <p className="text-md min-h-[190px]">{quote}</p>

    </div>
  );
};

export default QuoteSection;
