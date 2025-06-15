import { useContext, useEffect } from "react";
import { QuoteContext } from "../../context/QuoteContext";
import "./SavedSection.scss";
import Button from "../../components/Button/Button";
import { useQuoteHistory } from "../../hooks/useQuoteHistory";

export function SavedSection() {
  const { quoteHistory } = useContext(QuoteContext);
  const { deleteQuote } = useQuoteHistory();

  const deleteIcon = (
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
        d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
      />
    </svg>
  );

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
                btnIcon={deleteIcon}
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
