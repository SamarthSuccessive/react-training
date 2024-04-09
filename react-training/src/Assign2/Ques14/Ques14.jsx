// create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.


import { useCallback, useState} from 'react'

function Ques14() {
    
    const [tasks,setTasks]=useState([{task:'play',buttonvalue:'Complete'},{task:'watching tv',buttonvalue:'Complete'},{task:'Listening Music',buttonvalue:'Complete'}]);
    const clickHandler=useCallback((index)=>{
    const newTasks=[...tasks];
    newTasks[index].buttonvalue='Completed';
    setTasks(newTasks);
   },[tasks]);

  return (
    <>
    <div>Ques14</div>
    {
        tasks.map((item,index)=>( 
            <div key={index}>
                <p>{item.task}</p>
                {console.log("task: ", item, index)}
                <button onClick={()=>clickHandler(index)}>{item.buttonvalue}</button>
            </div>
        )

        )
    }
    
    
    </>

  )
}

export default Ques14