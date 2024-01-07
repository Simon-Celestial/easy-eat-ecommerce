import React from 'react'
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {ArrowsClockwise, Motorcycle, ShoppingCart, X} from "@phosphor-icons/react";
import {OrdersTable} from "../../AdminComponents/OrdersTable/OrdersTable.jsx";
import styles from "./AdminPageDasboard.module.scss"
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";

export const AdminPageDashboard = () => {
    return (
        <div className={styles.pageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <div className={styles.pageContent}>
                <BlockTitle title="Overview"/>
                <div className={styles.statisticsBlock}>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsCircle}>
                            <ShoppingCart/>
                        </div>
                        <div className={styles.statisticsTitle}>
                            <p>Total Orders</p>
                            <b>666</b>
                        </div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsCircle}>
                            <ArrowsClockwise/>
                        </div>
                        <div className={styles.statisticsTitle}>
                            <p>Orders Pending</p>
                            <b>22</b>
                        </div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsCircle}>
                            <Motorcycle/>
                        </div>
                        <div className={styles.statisticsTitle}>
                            <p>Orders Processing</p>
                            <b>15</b>
                        </div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsCircle}>
                            <X/>
                        </div>
                        <div className={styles.statisticsTitle}>
                            <p>Orders Rejected</p>
                            <b>666</b>
                        </div>
                    </div>

                </div>

                <BlockTitle title="Recent Orders"/>
                {/*<div className={styles.noOrders}>*/}
                {/*    <p>No orders received yet...</p>*/}
                {/*</div>*/}
                <OrdersTable/>
            </div>
        </div>
    )
}
