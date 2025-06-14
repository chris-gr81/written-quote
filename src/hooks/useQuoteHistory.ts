import { useContext, useEffect } from "react";
import { QuoteContext } from "../context/QuoteContext";

export function useQuoteHistory() {
  const { quoteObj, quoteHistory } = useContext(QuoteContext);

  // Save current quote in history
  function saveQuote() {
    console.log("SaveQuote spricht:");
    console.log(quoteObj);
  }

  useEffect(() => {
    console.log("useEffect triggert");
    return () => {
      // hier die updatefunktion, wenn zitat gespeichert werden soll
      console.log("cleanup");
    };
  }, [quoteHistory.length]);

  return { saveQuote };
}
