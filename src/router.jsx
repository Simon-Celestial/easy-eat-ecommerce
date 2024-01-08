import {createBrowserRouter, RouterProvider} from "react-router-dom";
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
import {AdminPageCategories} from "./Layouts/Admin/Pages/AdminPage/AdminPageCategories/AdminPageCategories.jsx";
import {AdminProductsPage} from "./Layouts/Admin/Pages/AdminPage/AdminPageProducts/AdminProductsPage.jsx";
import {AdminPageProduct} from "./Layouts/Admin/Pages/AdminPage/AdminPageProduct/AdminPageProduct.jsx";
import {AuthLayout} from "./Layouts/Authentication/AuthLayout.jsx";
import {PageNotFound} from "./Layouts/Main/Pages/PageNotFound/PageNotFound.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '*',
                element: <PageNotFound />
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
                path: 'product',
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
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            },
        ],
    },
    {
        path: 'auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'checkout',
                element: <CheckoutPage/>
            },
        ],
    },

    {
        path: 'admin',
        element: <AdminLayout/>,
        children: [
            {path: '', element: <AdminLogin />},
            {path: 'login', element: <AdminLogin/>},
            {path: 'dashboard', element: <AdminPageDashboard/>},
            {path: 'orders', element: <AdminPageOrders/>},
            {path: 'order', element: <AdminOrderSingle/>},
            {path: 'staff', element: <AdminPageStaff/>},
            {path: 'category', element: <AdminPageCategories/>},
            {path: 'products', element: <AdminProductsPage />},
            {path: 'product', element: <AdminPageProduct />},
        ],
    },
]);
const MainRouter = () => {
    return <RouterProvider router={router}/>;
};

export default MainRouter;

