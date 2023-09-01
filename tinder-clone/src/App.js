import "./App.css";
import Header from "./Header";
import Cardz from "./Cardz";
import SwipeButtons from "./SwipeButtons";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Tinder cards */}
      <Cardz />
      {/* Swipe Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
