import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AuthLayout} from "./Layouts/Authentification/AuthLayout.jsx";
import {LoginPage} from "./Layouts/Authentification/Pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./Layouts/Authentification/Pages/RegisterPage/RegisterPage.jsx";
import {MainLayout} from "./Layouts/Main/MainLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
            },

            {
                path: 'home',
                element: <MainLayout />,
            },
            // {
            //     path: 'home/:id',
            //     element: <AuthRoute><Detail/></AuthRoute>,
            // },
            {
                path: '*',
                element: <h1>Page not found</h1>
            },

        ],
    },
    {
        path: 'auth',
        element: <AuthLayout/>,
        children: [
            {path: '', element: <LoginPage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'register', element: <RegisterPage/>},
        ],
    },
]);
const MainRouter = () => {
    return <RouterProvider router={router} />;
};

export default MainRouter;

