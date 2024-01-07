import React, {useContext, useEffect, useState} from 'react'
import styles from "../LoginAndRegister.module.scss";
import {Header} from "../../../Components/Header/Header.jsx";
import {UiControl} from "../../../Common/UiControl/UiControl.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faEye,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";
import {Link} from "react-router-dom";
import {PageNameSection} from "../../../Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../../Components/ChangedFooter/ChangedFooter.jsx";
import {IdentificationCard, Key} from "@phosphor-icons/react";
import {useFormik} from "formik";

export const RegisterPage = () => {
    const {
        setHeaderColorChange,
        openHandler,
    } = useContext(LayoutContext);

    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);


    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',

        },
        validate: values => {
            const errors = {};

            if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match';
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <div className={styles.pageWrapper}>
            {/*SITE HEADER*/}
            <Header/>
            {/*PAGE HEADING SECTION*/}
            <PageNameSection title="CREATE ACCOUNT"/>
            {/*FORM SECTION*/}
            <section className={styles.formSection}>
                <div className={styles.formContent}>
                    <div className={styles.formWrapper}>
                        <form
                            onSubmit={formik.handleSubmit}
                        >
                            <div className={styles.message}>
                                {formik.errors.confirmPassword && formik.touched.confirmPassword && (`${formik.errors.confirmPassword}`)}
                            </div>
                            <label className={styles.inputWrapper} htmlFor="name">
                                <div className={styles.inputIconBox}>
                                    <IdentificationCard/>
                                </div>
                                <input type="text"
                                       name="name"
                                       id="name"
                                       placeholder="Enter Name"
                                       tabIndex={1}
                                       onChange={formik.handleChange}
                                       value={formik.values.name}
                                />
                            </label>
                            <label className={styles.inputWrapper} htmlFor="surname">
                                <div className={styles.inputIconBox}>
                                    <IdentificationCard/>
                                </div>
                                <input type="text"
                                       name="surname"
                                       id="surmane"
                                       placeholder="Enter Surname"
                                       tabIndex={2}
                                       required
                                       onChange={formik.handleChange}
                                       value={formik.values.surname}
                                />
                            </label>
                            <label className={styles.inputWrapper} htmlFor="password">
                                <div className={styles.inputIconBox}>
                                    <Key weight="fill"/>
                                </div>
                                <input type={`${!passwordVisible && "password"}`}
                                       placeholder="Enter Password"
                                       name="password" id="password"
                                       tabIndex={3}
                                       required
                                       onChange={formik.handleChange}
                                       value={formik.values.password}
                                />
                                <div className={styles.viewPassword} onClick={openHandler(setPasswordVisible)}>
                                    <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash}/>
                                </div>
                            </label>
                            <label className={styles.inputWrapper} htmlFor="confirmPassword">
                                <div className={styles.inputIconBox}>
                                    <Key weight="fill"/>
                                </div>
                                <input type={`${!confirmPasswordVisible && "password"}`}
                                       placeholder="Confirm Password"
                                       name="confirmPassword"
                                       id="confirmPassword"
                                       tabIndex={4}
                                       required
                                       onChange={formik.handleChange}
                                       value={formik.values.confirmPassword}
                                />
                                <div className={styles.viewPassword} onClick={openHandler(setConfirmPasswordVisible)}>
                                    <FontAwesomeIcon icon={confirmPasswordVisible ? faEye : faEyeSlash}/>
                                </div>
                            </label>
                            <label className={styles.inputWrapper} htmlFor="email">
                                <div className={styles.inputIconBox}>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </div>
                                <input type="email"
                                       name="email"
                                       id="email"
                                       placeholder="Enter Email"
                                       tabIndex={5}
                                       required
                                       onChange={formik.handleChange}
                                       value={formik.values.email}
                                />
                            </label>
                            <div className={styles.buttonWrapper}>
                                <button
                                    type="submit"
                                    tabIndex={6}
                                >
                                    SIGN UP
                                </button>
                            </div>
                            <div className={styles.transferToAnother}>
                                <Link to="/login" tabIndex={7}>
                                    Have an account?
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
