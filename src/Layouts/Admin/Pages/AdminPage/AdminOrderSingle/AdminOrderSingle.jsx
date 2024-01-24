import React, {useContext, useMemo} from 'react'
import styles from "./AdminOrderSingle.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {useGetData} from "../AdminPageDashboard/useGetData.js";
import {useParams} from "react-router-dom";
import {UserDataContext} from "../../../../../Context/UserDataContext/UserDataContext.jsx";
import moment from "moment";

export const AdminOrderSingle = () => {

    const {
        id,
    } = useParams();
    const {
        data: orders = [],
        loading: ordersLoading,
        error: ordersError
    } = useGetData('dashboard/orders', {
        query: {
            perPage: 9999,
            page: 1
        },
        postProcess: data => data?.data?.data,
        defaultValue: [],
    });
    const {
        cache,
        cacheLoading,
    } = useContext(UserDataContext);
    const order = useMemo(() => {
        if (!orders || orders.length === 0) return null;
        return orders.find(({_id}) => _id === id);
    }, [orders, id])

    console.log(order);
    // console.log(cache);
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
                                {order ? order.status.toUpperCase() : 'Loading...'}
                            </div>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>DATE:</p>
                            <h2>
                                {order ? moment(order.createdAt).format('YYYY.MM.DD HH:mm') : 'Loading...'}
                            </h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>INVOICE NO:</p>
                            <h2>
                                {order ? order._id.slice(0, 5).toUpperCase() : 'Loading...'}
                            </h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>INVOICE TO:</p>
                            <h2>
                                {order ? order.customer.name : 'Loading...'}
                            </h2>
                        </div>
                    </div>
                    <div className={styles.invoiceTop}>
                        <div className={styles.invoiceTopItem}>
                            <p>PAYMENT METHOD:</p>
                            <h2>
                                {order ? order.method.toUpperCase() : 'Loading...'}

                            </h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>SHIPPING COST:</p>
                            <h2>FREE</h2>
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>DISCOUNT:</p>
                            {order ?
                                <h2>$
                                    {
                                        (order?.products?.map((pd, i) => {
                                            const product = cache.find(it => it._id === pd?.productId);
                                            return (pd.productCount * (product?.productPrice || 0))
                                        }).reduce((a, b) => a + b, 0) - order?.products?.map((pd, i) => {
                                            const product = cache.find(it => it._id === pd?.productId);
                                            return pd.productCount * (product?.salePrice || product?.productPrice || 0)
                                        }).reduce((a, b) => a + b, 0)).toFixed(2)
                                    }
                                </h2>
                                :
                                <h2>Loading...</h2>
                            }
                        </div>
                        <div className={styles.invoiceTopItem}>
                            <p>TOTAL AMOUNT:</p>
                            {order?
                                <h2 style={{color: "#FFB936"}}>
                                    ${
                                    (order?.products?.map((pd, i) => {
                                        const product = cache.find(it => it._id === pd?.productId);
                                        return pd.productCount * (product?.salePrice || product?.productPrice || 0)
                                    }).reduce((a, b) => a + b, 0))?.toFixed(2)
                                }
                                </h2>
                             :
                                <h2>Loading...</h2>
                            }
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
                                    if(!product) return <></>
                                    return <div className={styles.invoiceMiddleRow}>
                                        <div className={`${styles.sr} ${styles.box}`}>
                                            <span>{i + 1}</span>
                                        </div>
                                        <div className={`${styles.title} ${styles.box}`}>
                                            <span>{product?.title}</span>
                                        </div>
                                        <div className={`${styles.quantity} ${styles.box}`}>
                                            <span>{pd?.productCount}</span>
                                        </div>
                                        <div className={`${styles.price} ${styles.box}`}>
                                            <span>${(product?.salePrice || product?.productPrice).toFixed(2)}</span>
                                        </div>
                                        <div className={`${styles.amount} ${styles.box}`}>
                                            <span>${((product?.salePrice || product?.productPrice) * pd.productCount).toFixed(2)}</span>
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
