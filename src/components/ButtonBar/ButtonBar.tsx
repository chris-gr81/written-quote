import "./ButtonBar.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import { QuoteContext } from "../../context/QuoteContext";
import { useQuoteHistory } from "../../hooks/useQuoteHistory";

export function ButtonBar() {
  const { refreshQuote, quoteObj } = useContext(QuoteContext);
  const { saveQuote } = useQuoteHistory();

  const addIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="btnIcon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
      />
    </svg>
  );

  return (
    <div className="button-bar">
      <Button btnType="a" btnText="Neues Zitat laden" onClick={refreshQuote} />
      {quoteObj.quote && (
        <Button
          btnType="a-inverse"
          btnText="Zitat speichern"
          btnIcon={addIcon}
          onClick={saveQuote}
        />
      )}
    </div>
  );
}
