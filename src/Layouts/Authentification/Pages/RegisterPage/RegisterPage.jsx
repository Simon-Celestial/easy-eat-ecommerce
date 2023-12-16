import React from 'react'
import styles from "./RegisterPage.module.scss";
import {Header} from "../../../Main/Components/Header/Header.jsx";

export const RegisterPage = () => {
    return (
        <div className={styles.registerPageWrapper}>
            <Header />
            <main className={styles.registerPageMain}>
                <h1>THIS IS REGISTER PAGE</h1>
            </main>

        </div>
    )
}
