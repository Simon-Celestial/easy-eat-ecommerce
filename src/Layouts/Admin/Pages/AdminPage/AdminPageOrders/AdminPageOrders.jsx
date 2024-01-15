import React, {useCallback, useEffect, useState} from 'react'
import styles from "./AdminPageOrders.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {OrdersTable} from "../../AdminComponents/OrdersTable/OrdersTable.jsx";
import useApi from "../../../../../Hooks/useApi.js";

export const AdminPageOrders = () => {

    const {
        GET: getOrders,
        PUT: updateOrder,
    } = useApi('dashboard/orders');

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleUpdateOrder = useCallback(async (order, data) => {
        const result = await updateOrder(order._id, data);
        if(result.status === 200) {
            setOrders(prev => {
                const newOrders = [...prev];
                const foundOrder = newOrders.find(it => it._id === order._id);
                foundOrder.status = data.status;
                return newOrders;
            })
        }
    },[])
    useEffect(() => {
        (async () => {
            setLoading(true);
           const result = await getOrders();
           if (result.status === 200) {
               const response = JSON.parse(result?.data || '{}');
               setOrders(response?.data?.data || []);
           }

           setLoading(false);
        })()
    }, [])
    return (
        <div className={styles.adminOrdersPageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <div className={styles.adminOrdersContent}>
                <BlockTitle title="Orders"/>
                <form className={styles.ordersFilter}>
                    <div className={styles.ordersFilterRow}>
                        <label htmlFor="">
                            <input type="text" placeholder="Search by Customer Name"/>
                        </label>
                        <label htmlFor="">
                            <select>
                                <option value="Status" hidden="">Status</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Cancel">Cancel</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            <select disabled={true}>
                                <option value="Cash">Cash</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.ordersFilterRow}>
                        <label htmlFor="">
                            <p>Start Date</p>
                            <input type="date"/>
                        </label>
                        <label htmlFor="">
                            <p>End Date</p>
                            <input type="date"/>
                        </label>
                    </div>
                    <div className={styles.ordersFilterRow}>
                        <label htmlFor="">
                            <button className={styles.filterBtn}>Filter</button>
                        </label>
                        <label htmlFor="">
                            <button>Reset</button>
                        </label>
                    </div>
                </form>
                <OrdersTable orders={orders} updateOrder={handleUpdateOrder}/>

            </div>
        </div>
    )
}
