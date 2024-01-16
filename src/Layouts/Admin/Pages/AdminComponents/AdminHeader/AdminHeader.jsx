import React, {useContext, useState} from 'react'
import styles from "./AdminHeader.module.scss";
import {File, Power, Sidebar, User} from "@phosphor-icons/react";
import {Link, useNavigate} from "react-router-dom";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";
import {AuthContext} from "../../../../../Context/AuthContext/AuthContext.jsx";

export const AdminHeader = () => {
    const {
        userData,
        logout,
    } = useContext(AuthContext);

    const {
        openHandler,
        setAdminSideMenuOpen,
    } = useContext(LayoutContext);
    const [adminDropDownVisible, setAdminDropDownVisible] = useState(false);

    const navigator = useNavigate();

    return (
        <header className={styles.adminHeaderWrapper}>
            <div className={styles.adminHeaderContent}>
                <div className={styles.sideMenuButton} onClick={openHandler(setAdminSideMenuOpen)}>
                    <Sidebar/>
                </div>
                <Link to="/" className={styles.headerLogo}>
                    <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/logo-inverse.png" alt="Logo"/>

                </Link>
                <div className={styles.adminBlock}>
                    <p>Hello, {userData.name} {userData.surname}</p>
                    <div className={styles.adminLogo} onClick={openHandler(setAdminDropDownVisible)}>
                        <User/>
                    </div>
                    <div className={`${styles.adminDropdown} ${adminDropDownVisible && styles.adminDropdownActive}`}>
                        <Link to="/admin/dashboard">
                            <File/>
                            Main page</Link>
                        <button onClick={() => logout(navigator)}>
                            <Power/>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>

        </header>
    )
}
