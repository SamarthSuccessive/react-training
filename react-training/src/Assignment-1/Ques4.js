// // Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.

import React ,{useState} from 'react';

const Counter=()=>{
    const [count,setCount]=useState(0);

    const clickHandler1=()=>{
        
        setCount(count+1);
    }
    const clickHandler2=()=>{
        
        setCount(count-1);
    }

return(
    <div>
        <h1>{count}</h1>
        <button onClick={clickHandler1}>Increment</button>
        <br></br>
        <br></br>
        <button onClick={clickHandler2}>Decrement</button>

    </div>
)
}
export default Counter;