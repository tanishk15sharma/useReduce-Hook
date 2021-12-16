import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
};

const counterHandler = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
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
      <h1> Count : {count.firstCounter}</h1>
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
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterObj;
