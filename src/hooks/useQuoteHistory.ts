import { useContext, useEffect } from "react";
import { QuoteContext } from "../context/QuoteContext";
import { LOCAL_STORAGE_KEY } from "../constants/constants";

export function useQuoteHistory() {
  const { quoteObj, quoteHistory, setQuoteHistory } = useContext(QuoteContext);

  // Save current quote in history
  function saveQuote() {
    const duplicate = quoteHistory.some(
      (qh) =>
        qh.quote === quoteObj.quote && qh.authorName === quoteObj.authorName
    );

    if (duplicate) {
      alert("Zitat wurde bereits gespeichert.");
      return;
    }
    const updatedHistory = [quoteObj, ...quoteHistory];
    setQuoteHistory(updatedHistory);
  }

  function deleteQuote(index: number) {
    const updated = quoteHistory.filter((item, currentIndex) => {
      return currentIndex !== index;
    });
    setQuoteHistory(updated);
  }

  useEffect(() => {
    // Triggers when quoteHistory changes -> must be a new array (f.e. via spread)
    console.log("useEffect triggert");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quoteHistory));
  }, [quoteHistory]);

  return { saveQuote, deleteQuote };
}
