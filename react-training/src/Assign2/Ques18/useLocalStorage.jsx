import {useState} from 'react'

function useLocalStorage() {
    const [getter,setGetter]=useState();

    function setting(key,data)
    {
        if (!key || !data) return;
        localStorage.setItem(key,JSON.stringify(data))
    }

    function getting(key)
    {
        if (!key) return;
       let storedData=localStorage.getItem(key);
       if(storedData)
       {
        setGetter(JSON.parse(storedData));
       }
       else{
        setGetter("Data not found")
       }
    }
    function removing(key)
    {   if (!key) return;
        localStorage.removeItem(key);
    }
  return {getter,setting,getting,removing};
  
}

export default useLocalStorage