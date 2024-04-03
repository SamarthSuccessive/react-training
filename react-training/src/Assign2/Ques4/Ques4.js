// Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import React,{useState} from 'react';
const RandomNumberGenerator=()=>{
    const [randomNumber,setRandomNumber]=useState(5);

    const clickHandler=()=>{
        const number=Math.floor(Math.random()*(100-1)+1);
        setRandomNumber(number);
    }
    return(
        <div>
            <h1>Hello</h1>
            <p>{randomNumber}</p>
            <button onClick={clickHandler}>Generate Random</button>
        </div>


    )
}

export default RandomNumberGenerator;
