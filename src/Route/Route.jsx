import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import UpdateProducts from "../Pages/UpdateProducts/UpdateProducts";
import AddProducts from "../Pages/Home/AddProducts/AddProducts";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProducts></UpdateProducts>
            },
            {
                path: '/addProduct',
                element: <AddProducts></AddProducts>
            },
        ]
    }
])

export default Route;