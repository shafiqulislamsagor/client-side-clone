import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFoods from "../Pages/AddFoods";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Privet from "./Privet";
import CardInfo from "../Pages/CardInfo";
import AuthenticationPrivet from "./AuthenticationPrivet";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <AuthenticationPrivet><Login /></AuthenticationPrivet>
            },
            {
                path: '/registration',
                element: <AuthenticationPrivet><Register /></AuthenticationPrivet>
            },
            {
                path: '/available-foods',
                element: <AvailableFoods />
            },
            {
                path: '/add-foods',
                element: <Privet><AddFoods /></Privet>
            },
            {
                path: '/manage-my-food',
                element: <Privet><ManageMyFood /></Privet>
            },
            {
                path: '/my-food-request',
                element: <Privet><MyFoodRequest /></Privet>
            },
            {
                path: '/food-info/:id',
                element: <Privet><CardInfo /></Privet>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`)
            }
        ]
    },
]);

export default router;