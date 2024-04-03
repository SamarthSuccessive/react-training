// 16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.



import React from 'react'
import EmployeeSalaryq16 from './EmployeeSalaryq16'


function Ques16() {
  return (
    <>
    <div>Ques16</div>
    <EmployeeSalaryq16 />
    </>
  )
}

export default Ques16