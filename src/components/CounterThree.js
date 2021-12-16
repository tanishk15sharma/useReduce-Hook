import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function MultiplyRender() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialValue); //by using multiply useReduce we can make a new method like count two which will run  indepenendly
  const [countThree, dispatchThree] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Count One : {count} </h1>
      <button onClick={() => dispatch("increment")}>Increase</button>
      <button onClick={() => dispatch("decrement")}>Decrease</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <h1>Count Two : {countTwo} </h1>
      <button onClick={() => dispatchTwo("increment")}>Increase</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrease</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>

      <h1>Count Three : {countThree} </h1>
      <button onClick={() => dispatchThree("increment")}>Increase</button>
      <button onClick={() => dispatchThree("decrement")}>Decrease</button>
      <button onClick={() => dispatchThree("reset")}>Reset</button>
    </div>
  );
}

export default MultiplyRender;
