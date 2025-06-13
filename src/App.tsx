import DisplaySection from "./sections/DisplaySection/DisplaySection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import SavedSection from "./sections/SavedSection/SavedSection";
import "./app.scss";
import { QuoteProvider } from "./context/QuoteContext";

function App() {
  return (
    <QuoteProvider>
      <div className="app">
        <HeaderSection />
        <DisplaySection />
        <SavedSection />
      </div>
    </QuoteProvider>
  );
}

export default App;
