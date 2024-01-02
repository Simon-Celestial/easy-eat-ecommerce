import React from 'react'
import styles from "./AdminPageOrders.module.scss";
import {AdminHeader} from "../AdminPageCommon/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../AdminPageCommon/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../AdminPageCommon/BlockTitle/BlockTitle.jsx";
import {OrdersTable} from "../AdminPageCommon/OrdersTable/OrdersTable.jsx";

export const AdminPageOrders = () => {
    return (
        <div className={styles.adminOrdersPageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>

            <div className={styles.adminOrdersContent}>
                <BlockTitle title="Orders" />
                <div className={styles.ordersFilter}>

                </div>
                <OrdersTable />

            </div>
        </div>
    )
}
