import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Root from "../Root/Root";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import AddEquipment from "../privateRoute/AddEquipment";
import Details from "../page/Details";
import AllSportsEquipment from "../page/AllSportsEquipment";
import MyEquipment from "../privateRoute/MyEquipment";
import EditEquipment from "../privateRoute/EditEquipment";
import ErrorPage from "../page/ErrorPage";
import PrivatePage from "../privateRoute/PrivatePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/allequipments',
                element: <AllSportsEquipment></AllSportsEquipment>,
                loader: () => fetch(`https://assignment-10-server-nine-blue.vercel.app/equipments`)
            },
            {
                path: '/addProduct',
                element: <PrivatePage><AddEquipment></AddEquipment></PrivatePage>
            },
            {
                path: '/details/:id',
                element: <PrivatePage><Details></Details></PrivatePage>,
                loader: ({ params }) => fetch(`https://assignment-10-server-nine-blue.vercel.app/equipments/${params.id}`)
            },
            {
                path: '/myproduct/:email',
                element: <PrivatePage><MyEquipment></MyEquipment></PrivatePage>,
                loader: ({ params }) => fetch(`https://assignment-10-server-nine-blue.vercel.app/equipments/author/${params.email}`)
            },
            {
                path: '/myproduct/edit/:id',
                element: <PrivatePage><EditEquipment></EditEquipment></PrivatePage>,
                loader: ({ params }) => fetch(`https://assignment-10-server-nine-blue.vercel.app/equipments/${params.id}`)

            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'signup',
        element: <SignUp></SignUp>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;