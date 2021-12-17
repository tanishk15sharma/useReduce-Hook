import "./App.css";
import CounterOne from "./components/Counter";
import CounterObj from "./components/CounterObj";
import MultiplyRender from "./components/CounterThree";
import FetchUsinguseReduce from "./components/FetchDatauseReduce";
import FetchUsingUseState from "./components/FetchDataUseState";

function App() {
  return (
    <div className="App">
      {
        // <CounterOne />
        // <MultiplyRender />
        // <CounterObj />
        // <FetchUsingUseState />
        <FetchUsinguseReduce />
      }
    </div>
  );
}

export default App;
