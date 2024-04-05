// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.


import React,{useState} from 'react'
import { Mycontext } from './CreateContextq10';
import Buttonq10 from './Buttonq10';
import Displayq10 from './Displayq10';

function Ques10() {
    const [lang,setLang]=useState('English');
    const changeLanguage=()=>{
        setLang((prev)=> {
            return prev==='English'?'Spanish':'English';
        })
    }
  return (
    <div>
        <Mycontext.Provider value={{lang,changeLanguage}}>
        <Displayq10 />
        <Buttonq10 />
        </Mycontext.Provider>
        
    </div>
  )
}

export default Ques10