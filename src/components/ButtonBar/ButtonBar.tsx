import "./ButtonBar.scss";
import Button from "../Button/Button";
import { useQuotes } from "../../context/QuoteContext";
import AddIcon from "@/assets/icons/addIcon.svg?react";

export function ButtonBar() {
  const { loadQuote, currentQuote, saveQuote } = useQuotes();

  return (
    <div className="button-bar">
      <Button btnType="a" btnText="Neues Zitat laden" onClick={loadQuote} />
      {currentQuote.quote && (
        <Button
          btnType="a-inverse"
          btnText="Zitat speichern"
          btnIcon={<AddIcon className="btnIcon" />}
          onClick={saveQuote}
        />
      )}
    </div>
  );
}
