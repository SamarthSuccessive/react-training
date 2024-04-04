// Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.

import React,{useState} from 'react'

const Button=(props)=>{
    const [text,setText]=useState("Hello");
   
    const properties={
        backgroundColor:props.color,
        width:"70px",
        height:"40px",
        fontsize: "60px"

    };
    const clickHandler=()=>{
        setText(props.text);
    }
    return(
    <>
       
            <h1> This is my text {text}</h1>
            <button onClick={clickHandler} style={properties}>Click me</button>

        
        </>
    )
}
export default Button;