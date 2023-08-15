import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: '/order',
                element: <OrderPage></OrderPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },



        ]
    },
    {
        path: 'dashboard',
        element:<PrivateRoutes> <DashBoard></DashBoard></PrivateRoutes> ,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addItem',
                element: <AddItem></AddItem>
            },
            {
                path: 'manageItems',
                element: <ManageItem></ManageItem>
            }
        ]
    }
]);
