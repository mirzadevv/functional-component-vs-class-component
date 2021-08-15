import "./App.css";
import CounterFunction from "./components/CounterFunction";
import CounterClass from "./components/CounterClass";

function App() {
  return (
    <div className="container">
      <CounterFunction />
      <CounterClass text="This is a Counter Class" />
    </div>
  );
}

export default App;
