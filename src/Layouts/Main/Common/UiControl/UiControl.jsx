import React from 'react'
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";
import {MobileMenu} from "../MobileMenu/MobileMenu.jsx";
import {HeaderSearch} from "../HeaderSearch/HeaderSearch.jsx";
import {SideMenu} from "../SideMenu/SideMenu.jsx";

export const UiControl = () => {
    return (
        <>
            {/*SCROLL TO HEADER */}
            <ScrollToTop/>
            {/*MOBILE MENU*/}
            <MobileMenu/>
            {/*HEADER SEARCH */}
            <HeaderSearch/>
            {/*SIDE MENU*/}
            <SideMenu/>
        </>
    )
}
