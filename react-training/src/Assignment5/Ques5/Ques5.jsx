// 5.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.

import axios from "axios";
import React, { useEffect, useState } from "react";

function Ques5() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {data ? (
        <div>
          <h2>Title: {data?.title}</h2>
          <p>Completed: {data?.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Ques5;
