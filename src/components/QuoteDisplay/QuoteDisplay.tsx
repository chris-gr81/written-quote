import { useContext } from "react";
import "./QuoteDisplay.scss";
import { QuoteContext } from "../../context/QuoteContext";

export function QuoteDisplay() {
  const { quoteObj } = useContext(QuoteContext);
  const { quote, authorName, authorLink } = quoteObj;
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
