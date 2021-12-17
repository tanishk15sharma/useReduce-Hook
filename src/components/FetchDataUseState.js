import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchUsingUseState() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setError("");
        setTitle(res.data);
      })
      .catch((error) => {
        setLoading(false);
        setTitle({});
        setError("something went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "loading" : title.title}
      {error ? error : null}
    </div>
  );
}

export default FetchUsingUseState;
