import React from 'react'

function NewContent(props) {
  return (
    <div>{props.name==="show"?props.name:""}</div>
  )
}

export default NewContent