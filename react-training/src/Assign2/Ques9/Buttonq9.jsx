import React,{useContext} from 'react'
import { Mycontext } from './Createcontextq9'
import './Buttonq9.css';    


function Buttonq9() {

    const {theme,togglebutton}=useContext(Mycontext);
    return (
    <div>
        <button className={ `button-${theme}`} onClick={togglebutton}>Toggle Button</button>
    </div>
  )
}
export default Buttonq9;