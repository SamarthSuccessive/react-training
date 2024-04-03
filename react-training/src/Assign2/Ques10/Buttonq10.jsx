import React,{useContext} from 'react';
import { Mycontext } from './CreateContextq10';

function Buttonq10() {
    const {changeLanguage}=useContext(Mycontext);

  return (
    <div>
        <button onClick={changeLanguage}>Toggle Language</button>
    </div>
  )
}

export default Buttonq10