import React from 'react'

function Button(props) {
  return (
    <div>
        <button style={{
        padding: '8px 16px',
        margin: '4px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        ...props.style,
      }} onClick={props.clickhandler}></button>
    </div>
  )
}

export default Button