import React from 'react'
import styles from "./AdminOrderSingle.module.scss";
import {AdminHeader} from "../AdminPageCommon/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../AdminPageCommon/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../AdminPageCommon/BlockTitle/BlockTitle.jsx";

export const AdminOrderSingle = () => {
    return (
        <div className={styles.orderSinglePageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <div className={styles.orderSingleContent}>
                <BlockTitle title="Invoice"/>
                <div className={styles.invoiceBlock}>
                    <div className={styles.invoiceTop}>
                        <div className={styles.invoiceTopItem}>
                            <p>STATUS:</p>
                            <div className={styles.status}>
                                Canceled
                            </div>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>DATE:</p>
                            <h2>Dec 2, 2023</h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>INVOICE NO:</p>
                            <h2>#10630</h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>INVOICE TO:</p>
                            <h2>Customer Name</h2>
                        </div>
                    </div>
                    <div className={styles.invoiceTop}>
                        <div className={styles.invoiceTopItem}>
                            <p>PAYMENT METHOD:</p>
                            <h2>Cash</h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>SHIPPING COST:</p>
                            <h2>$60.00</h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>DISCOUNT:</p>
                            <h2>$0.00</h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>TOTAL AMOUNT:</p>
                            <h2 style={{color: "#FFB936"}}>$960.00</h2>
                        </div>
                    </div>
                    <div className={styles.overFlowX}>
                        <div className={styles.invoiceMiddle}>
                            <div className={styles.invoiceMiddleRow}>
                                <div className={`${styles.sr} ${styles.box}`}>
                                    <p>SR</p>
                                </div>
                                <div className={`${styles.title} ${styles.box}`}>
                                    <p>PRODUCT TITLE</p>
                                </div>
                                <div className={`${styles.quantity} ${styles.box}`}>
                                    <p>QUANTITY</p>
                                </div>
                                <div className={`${styles.price} ${styles.box}`}>
                                    <p>PRICE</p>
                                </div>
                                <div className={`${styles.amount} ${styles.box}`}>
                                    <p>AMOUNT</p>
                                </div>
                            </div>
                            <div className={styles.invoiceMiddleRow}>
                                <div className={`${styles.sr} ${styles.box}`}>
                                    <span>1</span>
                                </div>
                                <div className={`${styles.title} ${styles.box}`}>
                                    <span>Premium T-Shirt-Small,Red</span>
                                </div>
                                <div className={`${styles.quantity} ${styles.box}`}>
                                    <span>2</span>
                                </div>
                                <div className={`${styles.price} ${styles.box}`}>
                                    <span>$450.00</span>
                                </div>
                                <div className={`${styles.amount} ${styles.box}`}>
                                    <span>$900.00</span>
                                </div>
                            </div>
                            <div className={styles.invoiceMiddleRow}>
                                <div className={`${styles.sr} ${styles.box}`}>
                                    <span>1</span>
                                </div>
                                <div className={`${styles.title} ${styles.box}`}>
                                    <span>Premium T-Shirt-Small,Red</span>
                                </div>
                                <div className={`${styles.quantity} ${styles.box}`}>
                                    <span>2</span>
                                </div>
                                <div className={`${styles.price} ${styles.box}`}>
                                    <span>$450.00</span>
                                </div>
                                <div className={`${styles.amount} ${styles.box}`}>
                                    <span>$900.00</span>
                                </div>
                            </div>
                            <div className={styles.invoiceMiddleRow}>
                                <div className={`${styles.sr} ${styles.box}`}>
                                    <span>1</span>
                                </div>
                                <div className={`${styles.title} ${styles.box}`}>
                                    <span>Premium T-Shirt-Small,Red</span>
                                </div>
                                <div className={`${styles.quantity} ${styles.box}`}>
                                    <span>2</span>
                                </div>
                                <div className={`${styles.price} ${styles.box}`}>
                                    <span>$450.00</span>
                                </div>
                                <div className={`${styles.amount} ${styles.box}`}>
                                    <span>$900.00</span>
                                </div>
                            </div>
                            <div className={styles.invoiceMiddleRow}>
                                <div className={`${styles.sr} ${styles.box}`}>
                                    <span>1</span>
                                </div>
                                <div className={`${styles.title} ${styles.box}`}>
                                    <span>Premium T-Shirt-Small,Red</span>
                                </div>
                                <div className={`${styles.quantity} ${styles.box}`}>
                                    <span>2</span>
                                </div>
                                <div className={`${styles.price} ${styles.box}`}>
                                    <span>$450.00</span>
                                </div>
                                <div className={`${styles.amount} ${styles.box}`}>
                                    <span>$900.00</span>
                                </div>
                            </div>
                            <div className={styles.invoiceMiddleRow}>
                                <div className={`${styles.sr} ${styles.box}`}>
                                    <span>1</span>
                                </div>
                                <div className={`${styles.title} ${styles.box}`}>
                                    <span>Premium T-Shirt-Small,Red</span>
                                </div>
                                <div className={`${styles.quantity} ${styles.box}`}>
                                    <span>2</span>
                                </div>
                                <div className={`${styles.price} ${styles.box}`}>
                                    <span>$450.00</span>
                                </div>
                                <div className={`${styles.amount} ${styles.box}`}>
                                    <span>$900.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
