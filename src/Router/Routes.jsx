import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/secret/secret";
import PrivateRoute from "./PrivateRoute";
 
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<OrderFood></OrderFood>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
  ]);