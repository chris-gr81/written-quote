import React, { createContext, useState, type ReactNode } from "react";
import { getQuote } from "../api/quotes";

type Quote = {
  quote: string;
  authorName: string;
  link: string;
  authorLink: string;
};

type QuoteContextType = {
  quoteObj: Quote;
  setQuoteObj: React.Dispatch<React.SetStateAction<Quote>>;
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
  refreshQuote: async () => {},
});

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quoteObj, setQuoteObj] = useState<Quote>({
    quote: "",
    authorName: "",
    link: "",
    authorLink: "",
  });

  async function refreshQuote() {
    const data = await getQuote();
    if (data) setQuoteObj(data);
  }

  return (
    <QuoteContext.Provider value={{ quoteObj, setQuoteObj, refreshQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}
