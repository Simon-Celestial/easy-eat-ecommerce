import React, {useContext, useEffect} from 'react'
import styles from "./RegisterPage.module.scss";
import {Header} from "../../../Main/Components/Header/Header.jsx";
import {Footer} from "../../../Main/Components/Footer/Footer.jsx";
import {UiControl} from "../../../Main/Common/UiControl/UiControl.jsx";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

export const RegisterPage = () => {
    const {
        setHeaderColorChange,
    } = useContext(LayoutContext);

    useEffect(()=> {
        setHeaderColorChange(true);
    },[]);

    return (
        <div className={styles.registerPageWrapper}>
            {/*SITE HEADER*/}
            <Header />
            {/*REGISTER PAGE MAIN*/}
            <main className={styles.registerPageMain}>
                <h1>THIS IS REGISTER PAGE</h1>
            </main>
            {/*SITE FOOTER*/}
            <Footer />

            {/*COMMON COMPONENTS FOR UI */}
            <UiControl />
        </div>

    )
}
