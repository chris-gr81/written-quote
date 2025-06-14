import "./ButtonBar.scss";
import Button from "../Button/Button";
import { useContext } from "react";
import { QuoteContext } from "../../context/QuoteContext";
import { useQuoteHistory } from "../../hooks/useQuoteHistory";

export function ButtonBar() {
  const { refreshQuote } = useContext(QuoteContext);
  const { saveQuote } = useQuoteHistory();

  return (
    <div className="button-bar">
      <Button
        className="btn-a"
        btnText="Neues Zitat laden"
        onClick={refreshQuote}
      />
      <Button
        className="btn-a-inverse"
        btnText="Zitat speichern"
        onClick={saveQuote}
      />
    </div>
  );
}
