import { useQuotes } from "../../context/QuoteContext";
import "./SavedSection.scss";
import Button from "../../components/Button/Button";
import DeleteIcon from "@/assets/icons/deleteIcon.svg?react";

export function SavedSection() {
  const { quoteHistory, deleteQuote } = useQuotes();

  return (
    <div className="history">
      {quoteHistory.length === 0 ? (
        <p className="history-card__empty">
          Noch keine gespeicherten Zitate vorhanden.
        </p>
      ) : (
        quoteHistory.map((quote, index) => (
          <div key={index} className="history-card">
            <div className="history-card__content">
              <div className="history-card__quote">{quote.quote}</div>
              <div className="history-card__author">
                {quote.authorLink ? (
                  <a
                    className="signature"
                    href={quote.authorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {quote.authorName}
                  </a>
                ) : (
                  quote.authorName
                )}
              </div>
            </div>
            <div className="history-card__delete">
              <Button
                btnType="b"
                btnIcon={<DeleteIcon className="btnIcon" />}
                onClick={() => deleteQuote(index)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedSection;
