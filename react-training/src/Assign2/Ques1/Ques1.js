// 1.Create a functional component called Counter.
// Inside the component, use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// When the user clicks on the buttons, update the count state accordingly.
 


import React,{useState} from 'react'
const Counter=()=>{

    const [count,setCount]=useState(0);

    const clickhandler1=()=>{
        setCount(count+1);
            
    }
    const clickhandler2=()=>{
        setCount(count-1);
            
    }
    return (
        <div>
            <h1>Ques 1</h1>
            <p>{count}</p>
            <button onClick={clickhandler1}>Increment</button>
            <br></br>
            <br></br>
            <button onClick={clickhandler2}>Decrement</button>
        </div>
       

    )
}

export default Counter;