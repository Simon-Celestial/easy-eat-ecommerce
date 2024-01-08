import React, {useContext, useEffect, useState} from 'react'
import styles from "./AdminLogin.module.scss";
import {Key, LockKey, LockKeyOpen, User} from "@phosphor-icons/react";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {AuthContext} from "../../../../Context/AuthContext/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

export const AdminLogin = () => {
    const {
        openHandler,
    } = useContext(LayoutContext);

    const navigator = useNavigate();
    const {
        userData, token,
    } = useContext(AuthContext);
    const [passwordLock, setPasswordLock] = useState(false);

    useEffect(() => {
        if(userData.role === 'admin') navigator('/admin/dashboard');
    }, [userData, navigator]);

    if(userData.role === 'admin' && token) {
        return <>...Redirecting</>
    }
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
