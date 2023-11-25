import React, { useState } from 'react'
import store from '../../store/store';
import { connect } from 'react-redux';

function Test3Page(props) {
    console.log(props);
    //const {state,dispatch} = props;
    const handleInc =()=>{
    //    props.dispatch({
    //     type:'INC',
    //     payload: 10,
    // });
    props.increase(10);
    }
    const handleDec = ()=>{
        // props.dispatch({
        //     type:'DEC',
        //     payload: 10,
        // });
        props.decrease(10);
    }
    
  return (
    <div>
        <button onClick={handleInc}>
                Tăng
        </button>
        <button onClick={handleDec}>
                Giảm
        </button>
        <h1>{props.number}</h1>
    </div>
  )
};
const mapStateToProps =(globalState)=>{
    return {number:globalState.counter.count};
    //globalState ~ state.getState();
};
// truyền hoặc không truyền thì sử dụng dispatch như trên
const mapDispatchToProps = (dispatch)=>{
    return{
        increase: (data)=> dispatch({
            type:'INC',
            payload: data,
        }),
        decrease: (data)=> dispatch({
            type:'DEC',
            payload: data,
        })
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Test3Page) 
