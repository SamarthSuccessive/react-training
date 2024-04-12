import React, { useEffect, useState } from 'react'

function Component() {
  const [click,setClick]=useState(0);
  const clickHandler=()=>{
    setClick(click+1);
  }
  useEffect(()=>{
    console.log("mounting");

    return ()=>{
      console.log("Unmounting");
    }    

  },[])
  useEffect(()=>{
    console.log("updating");
  })
  return (
    <>
    <div>Component</div>
    <h1>{click}</h1>
    <button onClick={clickHandler}>Click</button>
    </>
  )
}

export default Component;