import React, {useContext, useEffect} from 'react'
import {Outlet, useLocation} from "react-router-dom";
import {LayoutContext} from "../../Context/LayoutContext/LayoutContext.jsx";

export const MainLayout = () => {
    const location = useLocation();
    const {
        setMobileMenuOpen,
    } = useContext(LayoutContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        setMobileMenuOpen(false);
    }, [location]);
    return (
        <Outlet/>
    );
};
