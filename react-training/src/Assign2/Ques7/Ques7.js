// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.


import React,{useEffect,useState} from 'react';
const Notification=()=>{

    const [message,setMessage]=useState("");

   
    useEffect(()=>{ 

        if(message)
        {
        const x=setTimeout(()=>{
        alert(message);   //we have to pop up the alert here or what to do in the message section .
        },5000)

        return ()=>{
            clearTimeout(x);
        }
    }
    
    },[message]);
    return (
        <div>
            <h1>Hello</h1>
            Enter the message: <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}}></input>
        </div>
    )
}     
export default Notification