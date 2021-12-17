import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-SUCCESS":
      return { loading: false, error: "", post: action.payload };
    case "FETCH-ERROR":
      return {
        loading: false,
        error: "something went wrong",
        post: {},
      };
    default:
      return state;
  }
};

function FetchUsinguseReduce() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH-SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH-ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}
export default FetchUsinguseReduce;
