import React from 'react'
import styles from "../OrdersTable.module.scss";
import {Link} from "react-router-dom";
import {Eye} from "@phosphor-icons/react";

export const OrdersTableRows = () => {
    const ordersData = [
        {

        }
    ]
    return (
        <div className={styles.tableRow}>
            <div className={`${styles.invoiceNumber} ${styles.tableBox}`}>
                <span>10622</span>
            </div>
            <div className={`${styles.orderTime} ${styles.tableBox}`}>
                <span>Jan 2, 2024 1:24 PM</span>
            </div>
            <div className={`${styles.customerName} ${styles.tableBox}`}>
                <span>Harriet Ballard</span>
            </div>
            <div className={`${styles.method} ${styles.tableBox}`}>
                <span>Cash</span>
            </div>
            <div className={`${styles.amount} ${styles.tableBox}`}>
                <span>$360.77</span>
            </div>
            <div className={`${styles.status} ${styles.tableBox}`}>
                <div className={styles.statusElement}>
                    Canceled
                </div>
            </div>
            <div className={`${styles.action} ${styles.tableBox}`}>
                <select>
                    <option value="Delivered">Delivered</option>
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Cancel">Cancel</option>
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
