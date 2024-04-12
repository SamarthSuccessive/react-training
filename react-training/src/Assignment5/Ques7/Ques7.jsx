// 7.Create a form in your React component that allows the user to input data (e.g., a post title and content). Use Axios to send a POST request to an API endpoint, posting the user's data.

import React, { useState } from 'react';
import axios from 'axios';

function Ques7() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [data,setData]=useState("");
    const fetch=()=>{
        axios.post(url,{
            title:"Hello World",
            body:"This is the new Post"
        }).then((response)=>{
            setData(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const clickhandler=()=>{
        fetch();
    }
  return (
    <>
    <div>Ques7</div>
    <button onClick={clickhandler}>Post Data</button>
    {
        <div>
            <span>{data.id}</span>
            <br />
            <br />
            <span>{data.title}</span>

        </div>
        
    }
    </>
  )
}

export default Ques7
