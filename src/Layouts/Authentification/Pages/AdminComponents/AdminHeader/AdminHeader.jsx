import React, {useContext, useState} from 'react'
import styles from "./AdminHeader.module.scss";
import {File, Power, Sidebar, User} from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";

export const AdminHeader = () => {
    const {
        openHandler,
        setAdminSideMenuOpen,
    } = useContext(LayoutContext);
    const [adminDropDownVisible, setAdminDropDownVisible] = useState(false);

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
                    <p>Hello, Admin!</p>
                    <div className={styles.adminLogo} onClick={openHandler(setAdminDropDownVisible)}>
                        <User/>
                    </div>
                    <div className={`${styles.adminDropdown} ${adminDropDownVisible && styles.adminDropdownActive}`}>
                        <Link to="/auth/dashboard">
                            <File/>
                            Main page</Link>
                        <button>
                            <Power/>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>

        </header>
    )
}
