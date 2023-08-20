import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import MenuItems from "../Pages/MenuItems/MenuItems";
import Order from "../Pages/Oder/Order/Order";
import Login from "../Pages/Login/Login";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/home',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <MenuItems></MenuItems>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    },
  ]);