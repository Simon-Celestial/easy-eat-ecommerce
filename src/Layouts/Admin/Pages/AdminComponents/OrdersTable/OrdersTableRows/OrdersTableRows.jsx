import React, {useContext} from 'react'
import styles from "../OrdersTable.module.scss";
import {Link} from "react-router-dom";
import {Eye} from "@phosphor-icons/react";
import moment from "moment";
import {UserDataContext} from "../../../../../../Context/UserDataContext/UserDataContext.jsx";
import useApi from "../../../../../../Hooks/useApi.js";

export const OrdersTableRows = ({
                                    order,
                                    updateOrder,
                                }) => {

    const {
        completed,
        createdAt,
        customer,
        method,
        products,
        status,
        total,
        updatedAt,
        _id
    } = order;
    const {
        cache,
    } = useContext(UserDataContext);
    console.log(cache);
    return (
        <div className={styles.tableRow}>
            <div className={`${styles.invoiceNumber} ${styles.tableBox}`}>
                <span>{_id?.slice(0, 5)}</span>
            </div>
            <div className={`${styles.orderTime} ${styles.tableBox}`}>
                <span>{moment(createdAt).format("MMM D, YYYY h:mm A")}</span>
            </div>
            <div className={`${styles.customerName} ${styles.tableBox}`}>
                <span>{customer.name}</span>
            </div>
            <div className={`${styles.method} ${styles.tableBox}`}>
                <span>{method}</span>
            </div>
            <div className={`${styles.amount} ${styles.tableBox}`}>
                <span>${products.map(it => {
                    const product = cache?.find(cached => cached._id === it.productId);

                    if (!product) return 0;
                    return (product.salePrice || product.productPrice) * Number(it.productCount);
                }).reduce((a, b) => a + b, 0).toFixed(2)}</span>
            </div>
            <div className={`${styles.status} ${styles.tableBox}`}>
                <div className={styles.statusElement}>
                    {status}
                </div>
            </div>
            <div className={`${styles.action} ${styles.tableBox}`}>
                <select value={status} onChange={({target}) => {
                    updateOrder(order, {
                        status: target.value,
                    });
                }}>
                    <option value="delivered">Delivered</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="cancel">Cancel</option>
                </select>
            </div>
            <div className={`${styles.viewInvoice} ${styles.tableBox}`}>
                <Link to="/admin/order" className={styles.view}>
                    <Eye/>
                </Link>
            </div>
        </div>

    )
}
