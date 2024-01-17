import React, {useContext, useMemo} from 'react'
import styles from "./AdminOrderSingle.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {useGetData} from "../AdminPageDashboard/useGetData.js";
import {useParams} from "react-router-dom";
import {UserDataContext} from "../../../../../Context/UserDataContext/UserDataContext.jsx";

export const AdminOrderSingle = () => {

    const {
        id,
    } = useParams();
    const {
        data: orders = [],
        loading: ordersLoading,
        error: ordersError
    } = useGetData('dashboard/orders', {
        postProcess: data => data?.data?.data,
        defaultValue: [],
    });
    const {
        cache,
        cacheLoading,
    } = useContext(UserDataContext);
    const order = useMemo(() => {
        if (!orders || orders.length === 0) return null;
        return orders.find(({_id}) => _id = id);
    }, [orders, id])

    console.log(order);
    console.log(cache);
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
                        {
                            (order && !ordersLoading && !cacheLoading) && <div className={styles.invoiceMiddle}>
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

                                {order.products.map((pd, i) => {
                                    const product = cache.find(it => it._id === pd.productId);
                                    return <div className={styles.invoiceMiddleRow}>
                                        <div className={`${styles.sr} ${styles.box}`}>
                                            <span>{i + 1}</span>
                                        </div>
                                        <div className={`${styles.title} ${styles.box}`}>
                                            <span>{product.title}</span>
                                        </div>
                                        <div className={`${styles.quantity} ${styles.box}`}>
                                            <span>{product.stock}</span>
                                        </div>
                                        <div className={`${styles.price} ${styles.box}`}>
                                            <span>${product.salePrice || product.productPrice}</span>
                                        </div>
                                        <div className={`${styles.amount} ${styles.box}`}>
                                            <span>${(product.salePrice || product.productPrice) * product.stock}</span>
                                        </div>
                                    </div>;
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
