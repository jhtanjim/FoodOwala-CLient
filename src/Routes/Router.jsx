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
import Payment from "../Pages/DashBoard/Payment/Payment/Payment";
import CardPayment from "../Pages/DashBoard/Payment/CardPayment/CardPayment";
import AdminRoute from "./AdminRoute";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Bkash from "../Pages/DashBoard/Payment/Payment/Bkash";
import Nagad from "../Pages/DashBoard/Payment/Payment/Nagad";

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
            // users
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'mycart/payment',
                element: <Payment/>
            },
            {
                path: 'mycart/payment/cardPayment',
                element: <CardPayment/>
            },
            {
                path: 'mycart/payment/bkash',
                element: <Bkash></Bkash>
            },
            {
                path: 'mycart/payment/nagad',
                element: <Nagad></Nagad>
            },

            // admin
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
            },
            {
                path: 'manageItems/updateItems/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
            },
           
        ]
    }
]);
