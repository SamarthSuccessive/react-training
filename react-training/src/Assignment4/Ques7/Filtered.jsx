// import React from 'react'

// function Filtered(props) {
    
//   return (
//     <>
//     {
//       props.name!=""?(props.item.category===props.name? <div><span>{props.item.itemname}</span> <span>{props.item.category}</span></div>:<div><span>{props.item.itemname}</span> <span>{props.item.category}</span>
//       </div>):
//     }
//     </>
//   )
// }

// export default Filtered


import React from 'react';

function Filtered(props) {
  return (
    <>
      {/* {props.name !== "" &&
        (props.item.category === props.name ? (
          <div>
            <span>{props.item.itemname}</span> <span>{props.item.category}</span>
          </div>
        ) : (
          <div>
            <span>{props.item.itemname}</span> <span>{props.item.category}</span>
          </div>
        ))} */}
        
        {
          
          props.name===""?<div><span>{props.item.itemname}</span> <span>{props.item.category}</span></div>:(
            props.name===props.item.category ?
            <div>
            <span>{props.item.itemname}</span> <span>{props.item.category}</span>
           </div>:""
          )
        }
    </>
  );
}

export default Filtered;


