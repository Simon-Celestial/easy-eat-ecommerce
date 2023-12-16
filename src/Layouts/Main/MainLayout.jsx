import React from 'react'
import {LayoutContextProvider} from "../../Context/LayoutContext/LayoutContext.jsx";
import ScrollToTop from "./Common/ScrollToTop/ScrollToTop.jsx";
import {MobileMenu} from "./Common/MobileMenu/MobileMenu.jsx";
import {HeaderSearch} from "./Common/HeaderSearch/HeaderSearch.jsx";
import {SideMenu} from "./Common/SideMenu/SideMenu.jsx";
import {Header} from "./Components/Header/Header.jsx";
import {Home} from "./Components/Home/Home.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
    return (
        <div className={styles.siteWrapper}>
            {/*SITE MAIN COMPONENTS*/}
            <Header/>
            {/*<Outlet/>*/}
            <Footer/>
            {/*SCROLL TO HEADER */}
            <ScrollToTop/>
            {/*MOBILE MENU*/}
            <MobileMenu/>
            {/*HEADER SEARCH */}
            <HeaderSearch/>
            {/*SIDE MENU*/}
            <SideMenu/>
        </div>
    );
};
