import React from 'react'
import styles from "./ProductSingle.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";

export const ProductSingle = () => {
    return (
        <div className={styles.productSingleWrapper}>
            {/*PAGE HEADER*/}
            <Header/>
            {/*PAGE CONTENT*/}
            <PageNameSection title="Shop"/>
            <section className={styles.productDetailsSection}>
                <div className={styles.productDetailsContent}>
                    <div className={styles.productDetailsLeft}></div>
                    <div className={styles.productDetailsRight}>
                        <div className={styles.detailsRightSale}>
                           -10%
                        </div>
                    </div>

                </div>
            </section>
            {/*PAGE FOOTER*/}
            <Footer />
            {/*PAGE COMPONENTS*/}
            <UiControl/>

        </div>
    )
}
