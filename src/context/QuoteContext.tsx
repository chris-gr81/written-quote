import React, { createContext, useState, type ReactNode } from "react";
import { getQuote } from "../api/quotes";
import type { Quote } from "../types/types";
import { LOCAL_STORAGE_KEY } from "../constants/constants";

type QuoteContextType = {
  quoteObj: Quote;
  setQuoteObj: React.Dispatch<React.SetStateAction<Quote>>;
  quoteHistory: Quote[];
  setQuoteHistory: React.Dispatch<React.SetStateAction<Quote[]>>;
  refreshQuote: () => Promise<void>;
};

const defaultQuote: Quote = {
  quote: "",
  authorName: "",
  link: "",
  authorLink: "",
};

export const QuoteContext = createContext<QuoteContextType>({
  quoteObj: defaultQuote,
  setQuoteObj: () => {},
  quoteHistory: [],
  setQuoteHistory: () => {},
  refreshQuote: async () => {},
});

// custom provider
export function QuoteProvider({ children }: { children: ReactNode }) {
  // current quote (displayed in ui)
  const [quoteObj, setQuoteObj] = useState<Quote>({
    // initalize as empty object
    quote: "",
    authorName: "",
    link: "",
    authorLink: "",
  });

  // quote history (for saving in local storage)
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>(() => {
    // initialize with localStorage
    const inStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (inStorage) {
      console.log("Da ist ja was");
      try {
        return JSON.parse(inStorage) as Quote[];
      } catch (error) {
        console.error("Error while parsing quoteHistory");
      }
    }
    return [];
  });

  // fetches a quote from api
  async function refreshQuote() {
    try {
      const data = await getQuote();
      if (data) setQuoteObj(data);
    } catch (error) {
      console.error("Error while loading a quote from api", error);
    }
  }

  return (
    <QuoteContext.Provider
      value={{
        quoteObj,
        setQuoteObj,
        quoteHistory,
        setQuoteHistory,
        refreshQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}
