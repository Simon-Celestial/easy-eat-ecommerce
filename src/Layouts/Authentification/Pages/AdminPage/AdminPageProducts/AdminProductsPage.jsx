import React from 'react'
import styles from "./AdminProductsPage.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
export const AdminProductsPage = () => {
    return (
        <div className={styles.adminProductPageWrapper}>
            <AdminHeader />
            <AdminSideMenu />
            <div className={styles.adminProductPageContent}>
                <BlockTitle title="Products"/>
                <div className={styles.productsAddBlock}></div>
                <div className={styles.productsSearchBlock}></div>
                <div className={styles.productsTableBlock}></div>
            </div>
        </div>
    )
}
