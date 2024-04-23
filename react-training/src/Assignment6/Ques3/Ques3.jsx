// 3.Create a React component named Counter that displays a number and two buttons, one for incrementing the number and another for decrementing it. Write tests using React Testing Library to ensure that the component behaves as expected.

import React, { useState } from "react";

const Ques3 = ({initial=0,mincount=-10 ,maxcount=10}) => {
    const [counter,setCounter]=useState(initial);
    const clickhandler1=()=>{
      if(counter<maxcount)
        setCounter((prev)=>prev+1);
    }

    const clickhandler2=()=>{
      if(counter>mincount)
        setCounter((prev)=>prev-1);
    }
  return (
<>
<h1>{counter}</h1>
<button onClick={clickhandler1}>Increment</button>
<button onClick={clickhandler2}>Decrement</button>

</>
  );
};

export default Ques3;
