// 2.Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.


import React from 'react'
import Parent from './Parent'


function Ques1() {
  return (
    <>
    <div>Ques1</div>
    <Parent />
    <br/>
    </>
  )
}
export default Ques1;