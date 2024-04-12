// // 3.Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded.

import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircleLoader } from "react-spinners";

function Ques3() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 5000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      {loading ? (
        <CircleLoader color="#36D7B7" />
      ) : (
        <div>
          <h2>Title: {data?.title}</h2>
          <p>Completed: {data?.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default Ques3;
