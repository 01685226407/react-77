// state ban đầu là 1 object nên trả về 1 object
const initialState = {
    user:{name:'A'},
    count:10
}

const rootReducer = (state= initialState, action)=>{
    const {type, payload} = action;
    // mục đích là return 1 state mới.
    // dùng switch case để lựa chọn từng action truyền vào
    //action = {type:'tăng', payload:10} action kiểu object

    switch (action.type) {
        case 'INC':
            return {
                ...state,
                count: state.count + action.payload,
            }
           
        case 'DEC':
            return {
                ...state,
                count: state.count - action.payload,
            }
            
        default:
           return state;
    }

}

export default rootReducer