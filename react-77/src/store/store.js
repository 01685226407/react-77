import rootReducer from "./reducer/root";
import {applyMiddleware, legacy_createStore} from "redux";
import thunk from 'redux-thunk';
import {configureStore} from"@reduxjs/toolkit";
import {reducer as counterReducer} from "./sclies/counterSlices";
import {reducer as notiReducer} from "./sclies/notiSlices";
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// );
const store = configureStore({
    reducer:{
        noti: notiReducer
    },
})


export default store;