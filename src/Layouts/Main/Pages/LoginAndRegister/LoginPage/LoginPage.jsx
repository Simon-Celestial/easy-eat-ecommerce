import React, {useContext, useEffect, useState} from 'react'
import styles from "../LoginAndRegister.module.scss";
import {Header} from "../../../Components/Header/Header.jsx";
import {UiControl} from "../../../Common/UiControl/UiControl.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faKey, faUser} from "@fortawesome/free-solid-svg-icons";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import {PageNameSection} from "../../../Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../../Components/ChangedFooter/ChangedFooter.jsx";
import {AuthContext} from "../../../../../Context/AuthContext/AuthContext.jsx";
import {useFormik} from 'formik';


export const LoginPage = () => {
    const {
        setHeaderColorChange,
        openHandler,
    } = useContext(LayoutContext);

    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    const navigator = useNavigate();
    const {
        login,
    } = useContext(AuthContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            login(values.email,values.password, setErrorMessage, navigator);
        },
    });
    return (
        <div className={styles.pageWrapper}>
            {/*SITE HEADER*/}
            <Header/>
            {/*LOGIN PAGE CONTENT*/}
            <PageNameSection title="LOGIN"/>
            <section className={styles.formSection}>
                <div className={styles.formContent}>
                    <div className={styles.formWrapper}>
                        <div className={styles.message}>
                            {errorMessage}
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <label className={styles.inputWrapper} htmlFor="email">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faUser}/>
                                </div>
                                <input
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    tabIndex={1}
                                    required/>
                            </label>
                            <label className={styles.inputWrapper} htmlFor="password">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faKey}/>
                                </div>
                                <input
                                       type={`${!passwordVisible && "password"}`}
                                       placeholder="Enter Password"
                                       name="password" id="password"
                                       tabIndex={2}
                                       onChange={formik.handleChange}
                                       value={formik.values.password}
                                       required
                                />
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
                                <Link to="/register" tabIndex={6}>
                                    Don't have an account?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/*SITE FOOTER*/}
            <ChangedFooter/>

            {/*COMMON COMPONENTS FOR UI */}
            <UiControl/>
        </div>
    )
}
