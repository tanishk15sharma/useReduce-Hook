import "./App.css";
import CounterOne from "./components/Counter";
import CounterObj from "./components/CounterObj";

function App() {
  return (
    <div className="App">
      {
        // <CounterOne />
        <CounterObj />
      }
    </div>
  );
}

export default App;
