import React from 'react'
import {Link} from "react-router-dom";
import { Eye} from "@phosphor-icons/react";
import styles from "./OrdersTable.module.scss";
import {AdminPagination} from "../AdminPagination/AdminPagination.jsx";

export const OrdersTable = () => {
    return (
        <div className={styles.ordersWrapper}>
            <div className={styles.blockTitleContent}>
                <div className={styles.tableBlock}>
                    <div className={`${styles.tableRow} ${styles.tableHeading}`}>
                        <div className={`${styles.invoiceNumber} ${styles.tableBox}`}>
                            INVOICE NO
                        </div>
                        <div className={`${styles.orderTime} ${styles.tableBox}`}>
                            ORDER TIME
                        </div>
                        <div className={`${styles.customerName} ${styles.tableBox}`}>
                            CUSTOMER NAME
                        </div>
                        <div className={`${styles.method} ${styles.tableBox}`}>
                            METHOD
                        </div>
                        <div className={`${styles.amount} ${styles.tableBox}`}>
                            AMOUNT
                        </div>
                        <div className={`${styles.status} ${styles.tableBox}`}>
                            STATUS
                        </div>
                        <div className={`${styles.action} ${styles.tableBox}`}>
                            ACTION
                        </div>
                        <div className={`${styles.viewInvoice} ${styles.tableBox}`}>
                            INVOICE
                        </div>
                    </div>
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
                            <Link to="/auth/order" className={styles.view}>
                                <Eye/>
                            </Link>
                        </div>
                    </div>
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
                            <Link to="/auth/order" className={styles.view}>
                                <Eye/>
                            </Link>
                        </div>
                    </div>
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
                            <Link to="/auth/order" className={styles.view}>
                                <Eye/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <AdminPagination />
        </div>

    )
}
