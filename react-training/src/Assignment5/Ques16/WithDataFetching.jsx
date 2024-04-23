import React, { useEffect, useState } from 'react';
import axios from 'axios';
function WithDataFetching(props) {
    const [data,setData]=useState([]);
    const url='https://jsonplaceholder.typicode.com/posts';
    useEffect(()=>{ 
        fetchdata();
    },[]);

    const fetchdata=()=>{
        axios.get(url).then((response)=>{
            setData(response.data);
        })
    }
  return (
    <>
    <props.cmp data={data} / >
    </>
  )
}

export default WithDataFetching