import React, {useContext, useMemo} from 'react'
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {ArrowsClockwise, CircleDashed, HourglassMedium, Motorcycle, ShoppingCart, X} from "@phosphor-icons/react";
import {OrdersTable} from "../../AdminComponents/OrdersTable/OrdersTable.jsx";
import styles from "./AdminPageDasboard.module.scss"
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import useApi from "../../../../../Hooks/useApi.js";
import {useGetData} from "./useGetData.js";
import moment from "moment";
import {AuthContext} from "../../../../../Context/AuthContext/AuthContext.jsx";

export const AdminPageDashboard = () => {

    const {
        data: orders = [],
        loading: ordersLoading,
        error: ordersError
    } = useGetData('dashboard/orders', {
        postProcess: data => data?.data?.data,
        defaultValue: [],
    });

    const {
        isSuperAdmin,
    } = useContext(AuthContext);

    const latestOrders = useMemo(() => {
        return (orders || [])?.slice(-10).sort((a,b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf())
    }, [orders])

    return (
        <div className={styles.pageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <div className={styles.pageContent}>
                {isSuperAdmin &&
                    <>
                        {!ordersLoading ?
                            <div className={styles.statisticsBlock}>
                                <div className={styles.statisticsItem}>
                                    <div className={styles.statisticsCircle}>
                                        <ShoppingCart/>
                                    </div>
                                    <div className={styles.statisticsTitle}>
                                        <p>Total Orders</p>
                                        <b>{orders.length}</b>
                                    </div>
                                </div>
                                <div className={styles.statisticsItem}>
                                    <div className={styles.statisticsCircle}>
                                        <HourglassMedium/>
                                    </div>
                                    <div className={styles.statisticsTitle}>
                                        <p>Orders Pending</p>
                                        <b>{orders.filter(it => it.status === 'pending').length}</b>
                                    </div>
                                </div>
                                <div className={styles.statisticsItem}>
                                    <div className={styles.statisticsCircle}>
                                        <ArrowsClockwise/>
                                    </div>
                                    <div className={styles.statisticsTitle}>
                                        <p>Orders Processing</p>
                                        <b>{orders.filter(it => it.status === 'processing').length}</b>
                                    </div>
                                </div>
                                <div className={styles.statisticsItem}>
                                    <div className={styles.statisticsCircle}>
                                        <Motorcycle/>
                                    </div>
                                    <div className={styles.statisticsTitle}>
                                        <p>Orders Delivered</p>
                                        <b>{orders.filter(it => it.status === 'delivered').length}</b>
                                    </div>
                                </div>
                                <div className={styles.statisticsItem}>
                                    <div className={styles.statisticsCircle}>
                                        <X/>
                                    </div>
                                    <div className={styles.statisticsTitle}>
                                        <p>Orders Rejected</p>
                                        <b>{orders.filter(it => it.status === 'cancel').length}</b>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className={styles.loader}>
                                <CircleDashed/>
                            </div>
                        }
                    </>
                }
                {orders.length === 0 ?
                    <div className={styles.noOrders}>
                        <p>No orders received yet...</p>
                    </div>
                    :
                    <BlockTitle title="Recent Orders"/>
                }
                {!ordersLoading ?
                <OrdersTable
                    orders={latestOrders}
                />
                    :
                    <div className={styles.loader}>
                <CircleDashed/>
            </div>

            }
            </div>
        </div>
    )
}
