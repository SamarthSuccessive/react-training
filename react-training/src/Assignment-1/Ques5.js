// Create a functional component named TaskList that accepts an array of task names as a prop.
// Use the map function to render each task name as a list item.
// Import and render the TaskList component in the App component with an array of tasks.

import React from 'react';
const TaskList=(props)=>{

    return(
        <div>
            <h1>Here is the task given in the array </h1>
            {
                props.names.map((item,index)=>{
                    return (
                        <ul>
                        <div key={index}>
                            <li>
                            <h1>{item}</h1>
                            </li>
                        </div>
                        </ul>
                    )
                }
                )
            }   

        </div>
    )
}
export default TaskList;