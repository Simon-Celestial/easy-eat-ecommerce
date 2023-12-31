import React from 'react'
import styles from "./AdminPageDasboard.module.scss";
import {AdminHeader} from "../AdminPageCommon/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../AdminPageCommon/AdminSideMenu/AdminSideMenu.jsx";
import {ArrowsClockwise, Motorcycle, ShoppingCart, X} from "@phosphor-icons/react";

export const AdminPageDashboard = () => {
    return (
        <div className={styles.pageWrapper}>
            <AdminHeader />
            <AdminSideMenu />
            <div className={styles.pageContent}>
                <div className={styles.blockTitle}>
                    <h4>Overview</h4>
                </div>
                <div className={styles.statisticsBlock}>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsCircle}>
                            <ShoppingCart />
                        </div>
                        <div className={styles.statisticsTitle}>
                            <p>Total Orders</p>
                            <b>666</b>
                        </div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsCircle}>
                            <ArrowsClockwise  />
                        </div>
                        <div className={styles.statisticsTitle}>
                            <p>Orders Pending</p>
                            <b>22</b>
                        </div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsCircle}>
                            <Motorcycle  />
                        </div>
                        <div className={styles.statisticsTitle}>
                            <p>Orders Processing</p>
                            <b>15</b>
                        </div>
                    </div>
                    <div className={styles.statisticsItem}>
                        <div className={styles.statisticsCircle}>
                            <X />
                        </div>
                        <div className={styles.statisticsTitle}>
                            <p>Orders Rejected</p>
                            <b>666</b>
                        </div>
                    </div>

                </div>
                <div className={styles.blockTitle}>
                    <h4>Recent Order</h4>
                </div>
            </div>
        </div>
    )
}
