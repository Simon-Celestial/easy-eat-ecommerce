import React, {useCallback, useContext, useEffect, useState} from 'react'
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
import {Link, useNavigate} from "react-router-dom";
import {PageNameSection} from "../../../Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../../Components/ChangedFooter/ChangedFooter.jsx";
import {CircleDashed, IdentificationCard, Key} from "@phosphor-icons/react";
import {useFormik} from "formik";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../../../../Context/AuthContext/AuthContext.jsx";
import toast from "react-hot-toast";

export const RegisterPage = () => {
    const {
        setHeaderColorChange,
        openHandler,
    } = useContext(LayoutContext);


    useEffect(() => {
        setHeaderColorChange(true);
    }, []);
    const navigation = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);


    // REGISTER FUNC
    const register = useCallback(async (name, surname, password, email) => {
        const url = `${BASE_URL}/${API_KEY}/site/register`;

        const raw = {
            "name": name,
            "surname": surname,
            "password": password,
            "email": email,
        };

        let result;
        setLoading(true);
        try {
            result = await axios.post(url, raw);
        } catch (e) {
            console.log({
                e,
            })
            setErrorMessage(e.response.data.message);
            setLoading(false);
            return;
        } finally {
            setLoading(false);
        }
        if (result) {
            toast("Registration Successful", {
                position: 'top-center',
                style: {
                    zIndex: 999,
                    background: 'green',
                    color: 'white',
                    borderRadius: '6px',
                }
            })
            navigation("/login");
        }
    }, [])


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
        onSubmit: async values => {
            console.log(values);
            try {
                await register(values.name, values.surname, values.password, values.email);
            } catch (error) {
                console.error("Registration error:", error);
                setErrorMessage(error.response?.data?.message || "An error occurred during registration.");
            }
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
                                {errorMessage}
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
                                       id="surname"
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
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        opacity: loading ? 0.5 : 1,
                                    }}
                                    disabled={loading}
                                >
                                    {
                                        loading && (<CircleDashed className={styles.circleLoading} size={30}/>)
                                    }
                                    {
                                        !loading && "SIGN UP"
                                    }
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
