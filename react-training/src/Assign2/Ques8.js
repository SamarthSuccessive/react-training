// 8.Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

import Imag1 from '../Image/1.png'
import Imag2 from '../Image/2.png'
import Imag3 from '../Image/3.png'
import Imag4 from '../Image/4.png'
import Imag5 from '../Image/5.png'
import Imag6 from '../Image/6.png'
import Imag7 from '../Image/7.png'
import Imag8 from '../Image/8.png'
import Imag9 from '../Image/9.png'
import Imag10 from '../Image/10.png'
// import Imag1 from '../Image/1.png'

import React,{useState,useEffect} from 'react';
function    Slideshow(){
    
    const [check,setCheck]=useState(false);
    const [currIndex,setCurrIndex]=useState(0);
    
   
    
    const arr=[Imag1,Imag2,Imag3,Imag4,Imag5,Imag6,Imag6,Imag7,Imag8,Imag9,Imag10];
    useEffect(()=>{
                    let x;
                    if(check)
                    {
                     x=setInterval(()=>{
                        setCurrIndex((index)=>(index===arr.length-1?0:index+1));
                    },1000);
                
                }
                    return ()=>{
                        if(check)
                        {
                            clearInterval(x);   
                        }
                    }

                },[arr.length,check])

    const clickHandler1=()=>{
      //pause wala logic
      //we wanted to stop the index of the array so 
      //ek variable banate h pause and lay wala type bool taaki agar true hoga to firr useEffect wala play ho otherwise nahi ho
        setCheck(false);

    }

    const clickHandler2=()=>{
        setCheck(true);
    }
    return (    
        //agar mein 1 array bana leta hoon and then firr kya karrha hoon ki 
        <div>
            <h1>Hello</h1>
            <img src={arr[currIndex]} alt="Hello"></img>
            <button onClick={clickHandler1}>Pause</button>
            <br></br>
            <br></br>
            <button onClick={clickHandler2}>Play</button>

        </div>
    )
}

export default Slideshow;
