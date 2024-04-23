// 1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.

//API: https://jsonplaceholder.typicode.com/todos/1


import React, { useEffect, useState } from 'react'

function Ques1() {
    const [data, setdata] = useState(null);
       useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
                return response.json();
            }).then((resp)=>{
                setdata(resp);
                console.log(data);
            });
        },[]);
        
  return (
    <div>
        <div>Ques1</div>
        {/* <button onClick={fetchData}>Click to Fetch</button> */}
        {data && (
                <div>
                    <h2>Title: {data.title}</h2>
                    <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
                </div>
            )}
    </div>
  )
}

export default Ques1;