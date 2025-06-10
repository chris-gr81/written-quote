import DisplaySection from "./sections/DisplaySection/DisplaySection";
import HeaderSection from "./sections/HeaderSection/HeaderSection";
import SavedSection from "./sections/SavedSection/SavedSection";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <HeaderSection />
      <DisplaySection />
      <SavedSection />
    </div>
  );
}

export default App;
