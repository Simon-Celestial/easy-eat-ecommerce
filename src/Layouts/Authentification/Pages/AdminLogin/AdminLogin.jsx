import React, {useContext, useState} from 'react'
import styles from "./AdminLogin.module.scss";
import {Key, LockKey, LockKeyOpen, User} from "@phosphor-icons/react";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

export const AdminLogin = () => {
    const {
        openHandler,
    } = useContext(LayoutContext);

    const [passwordLock, setPasswordLock] = useState(false);

    return (
        <div className={styles.adminLoginPage}>
            <form className={styles.adminLoginForm}>
                <h2>Admin Panel <Key weight="fill"/></h2>
                <label htmlFor="login">
                    <div className={styles.logoBlock}>
                        <User weight="fill"/>
                    </div>
                    <input type="text" id="login" name="login"/>
                </label>
                <label htmlFor="password">
                    <div className={styles.logoBlock} onClick={openHandler(setPasswordLock)}>
                        {passwordLock ? <LockKeyOpen weight="fill"/> : <LockKey weight="fill" />}
                    </div>
                    <input type={passwordLock ? "text" : "password"} id="password" name="password"/>
                </label>
            </form>
        </div>
    )
}
