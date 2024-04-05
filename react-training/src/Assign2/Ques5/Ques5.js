// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

import React,{useState} from 'react'
const CounterWithStep=()=>{
        const [count,setCount]=useState(0);
        const [step,setStep]=useState(0);

        const clickHandler1=()=>{
            
            setCount(count=>count+parseInt(step));  
        }
        
        const clickHandler2=()=>{
            setCount(count=>count-parseInt(step));
        }
    return(
        <div>
            <p>{count}</p>
            <br></br>
            <input type="text" value={step} placeholder='Enter the stepUp value' onChange={(e)=>{setStep(e.target.value)}}></input>
            <br></br>
            <br></br>
            <button onClick={clickHandler1}>Increment</button>
            <br></br>
            <br></br>
            <button  onClick={clickHandler2}>Decrement</button>

        </div>
    )
}

export default CounterWithStep;