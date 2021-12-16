import "./App.css";
import CounterOne from "./components/Counter";
import CounterObj from "./components/CounterObj";
import MultiplyRender from "./components/CounterThree";

function App() {
  return (
    <div className="App">
      {
        // <CounterOne />
        <MultiplyRender />
        // <CounterObj />
      }
    </div>
  );
}

export default App;
