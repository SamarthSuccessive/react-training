// 2.Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useEffect, useState } from "react";

function Ques2() {
  const [data, setdata] = useState("");
  const [displayError,setdisplayError]=useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (response.status === 200) {
            return response.json();
          } else {
            throw new Error(response.status);
          }
      })
      .then((resp) => {
        console.log("hi2");
        setdata(resp);
        console.log(data);
      }).catch((err)=>{
        setdisplayError("Erorr is comming");
      })
  };

// const fetchData=async()=>{
//     try{

//         let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         response=await response.json();
//         setdata(response);
//     }
//     catch(err)
//     {
//         console.log('123');
//         setdisplayError("Hi async await error");
//     }


// }
  return (
    <>
      <div>Ques2</div>
      {data ? (
        <div>
          <h2>Title: {data.title}</h2>
          <p>Completed: {data.completed ? "Yes" : "No"}</p>
        </div>
      ) : (
        <div>
          {displayError}
          <button onClick={fetchData}>Retry</button>
        </div>
      )}
    </>
  );
}

export default Ques2;
