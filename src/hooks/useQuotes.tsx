import { useEffect, useState } from "react";

const useQuotes = () => {
  const [quote, setQuote] = useState("");
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetchQuote();
    fetchVisitorCount();
  }, []);

  const fetchQuote = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random?category=dev");
    const data = await res.json();
    setQuote(data.value);
  };

  const fetchVisitorCount = async () => {
    const res = await fetch("/api/visitor");
    const data = await res.json();
    setVisitorCount(data.count);
  };

  return { quote, fetchQuote, visitorCount };
};

export default useQuotes;
