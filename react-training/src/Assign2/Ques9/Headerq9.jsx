import React,{useContext} from 'react'
import './Headerq9.css';
import { Mycontext } from './Createcontextq9';


function Headerq9() {
        const mode=useContext(Mycontext);
  return (
    <div className={ `head-${mode.theme}`}>
        <h1 >The theme used in here is {mode.theme}</h1>
    </div>
  )
}
export default Headerq9;