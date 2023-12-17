import React from 'react'
import styles from "./LoginPage.module.scss";
import {Header} from "../../../Main/Components/Header/Header.jsx";
import {Footer} from "../../../Main/Components/Footer/Footer.jsx";

export const LoginPage = () => {
    return (
        <div className={styles.loginPageWrapper}>
            <Header />
            <main className={styles.loginPageMain}>
                <h1>THIS IS LOGIN PAGE</h1>
            </main>
            <Footer />
        </div>
    )
}
