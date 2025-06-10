import { ButtonBar } from "../../components/ButtonBar/ButtonBar";
import QuoteDisplay from "../../components/QuoteDisplay/QuoteDisplay";
import "./DisplaySection.scss";

export function DisplaySection() {
  return (
    <div className="display-section">
      <QuoteDisplay />
      <ButtonBar />
    </div>
  );
}

export default DisplaySection;
