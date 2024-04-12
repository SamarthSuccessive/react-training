import React from 'react'

const Component = (props) => {
  return (
    <div>
        {
            props.data.slice(1,11).map((item,index)=>{
                return( 
                <div key={index}>
                    <h1>{item.tittle}</h1>
                    <p>{item.body}</p>
                    <br/>
                    <br/>
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Component
