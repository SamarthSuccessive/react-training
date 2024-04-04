// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import React,{ useState} from "react";
const PersonForm=()=>{
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");    
    const [age,setAge]=useState("");
    
    return (
        <div>
            <h1>Ques 2</h1>
           FirstName: <input type="text" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} placeholder="Enter your First Name"></input>
            <br></br>
            <span>{firstname}</span>
            <br></br>
            LastName: <input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} placeholder="Enter your First Name"></input>
            <br></br>
            <span>{lastname}</span>
            <br></br>
            LastName: <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="Enter your First Name"></input>
            <br></br>
            <span>{age}</span>
        </div>
    )
}


export default PersonForm;
