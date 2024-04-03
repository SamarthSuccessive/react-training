import {useState,useCallback} from 'react'
import Childq13 from './Childq13';
function Parentq13() {
    const [count,setCount]=useState(0);
    const handlesubmitbutton=useCallback(()=>{
        setCount(count+1);
    },[count]);

    const removeCount=()=>{
        setCount(0);
    }
  return (
    <>
    <Childq13 onClick={handlesubmitbutton} count={count} removecount={removeCount}/>
    
    </>
  )
}

export default Parentq13