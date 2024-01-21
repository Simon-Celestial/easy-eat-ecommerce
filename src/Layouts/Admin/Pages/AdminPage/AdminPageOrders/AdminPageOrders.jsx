import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from "./AdminPageOrders.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {OrdersTable} from "../../AdminComponents/OrdersTable/OrdersTable.jsx";
import useApi from "../../../../../Hooks/useApi.js";
import {AdminPagination} from "../../AdminComponents/AdminPagination/AdminPagination.jsx";
import moment from "moment";
import {Bounce, toast} from "react-toastify";

const PER_PAGE = 10;
export const AdminPageOrders = () => {

    const {
        GET: getOrders,
        PUT: updateOrder,
    } = useApi('dashboard/orders');

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleUpdateOrder = useCallback(async (order, data) => {
        try {
            setLoading(true);
            const result = await updateOrder(order._id, data);
            if (result.status === 200) {
                toast.success(`Order status successfully updated!`,
                    {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    }
                );
                setOrders(prev => {
                    const newOrders = [...prev];
                    const foundOrder = newOrders.find(it => it._id === order._id);
                    foundOrder.status = data.status;
                    return newOrders;

                });
            }
            else {
                const receivedMessage = JSON.parse(result.data || '{}')?.message || `Failed to update order status!`;
                console.log();

                toast.error(receivedMessage,
                    {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    }
                );
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }, []);
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const result = await getOrders();

                if (result.status === 200) {
                    const response = JSON.parse(result?.data || '{}');
                    setOrders(response?.data?.data || []);
                }
                else {
                    console.error(`Failed to fetch orders. Status: ${result.status}`);
                }
            } catch (error) {
                console.error("Error fetching orders:", error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const [page, setPage] = useState(0);
    const [filters, setFilters] = useState({});


    const dataFiltered = useMemo(() => {
        return orders.filter(order => {
            let passed = true;
            if (filters.customerName)
                passed &= order?.customer?.name.toLowerCase().includes(filters?.customerName?.toLowerCase());
            if (filters.status)
                passed &= order.status === filters.status;
            if (filters.startDate) {
                const startDateMs = moment(filters.startDate).valueOf();
                const orderCreatedMs = moment(order.createdAt).valueOf();
                passed &= (startDateMs <= orderCreatedMs);
            }
            if (filters.endDate) {
                const endDateMs = moment(filters.endDate).valueOf();
                const orderCreatedMs = moment(order.createdAt).valueOf();
                passed &= (endDateMs >= orderCreatedMs);
            }

            return passed;
        }).sort((a,b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf());
    }, [filters, orders]);
    useEffect(() => {
        setPage(0);
    }, [filters])
    const dataPaginated = useMemo(() => dataFiltered.slice(page * PER_PAGE, (page + 1) * PER_PAGE), [page, dataFiltered])
    return (
        <div className={styles.adminOrdersPageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <div className={styles.adminOrdersContent}>
                <BlockTitle title="Orders"/>
                <div className={styles.ordersFilter}>
                    <div className={styles.ordersFilterRow}>
                        <label htmlFor="">
                            <input type="text"
                                   placeholder="Search by Customer Name"
                                   value={filters.customerName || ''}
                                   onChange={({target}) => setFilters(prev => ({
                                       ...prev,
                                       customerName: target.value
                                   }))}/>
                        </label>
                        <label htmlFor="">
                            <select
                                value={filters.status || ''}
                                onChange={({target}) => setFilters(prev => ({
                                    ...prev,
                                    status: target.value
                                }))}
                            >
                                <option value="">Choose a status</option>
                                <option value="delivered">Delivered</option>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="cancel">Cancel</option>
                            </select>
                        </label>
                        <label htmlFor="">
                            <select disabled={true}>
                                <option value="card">Card</option>
                            </select>
                        </label>
                    </div>
                    <div className={styles.ordersFilterRow}>
                        <label htmlFor="">
                            <p>Start Date</p>
                            <input
                                type="datetime-local"
                                value={filters.startDate || ''}
                                onChange={({target}) => setFilters(prev => ({
                                    ...prev,
                                    startDate: target.value,
                                }))}
                            />
                        </label>
                        <label htmlFor="">
                            <p>End Date</p>
                            <input
                                type="datetime-local"
                                value={filters.endDate || ''}
                                onChange={({target}) => setFilters(prev => ({
                                    ...prev,
                                    endDate: target.value,
                                }))}
                            />
                        </label>
                    </div>
                    <div className={styles.ordersFilterRow}>
                        <label htmlFor="">
                            <button onClick={() => setFilters({})}>Reset</button>
                        </label>
                    </div>
                </div>
                <OrdersTable orders={dataPaginated}
                             loading={loading}
                             updateOrder={handleUpdateOrder}
                             pagination={<AdminPagination
                                 currentPage={page}
                                 setCurrentPage={setPage}
                                 totalElements={dataFiltered?.length}
                                 pageSize={PER_PAGE}
                             />
                             }/>

            </div>
        </div>
    )
}
