import React, { useState } from 'react'
import store from '../../store/store';

export default function TestPage() {
    const [number,setCount] = useState(store.getState().count);
    const handleInc =()=>{
        //dispatch action
        store.dispatch({
            type:'INC',
            payload: 10,
        });
    }
    const handleDec = ()=>{
        store.dispatch({
            type:'DEC',
            payload: 10,
        });
    }
    store.subscribe(()=>{
        setCount(store.getState().count);
        console.log(store.getState());
        // store.getState() là lấy hết state hiện tại
        
    })
  return (
    <div>
        <button onClick={handleInc}>
                Tăng
        </button>
        <button onClick={handleDec}>
                Giảm
        </button>
        <h1>{number}</h1>
    </div>
  )
}
