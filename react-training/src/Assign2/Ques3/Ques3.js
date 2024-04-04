// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.

// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

import {useState } from "react";

const ToDoList=()=>{

    const [todos,setTodos]=useState([]);
    const [changestatus,setChangeStatus]=useState([]);
    const [data,setData]=useState("");
    const addhandler=()=>{
        //fields that are required to perform the question here 
        //1) field that tell that todo work is completed or not so it will be the boolean value 
        //2)second field required is that text field that is written and signifies what to do in the list 
        const addtodo={text:data,completed:false};
        setTodos([...todos,addtodo]);
        const text="Task Assigned";
        setChangeStatus([...changestatus,text]);
        // console.log(changestatus);
    }

    const checkboxhandler=(index)=>{
        const newTodos=[...todos];
        newTodos[index].completed=!newTodos[index].completed;
        setTodos(newTodos);

        const newStatus=[...changestatus];
        newStatus[index]="Task Completed";
        setChangeStatus(newStatus);
        console.log(todos);
        console.log(changestatus);
    }

    const removehandler=(index)=>{
        //removing in the array so using splice method to do it ,adding removing
        const newdelete=[...todos];
        newdelete.splice(index,1);
        setTodos(newdelete);
    }

   
    return (
        
        <div>

            <h1>Hello</h1>
            <br />
              <input type="text" value={data} onChange={(e)=>{setData(e.target.value)}} placeholder="Enter the task" ></input>
            <button onClick={addhandler}>Add To do</button>
            <br></br>
            <br></br>
            {

               todos.map((item,index)=>{
                    return (
                        <li style={{listStyleType:"none"}} key={index}>
                            <p>{item.text}</p>
                        <input type="checkbox" checked={item.completed} onChange={()=>{checkboxhandler(index)}} ></input> 
                         <span> {changestatus[index]}</span>
                         <br></br>
                         <button onClick={()=>removehandler(index)}>Delete</button>
                         <br></br>
                         <br></br>
                        </li>

                    )
                }
                )
            }
            
        </div>
    )
}

export default ToDoList;

//logic is basically