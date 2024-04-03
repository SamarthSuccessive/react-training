// 17.Build a custom hook named useClipboard for copying text to the clipboard.
// Implement a useClipboard hook that takes a text value as a parameter.
// Use the document.execCommand API to copy the provided text to the clipboard.
// Return a success status and methods to trigger the copying action.
// Develop a component that uses the useClipboard hook to provide a copy button for text.
import {useState} from 'react'
import useClipboard from './useClipboard';

function Ques17() {
  const [text,setText]=useState("");
  const { status, triggerFunction} = useClipboard();
   const clickhandler=()=>{
    triggerFunction(text);
   }
  return (
    <>
    <div>Ques17</div>
    <textarea name="textcontent" value={text} rows={4} cols={40} onChange={(e)=>{setText(e.target.value)}} />
    <br />
    <br />
    <button onClick={clickhandler} >{status? 'Copied':'Not Copies'}</button>
    </>

  )
}

export default Ques17