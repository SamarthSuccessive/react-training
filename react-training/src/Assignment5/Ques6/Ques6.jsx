// 6.Modify the previous assignment to implement error handling using Axios. Display an error message if the request fails and provide a way for the user to retry the request.

import axios from "axios";
import React, { useEffect, useState } from "react";

function Ques6() {
  const url = "https://jsonplaceholder.typicode.com/todo/1";
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(true);
  const [error, setError] = useState("");

  const fetchData = () => {
    axios
      .get(url) 
      .then((response) => {
        if (response.status === 200) {
          setData(response.data);
          setStatus(true);
          setError(null);
        } else {
          throw new Error("Error : Request Fails");
        }
      })            
      .catch((error) => {
        setError(error.message || "An error occurred");
        setStatus(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRetry = () => {
    fetchData();
  };

  return (
    <>
      {status ? (
        <div>
          <h2>Title: {data?.title}</h2>
          <p>Completed: {data?.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <div>
          <div>{error}</div>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}
    </>
  );
}

export default Ques6;
