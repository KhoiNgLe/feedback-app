import "./App.css";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <div>
      <Header text="Hello World" />
      <div className="container">
        <FeedbackItem/>
      </div>
    </div>
  );
}

export default App;
