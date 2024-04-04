// 5.Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.


import React, { useMemo, useState } from 'react'


function Ques15() {
    const [studentlist,SetStudentlist]=useState(['sam','kusagra','Hary']);
    const [value,setValue]=useState("");

    const clickHandler=()=>{
        SetStudentlist([...studentlist,value]);
    }

    const memoisedList=useMemo(()=>{
        return studentlist;
    },[studentlist]);

  return (
    <>
    <div>Ques15</div>
    {
        memoisedList.map((item,index)=>(
            <div key={index}>
                <h1>{item}</h1>
            </div>
        ))
    }
    <input type="text" onChange={(e)=>{setValue(e.target.value)}} value={value}></input>
    <button onClick={clickHandler} >Add</button>
    </>

  )
}

export default Ques15