import React from 'react'

function Childq13(props) {
  return (
    <>
    <h1>Hello welcome to Child Component</h1>
    <h2>{props.count}</h2>
    <button onClick={props.onClick}>Increment</button>
    <br/>
    <br />
    <button onClick={props.removecount} >Remove To Zero</button>
    </>
  )
}

export default Childq13