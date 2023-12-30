import React, {useContext, useEffect, useState} from 'react'
import styles from "../LoginAndRegister.module.scss";
import {Header} from "../../../../Main/Components/Header/Header.jsx";
import {UiControl} from "../../../../Main/Common/UiControl/UiControl.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faEnvelope,
    faEye,
    faEyeSlash,
    faKey,
    faMobileScreen,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";
import {Link} from "react-router-dom";
import {PageNameSection} from "../../../../Main/Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../../../Main/Components/ChangedFooter/ChangedFooter.jsx";

export const RegisterPage = () => {
    const {
        setHeaderColorChange,
        openHandler,
    } = useContext(LayoutContext);

    useEffect(()=> {
        setHeaderColorChange(true);
    },[]);

    const [passwordVisible,setPasswordVisible] = useState(false);
    const [confirmPasswordVisible,setConfirmPasswordVisible] = useState(false);

    return (
        <div className={styles.pageWrapper}>
            {/*SITE HEADER*/}
            <Header />
            {/*PAGE HEADING SECTION*/}
            <PageNameSection title="CREATE ACCOUNT"/>
            {/*FORM SECTION*/}
            <section className={styles.formSection}>
                <div className={styles.formContent}>
                    <div className={styles.formWrapper}>
                        <form action="#">
                            <label className={styles.inputWrapper} htmlFor="username">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <input type="text" name="username" id="username" placeholder="Enter Username" tabIndex={1} />
                            </label>
                            <label className={styles.inputWrapper} htmlFor="password">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faKey} />
                                </div>
                                <input type={`${!passwordVisible && "password"}`} placeholder="Enter Password"  name="password" id="password" tabIndex={2} required/>
                                <div className={styles.viewPassword} onClick={openHandler(setPasswordVisible)}>
                                    <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                </div>
                            </label>
                            <label className={styles.inputWrapper} htmlFor="confirmPassword">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faKey} />
                                </div>
                                <input type={`${!confirmPasswordVisible && "password"}`} placeholder="Confirm Password"  name="confirmPassword" id="confirmPassword" tabIndex={3} required/>
                                <div className={styles.viewPassword} onClick={openHandler(setConfirmPasswordVisible)}>
                                    <FontAwesomeIcon icon={confirmPasswordVisible ? faEye : faEyeSlash} />
                                </div>
                            </label>
                            <label className={styles.inputWrapper} htmlFor="email">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <input type="email" name="email" id="email" placeholder="Enter Email" tabIndex={4} required />
                            </label>
                            <label className={styles.inputWrapper} htmlFor="phoneNumber">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faMobileScreen} />
                                </div>
                                <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="+994(XX)XXXXXXX" tabIndex={5} required />
                            </label>

                            <div className={styles.buttonWrapper}>
                                <button type="submit" tabIndex={6}>SIGN UP</button>
                            </div>
                            <div className={styles.transferToAnother}>
                                <Link to="/auth/login" tabIndex={7}>
                                    Have an account?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/*SITE FOOTER*/}
            <ChangedFooter />

            {/*COMMON COMPONENTS FOR UI */}
            <UiControl />
        </div>
    )
}
