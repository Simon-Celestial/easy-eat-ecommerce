import React, {useContext, useState} from 'react'
import styles from "./AdminSideMenu.module.scss";
import {Browser, Browsers, DiamondsFour, Hamburger, ListNumbers, UsersThree} from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import {LayoutContext} from "../../../../../../Context/LayoutContext/LayoutContext.jsx";

export const AdminSideMenu = () => {
    const {
        adminSideMenuOpen,
        openHandler,
    } = useContext(LayoutContext);
    const [pagesDropDownVisible,setPagesDropDownVisible] = useState(false);

    return (
        <section className={`${styles.adminSideMenuSection} ${!adminSideMenuOpen && styles.adminSideMenuActive}`}>
            <div className={styles.sideMenuItem}>
                <Link to="/" className={styles.sideMenuElement}>
                    <Browser  />
                    Dashboard</Link>
            </div>

            <div className={styles.sideMenuItem}>
                <Link to="/" className={styles.sideMenuElement}>
                    <Hamburger/>
                    Products</Link>
            </div>
            <div className={styles.sideMenuItem}>
                <Link to="/" className={styles.sideMenuElement}>
                    <DiamondsFour/>
                    Categories</Link>
            </div>
            <div className={styles.sideMenuItem}>
                <Link to="/" className={styles.sideMenuElement}>
                    <ListNumbers/>
                    Orders</Link>
            </div>
            <div className={styles.sideMenuItem}>
                <Link to="/" className={styles.sideMenuElement}>
                    <UsersThree/>
                    Staff</Link>
            </div>
            <div className={styles.sideMenuItem}>
                <div className={styles.sideMenuElement} onClick={openHandler(setPagesDropDownVisible)}>
                    <Browsers/>
                    Pages</div>
                <div className={`${styles.pagesDropDown} ${pagesDropDownVisible && styles.pagesDropDownActive}`} >
                    <Link to="/">- Home</Link>
                    <Link to="/">- Product List</Link>
                    <Link to="/">- Product Single</Link>
                    <Link to="/">- Cart</Link>
                    <Link to="/">- Checkout</Link>
                    <Link to="/">- Wishlist Page</Link>
                </div>
            </div>
        </section>
    )
}
