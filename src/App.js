import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import SwipeButtons from "./Components/SwipeButtons";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Tinder Clone */}
      <Card />
      {/* Swipe Button */}
      <SwipeButtons />
    </div>
  );
}

export default App;
