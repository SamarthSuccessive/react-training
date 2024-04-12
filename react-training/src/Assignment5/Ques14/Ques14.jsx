// 14.Create an HOC named withAuth that restricts access to a specific component to authenticated users only. Implement this HOC on a sample component and demonstrate how it protects routes.


import React, { useState } from 'react'
import AboutUs from './About';
import Profile from './Profile';

function Ques14() {
  return (
    <>
    <div>Ques14</div>
    <WithAuth cmp={AboutUs  }/>
    <WithAuth cmp={Profile }/>
    </>
  )
}

function WithAuth(props)
{
  const [auth,setauth]=useState(true);

  return (
    <>
    {console.log(auth)}
    {auth ? <props.cmp /> : ""}
    <button onClick={((e)=>{setauth(false)})}>Auth fail</button>
    <button onClick={((e)=>{setauth(true)})}>Auth </button>

    </>
  )
}

export default Ques14