import React, {useEffect} from 'react'
import {Outlet, useLocation} from "react-router-dom";

export const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [location]);
    console.log(location);

    return (
        <Outlet/>
    );
};
