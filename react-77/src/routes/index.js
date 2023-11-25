import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../component/admin/DashboardPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import UserPage from "../pages/UserPage";
import TestPage from "../pages/TestPage";
import Test2Page from "../pages/Test2Page";
import ProductPage from "../pages/ProductPage";
export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/test",
    element: (
      <>
      <TestPage/>
    <Test2Page/>
    </>
    )
    
  },
  {
    path: "/admin",
    element: <DashboardPage/>,
    children: [
      {
        path: "",
        element:<UserPage/>,
      },
      {
        path: "user",
        element:<UserPage/>,
      },
      {
        path: "product",
        element:<ProductPage/>
      },
      {
        path: "category",
        element:<h1>category page</h1>
      }


    ],
  },
]);