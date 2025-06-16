import "./QuoteDisplay.scss";
import { useQuotes } from "../../context/QuoteContext";

export function QuoteDisplay() {
  const { currentQuote } = useQuotes();
  const { quote, authorName, authorLink } = currentQuote;
  return (
    <div className="quote-display">
      <p className="quote-display__quote">
        {quote ? quote : "Lade ein neues Zitat"}
      </p>
      {authorName && (
        <p className="quote-display__author">
          {authorLink ? (
            <a href={authorLink} target="_blank" rel="noopener noreferrer">
              {authorName}
            </a>
          ) : (
            authorName
          )}
        </p>
      )}
    </div>
  );
}

export default QuoteDisplay;
