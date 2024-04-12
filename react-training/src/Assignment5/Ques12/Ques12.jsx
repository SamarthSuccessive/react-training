// 12.Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger) and click handlers. Demonstrate how to use this component in a sample application.


import React from 'react'
import Button from './Button'

function Ques12() {
    // const [primary,setPrimary]=useState("");
    // const [secondary,setSecondary]=useState("");

    const clickhandler1=()=>{
        console.log("Hello, I am primary");
    }
    const clickhandler2=()=>{
        console.log("Hello, I am Secondary");
    }
  return (
    <>
    <div>Ques12</div>
    <Button style={{ backgroundColor: 'red', color: 'black' }} clickhandler={clickhandler1} />
    <Button style={{ backgroundColor: 'blue', color: 'white' }} clickhandler={clickhandler2} />
  
    </>
  )
    
}

export default Ques12