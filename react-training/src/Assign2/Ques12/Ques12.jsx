// 12.Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.

import { useReducer } from "react";

const Ques12=()=>{
    const initialstate={
        party1:0,
        party2:0,
        party3:0,
        party4:0

    }
    function reducer(state,action)
    {
        switch( action.type){
            case 'party1':
                return {...state,party1:state.party1+1};
            case 'party2':
                return {...state,party2:state.party2+1};
            case 'party3':
                return {...state,party3:state.party3+1};
            case 'party4':
                return {...state,party4:state.party4+1};
            default :
                return state;
        }

    }
    const [state,dispatch]=useReducer(reducer,initialstate);
    return(
        <>
        <div>
            <h1>Select the Party for Vote</h1>
            <br />
            
            <button onClick={()=>{dispatch({type:'party1'})}}>Party 1</button>
            <br />
            <br />
            <span>{state.party1}</span>
            <br />
            <br />
            <button onClick={()=>{dispatch({type:'party2'})}} >Party 2</button>
            <br />
            <br />
            <span>{state.party2}</span>
            <br />
            <br />
            <button onClick={()=>{dispatch({type:'party3'})}} >Party 3</button>
            <br />
            <br />
            <span>{state.party3}</span>
            <br />
            <br />
            <button onClick={()=>{dispatch({type:'party4'})}} >Party 4</button>
            <br />
            <br />
            <span>{state.party4}</span>
        </div>
        </>
    )
}

export default Ques12;