import React, {useContext, useEffect, useState} from 'react'
import styles from "../LoginAndRegister.module.scss";
import {Header} from "../../../../Main/Components/Header/Header.jsx";
import {UiControl} from "../../../../Main/Common/UiControl/UiControl.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faEye, faEyeSlash, faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";
import {Link} from "react-router-dom";
import {PageNameSection} from "../../../../Main/Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../../../Main/Components/ChangedFooter/ChangedFooter.jsx";

export const LoginPage = () => {
    const {
        setHeaderColorChange,
        openHandler,
    } = useContext(LayoutContext);

    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className={styles.pageWrapper}>
            {/*SITE HEADER*/}
            <Header/>
            {/*LOGIN PAGE CONTENT*/}
            <PageNameSection title="LOGIN"/>
            <section className={styles.formSection}>
                <div className={styles.formContent}>
                    <div className={styles.formWrapper}>
                        <form action="#">
                            <label className={styles.inputWrapper} htmlFor="username">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faUser}/>
                                </div>
                                <input type="text" name="username" id="username" placeholder="Enter Username"
                                       tabIndex={1} required/>
                            </label>
                            <label className={styles.inputWrapper} htmlFor="password">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faKey}/>
                                </div>
                                <input type={`${!passwordVisible && "password"}`} placeholder="Enter Password"
                                       name="password" id="password" tabIndex={2} required/>
                                <div className={styles.viewPassword} onClick={openHandler(setPasswordVisible)}>
                                    <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash}/>
                                </div>
                            </label>
                            <div className={styles.passwordControl}>
                                <label htmlFor="rememberPassword" className={styles.rememberPassword}>
                                    <input type="checkbox" name="rememberPassword" id="RememberPassword" tabIndex={3}/>
                                    <p>Remember Password</p>
                                </label>
                                <Link to="/fogot-password" tabIndex={4}>
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className={styles.buttonWrapper}>
                                <button type="submit" tabIndex={5}>SIGN IN</button>
                            </div>
                            <div className={styles.transferToAnother}>
                                <Link to="/auth/register" tabIndex={6}>
                                    Don't have an account?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/*SITE FOOTER*/}
            <ChangedFooter />

            {/*COMMON COMPONENTS FOR UI */}
            <UiControl/>
        </div>
    )
}
