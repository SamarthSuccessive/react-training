import React,{useContext, useState} from 'react';
import { MyContext } from './Createcontext';
import { MyContext2 } from './CreateContext2';
import './Child.css';

function Child() {
    const {status,setStatus}=useContext(MyContext);
    const {preferences,Preferencesfunction}=useContext(MyContext2);

    const [username,setUserName]=useState("");

    console.log(MyContext);
    const clickHandler=()=>{
        if(status==='not logged')
        {
            setStatus('logged in');
        }
    }
  return (
    <div className={`theme-${preferences}`}>
    <div >Login </div>
    <br />
    <div className={`theme-${preferences}`}>
    <input type="text" placeholder='Enter the username' value={username} onChange={(e)=>{setUserName(e.target.value)}}></input>
    <button onClick={clickHandler} >Login</button>
    <br />
    <span>{status==='logged in'?`Welcome,${username}!`:"Please log in."}</span>
    <br />
    <br/>
    <button onClick={Preferencesfunction} >Toggle Theme</button>
    <br />
    <span>Theme: {preferences}</span>
    </div>
    

    
    </div>
  )
}

export default Child;