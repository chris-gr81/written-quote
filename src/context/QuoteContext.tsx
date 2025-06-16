import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getQuote } from "../api/quotes";
import type { Quote } from "../types/types";
import { LOCAL_STORAGE_KEY } from "../constants/constants";

type QuoteContextType = {
  currentQuote: Quote;
  setCurrentQuote: (quote: Quote) => void;
  quoteHistory: Quote[];
  setQuoteHistory: (history: Quote[]) => void;
  loadQuote: () => Promise<void>;
  saveQuote: () => void;
  deleteQuote: (index: number) => void;
};

const defaultQuote: Quote = {
  quote: "",
  authorName: "",
  link: "",
  authorLink: "",
};

export const QuoteContext = createContext<QuoteContextType>({
  currentQuote: defaultQuote,
  setCurrentQuote: () => {},
  quoteHistory: [],
  setQuoteHistory: () => {},
  loadQuote: async () => {},
  saveQuote: () => {},
  deleteQuote: () => {},
});

// custom provider
export function QuoteProvider({ children }: { children: ReactNode }) {
  // current quote (displayed in ui)
  const [currentQuote, setCurrentQuote] = useState<Quote>(defaultQuote);
  // quote history (for saving in local storage)
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>(() => {
    // initialize with localStorage
    const inStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (inStorage) {
      try {
        return JSON.parse(inStorage) as Quote[];
      } catch (error) {
        console.error("Error while parsing quoteHistory");
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quoteHistory));
  }, [quoteHistory]);

  // fetches a quote from api
  async function loadQuote() {
    try {
      const data = await getQuote();
      if (data) setCurrentQuote(data);
    } catch (error) {
      console.error("Error while loading a quote from api", error);
    }
  }

  // save current quote in history
  function saveQuote() {
    const duplicate = quoteHistory.some(
      (qh) =>
        qh.quote === currentQuote.quote &&
        qh.authorName === currentQuote.authorName
    );
    if (duplicate) {
      alert("Zitat wurde bereits gespeichert.");
      return;
    }
    const updatedHistory = [currentQuote, ...quoteHistory];
    setQuoteHistory(updatedHistory);
  }

  // deletes the quote with the corresponding index out of history
  function deleteQuote(index: number) {
    const updated = quoteHistory.filter((_, currentIndex) => {
      return currentIndex !== index;
    });
    setQuoteHistory(updated);
  }

  return (
    <QuoteContext.Provider
      value={{
        currentQuote,
        setCurrentQuote,
        quoteHistory,
        setQuoteHistory,
        loadQuote,
        saveQuote,
        deleteQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuotes() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuotes must be used within a <QuoteProvider>");
  }
  return context;
}
