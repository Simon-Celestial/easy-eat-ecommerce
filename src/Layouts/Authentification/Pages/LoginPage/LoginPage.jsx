import React, {useContext, useEffect} from 'react'
import styles from "./LoginPage.module.scss";
import {Header} from "../../../Main/Components/Header/Header.jsx";
import {Footer} from "../../../Main/Components/Footer/Footer.jsx";
import {UiControl} from "../../../Main/Common/UiControl/UiControl.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

export const LoginPage = () => {
    const {
        setHeaderColorChange,
    } = useContext(LayoutContext);

    useEffect(()=> {
        setHeaderColorChange(true);
    },[]);

    return (
        <div className={styles.loginPageWrapper}>
            {/*SITE HEADER*/}
            <Header />
            {/*LOGIN PAGE CONTENT*/}
            <section className={styles.loginPageSection}>
                <div className={styles.loginPageContent}>
                    <h1>ABOUT US</h1>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </section>

            {/*SITE FOOTER*/}
            <Footer />

            {/*COMMON COMPONENTS FOR UI */}
            <UiControl />
        </div>
    )
}
