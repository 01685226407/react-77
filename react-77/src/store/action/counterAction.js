const increase =(data)=>{
    return {
        type:'INC',
        payload:data,
    }
}
const decrease =(data)=>{
    return {
        type: 'DEC',
        payload: data,
    }
}
const increaseAsync =(data)=>{
    return async (dispatch)=>{
        await delay();
        dispatch(increase(data));
    };
};
const delay =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },10000);
    })
}
export {increase,decrease,increaseAsync};