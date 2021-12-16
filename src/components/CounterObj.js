import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const counterHandler = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterObj() {
  const [count, dispatch] = useReducer(counterHandler, initialState);

  return (
    <div>
      <h1>First Count : {count.firstCounter}</h1>
      <h1>Second Count : {count.secondCounter} </h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increase 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrease 5
      </button>

      <div>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          Increase count(2)
        </button>
        <button
          onClick={() => {
            console.log("hi");
            dispatch({ type: "decrement2", value: 1 });
          }}
        >
          Decrease count(2)
        </button>
      </div>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterObj;
