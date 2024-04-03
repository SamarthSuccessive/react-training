// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

//yahan par first base app jismein button component and the 1st koi aur saa component present hona chaiye 


import React, { useState } from 'react';
import Headerq9 from './Headerq9';
import Buttonq9 from './Buttonq9';
import { Mycontext } from './Createcontextq9';

// import ThemeChanger from './ThemeChanger';

const Base=()=>{
    const [theme,setTheme]=useState('dark');
    const togglebutton=()=>{
        
        if(theme==='dark')
        {
            setTheme('light');
        }
        else{
            setTheme('dark');
        }

    }
    return(
        <>
        <Mycontext.Provider  value={{theme:theme,togglebutton:togglebutton}} >
        <Headerq9 />
        <Buttonq9 />
        </Mycontext.Provider>
        </>
    )
}


export default Base;

