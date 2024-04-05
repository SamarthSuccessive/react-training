import {useState} from 'react'

function useClipboard() {
 const [status,setStatus]=useState(false);

 const triggerFunction=(text)=>{
  // document.execCommand('copy'); //as it is depreciated 
  try{
    navigator.clipboard.writeText(text);
      setStatus(true);
  }
  catch(err)
  {
    
      setStatus(false);
    
  }
 }
  return {status ,triggerFunction};
}

export default useClipboard