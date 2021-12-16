import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch("Reset");
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          console.log("hi");
          dispatch("Decrement");
        }}
      >
        Decrement
      </button>
      <h1>{count} </h1>
    </div>
  );
}

export default CounterOne;
///use reduce m pehel aaapko do paramater dene honge ek toh fucntion dursa aapko initalvalue deni hogi fir fucntion m aapko do paramenter dene honge ek toh state ki jo value ho vo dursa parament vo jo action karanga ... fir fcuntion jo bhi aapko chaiye vo karo aaap uske baaad useReduce me aapko array k andar two value pass karni hogi as we do in useState same like that so what we will do now it first will be the count and second will be the setCount value will b=will call it as diespach and now in return waht we will do is we will call dispacth on each click with giving paramentes in the call back fucntion to take the value
