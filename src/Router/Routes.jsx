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
import Dashboard from "../Layout/Dashboard";
import Mycart from "../Pages/Dashboard/Mycart/Mycart";
import Allusers from "../Pages/Dashboard/Mycart/Allusers/Allusers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
 
  
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
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<Mycart></Mycart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'allusers',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
          'path':'additem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageitem',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    }
  ]);