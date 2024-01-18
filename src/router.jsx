import {createBrowserRouter, Navigate, RouterProvider, useLocation} from "react-router-dom";
import {AdminLayout} from "./Layouts/Admin/AdminLayout.jsx";
import {LoginPage} from "./Layouts/Main/Pages/LoginAndRegister/LoginPage/LoginPage.jsx";
import {RegisterPage} from "./Layouts/Main/Pages/LoginAndRegister/RegisterPage/RegisterPage.jsx";
import {MainLayout} from "./Layouts/Main/MainLayout.jsx";
import {Home} from "./Layouts/Main/Pages/Home/Home.jsx";
import {ProductSingle} from "./Layouts/Main/Pages/ProductSinglePage/ProductSingle.jsx";
import {ProductList} from "./Layouts/Main/Pages/ProductList/ProductList.jsx";
import {CartPage} from "./Layouts/Main/Pages/CartPage/CartPage.jsx";
import {CheckoutPage} from "./Layouts/Authentication/Pages/CheckoutPage/CheckoutPage.jsx";
import {AdminLogin} from "./Layouts/Admin/Pages/AdminLogin/AdminLogin.jsx";
import {AdminPageDashboard} from "./Layouts/Admin/Pages/AdminPage/AdminPageDashboard/AdminPageDashboard.jsx";
import {WishlistPage} from "./Layouts/Main/Pages/WishlistPage/WishlistPage.jsx";
import {AdminPageOrders} from "./Layouts/Admin/Pages/AdminPage/AdminPageOrders/AdminPageOrders.jsx";
import {AdminOrderSingle} from "./Layouts/Admin/Pages/AdminPage/AdminOrderSingle/AdminOrderSingle.jsx";
import {AdminPageStaff} from "./Layouts/Admin/Pages/AdminPage/AdminPageStaff/AdminPageStaff.jsx";
import {AdminPageBrands} from "./Layouts/Admin/Pages/AdminPage/AdminPageBrands/AdminPageBrands.jsx";
import {AdminProductsPage} from "./Layouts/Admin/Pages/AdminPage/AdminPageProducts/AdminProductsPage.jsx";
import {AdminPageProduct} from "./Layouts/Admin/Pages/AdminPage/AdminPageProduct/AdminPageProduct.jsx";
import {AuthLayout} from "./Layouts/Authentication/AuthLayout.jsx";
import {PageNotFound} from "./Layouts/Main/Pages/PageNotFound/PageNotFound.jsx";
import {useContext, useEffect} from "react";
import {AuthContext} from "./Context/AuthContext/AuthContext.jsx";
import {CompletedOrder} from "./Layouts/Main/Pages/CompletedOrder/CompletedOrder.jsx";

const router = (userData, isAdmin, token) => createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '*',
                element: <PageNotFound/>
            },

            {
                path: '/',
                element: <Home/>,
            },
            {
                path: 'home',
                element: <Home/>,
            },
            {
                path: 'product/:id',
                element: <ProductSingle/>,
            },

            {
                path: 'shop',
                element: <ProductList/>,
            },
            {
                path: 'cart',
                element: <CartPage/>
            },
            {
                path: 'wishlist',
                element: <WishlistPage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'register',
                element: <RegisterPage/>
            },
            {
                path: '/order-completed',
                element: <CompletedOrder />
            }
        ],
    },
    {
        path: 'auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'checkout',
                element: (!!userData && !!token) ? <CheckoutPage/> : <Navigate to="/login" replace/>
            },
        ],
    },

    {
        path: 'admin',
        element: isAdmin ? <AdminLayout/> : <PageNotFound/>,
        children: isAdmin ? [
            {path: '', element: isAdmin ? <Navigate to={'/admin/dashboard'}/> : <AdminLogin/>},
            {path: 'login', element: <AdminLogin/>},
            {path: 'dashboard', element: <AdminPageDashboard/>},
            {path: 'orders', element: <AdminPageOrders/>},
            {path: 'order/:id', element: <AdminOrderSingle/>},
            {path: 'staff', element: <AdminPageStaff/>},
            {path: 'brands', element: <AdminPageBrands/>},
            {path: 'products', element: <AdminProductsPage/>},
            {path: 'product', element: <AdminPageProduct/>},
        ] : [],
    },
]);
const MainRouter = () => {
    const {
        isAdmin,
        userData,
        token,
    } = useContext(AuthContext);
    return <RouterProvider router={router(userData, isAdmin, token)}/>;
};

export default MainRouter;

