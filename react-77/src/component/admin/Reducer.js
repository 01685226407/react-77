import React, { useReducer } from 'react'
import { Button } from 'antd';

function reducer(state, action){
    switch (action.type) {
        case "add":{
            return [...state,`new ${new Date().toLocaleTimeString()}`];
        }
        case "delete":
            state.pop();
            return [...state];
            
            
    
        default:
            return initialState;
    }
}
const initialState = [];
export default function Form() {
    const [state,dispatch] = useReducer(reducer, initialState);
    function handleAdd(){
        dispatch({type:"add"});
    }
    function handleDelete(){
        dispatch({type:"delete"});
    }


    return (
    <>
    <Button onClick={handleAdd}>ADD</Button>
    <Button onClick={handleDelete}>DELETE</Button>
    <ul>
        {state.map(e=> <li key={index}>
            {e}
        </li>)}
    </ul>
    </>
    
  )
}
