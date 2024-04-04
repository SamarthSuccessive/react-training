import  { useEffect, useState } from 'react'

function useTimer(time) {
    const [timer,setTimer]=useState(0);
    const [run,setRun]=useState(false);
    

  
    useEffect(()=>{
        let interval;
        if(run)
        {
          interval=  setInterval(()=>{
                setTimer(timer+1);
            },time)
        }
    
        return ()=>{
            clearInterval(interval);
        }
    },[timer,time,run]);

    function start()
    {
        setRun(true);
    }

    function pause()
    {
        setRun(false);
    }

    function reset()
    {
        setTimer(0);
        
    }
  return {timer,start,pause,reset};
}

export default useTimer