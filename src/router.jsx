import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AuthLayout} from "./Layouts/Authentification/AuthLayout.jsx";
import {LoginPage} from "./Layouts/Authentification/Pages/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./Layouts/Authentification/Pages/RegisterPage/RegisterPage.jsx";
import {MainLayout} from "./Layouts/Main/MainLayout.jsx";
import {Home} from "./Layouts/Main/Pages/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },

            {
                path: 'home',
                element: <Home />,
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

