import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AuthLayout} from "./Layouts/Authentification/AuthLayout.jsx";
import {LoginPage} from "./Layouts/Authentification/Pages/LoginAndRegister/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./Layouts/Authentification/Pages/LoginAndRegister/RegisterPage/RegisterPage.jsx";
import {MainLayout} from "./Layouts/Main/MainLayout.jsx";
import {Home} from "./Layouts/Main/Pages/Home/Home.jsx";
import {ProductSingle} from "./Layouts/Main/Pages/ProductSinglePage/ProductSingle.jsx";
import {ProductList} from "./Layouts/Main/Pages/ProductList/ProductList.jsx";
import {CartPage} from "./Layouts/Main/Pages/CartPage/CartPage.jsx";
import {CheckoutPage} from "./Layouts/Main/Pages/CheckoutPage/CheckoutPage.jsx";
import {AdminLogin} from "./Layouts/Authentification/Pages/AdminLogin/AdminLogin.jsx";
import {AdminPageDashboard} from "./Layouts/Authentification/Pages/AdminPage/AdminPageDashboard/AdminPageDashboard.jsx";
import {WishlistPage} from "./Layouts/Main/Pages/WishlistPage/WishlistPage.jsx";
import {AdminPageOrders} from "./Layouts/Authentification/Pages/AdminPage/AdminPageOrders/AdminPageOrders.jsx";
import {AdminOrderSingle} from "./Layouts/Authentification/Pages/AdminPage/AdminOrderSingle/AdminOrderSingle.jsx";
import {AdminPageStaff} from "./Layouts/Authentification/Pages/AdminPage/AdminPageStaff/AdminPageStaff.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'home/product',
                element: <ProductSingle/>
            },
            {
                path: 'home/shop',
                element: <ProductList/>
            },
            {
                path: 'home/cart',
                element: <CartPage/>
            },
            {
                path: 'home/checkout',
                element: <CheckoutPage/>
            },
            {
                path: 'home/wishlist',
                element: <WishlistPage/>
            },
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
            {path: 'admin', element: <AdminLogin/>},
            {path: 'dashboard', element: <AdminPageDashboard/>},
            {path: 'orders', element: <AdminPageOrders/>},
            {path: 'order', element: <AdminOrderSingle />},
            {path: 'staff', element: <AdminPageStaff />},

        ],
    },
]);
const MainRouter = () => {
    return <RouterProvider router={router}/>;
};

export default MainRouter;

