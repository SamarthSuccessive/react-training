import React,{useContext} from 'react';
import { Mycontext } from './CreateContextq10';

function Displayq10() {
    const {lang}=useContext(Mycontext);
    const disp = lang === 'English' ? 'how are you?' : '¿Cómo estás?';
    
    
  return (
    <div>
       <h1>{disp}</h1>
       
    </div>
  )
}

export default Displayq10