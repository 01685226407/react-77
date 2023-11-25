import "./App.css";

import { RouterProvider } from "react-router-dom";
import { myRouter } from "./routes";
import { Provider } from "react-redux";
import store from "./store/store";
import MyNotification from "./component/Notification";


function App() {
  return (
    <Provider store={store}>
       <MyNotification/> 
      <RouterProvider router={myRouter}></RouterProvider>
    </Provider>
      

  );
}

export default App;
