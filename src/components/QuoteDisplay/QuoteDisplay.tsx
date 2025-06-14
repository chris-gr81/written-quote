import { useContext } from "react";
import "./QuoteDisplay.scss";
import { QuoteContext } from "../../context/QuoteContext";

export function QuoteDisplay() {
  const { quoteObj } = useContext(QuoteContext);
  const { quote, authorName, link, authorLink } = quoteObj;
  return (
    <div className="quote-display">
      <p className="quote-display__quote">{quote}</p>
      <p className="quote-display__author">{authorName}</p>
    </div>
  );
}

export default QuoteDisplay;
