// Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.



import React, { useMemo, useState } from 'react';

function EmployeeSalaryq16() {
   



      const [findname,setName]=useState("");
      const [updatesalary,setUpdateSalary]=useState();
      const [employee,setEmp]=useState([{ name: 'Samarth', salary: 1 },
      { name: 'Harry', salary: 2 },
      { name: 'Kushagra', salary: 10 }]);
 
  

  const avgSalary = useMemo(() => {
    const calculateAvgSalary = (emp) => {
      let totalSalary = emp.reduce((acc, curr) => {
        return acc + curr.salary;
      }, 0);
      return totalSalary / emp.length;
    };
    return calculateAvgSalary(employee);
  }, [employee]);

  const updateChanges=()=>{
    const newEmployeeArray=[...employee];
    const index=newEmployeeArray.findIndex((element)=>{
            return element.name===findname;
    }) ;
    index!==-1?newEmployeeArray[index].salary=updatesalary:newEmployeeArray.push({name:findname,salary:updatesalary});
    setEmp(newEmployeeArray)
   
  }

  return(
  <>
  <div>Average Salary: {avgSalary}</div>
  <br />
  <input type="text" placeholder='Enter name ' value={findname} onChange={(e)=>{setName(e.target.value)}}></input>
  <br />
  <br />
  <input type="text" placeholder='Enter updated salary' value={updatesalary} onChange={(e)=>{setUpdateSalary(parseInt(e.target.value))}}></input>
  <br />
  <br />
  <button onClick={updateChanges}>Update</button>
  
  </> )

}

export default EmployeeSalaryq16;



