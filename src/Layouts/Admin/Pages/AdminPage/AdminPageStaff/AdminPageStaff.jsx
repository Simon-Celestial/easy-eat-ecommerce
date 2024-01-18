import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from "./AdminPageStaff.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {AdminPagination} from "../../AdminComponents/AdminPagination/AdminPagination.jsx";
import {StaffAdd} from "../../AdminComponents/StaffAdd/StaffAdd.jsx";
import useApi from "../../../../../Hooks/useApi.js";
import {StaffTableRow} from "./StaffTableRow/StaffTableRow.jsx";
import {CircleDashed} from "@phosphor-icons/react";
import {Bounce, toast} from 'react-toastify';

const mapData = ({
                     createdAt,
                     email,
                     name,
                     password,
                     role,
                     surname,
                     updatedAt,
                     _id,
                 }) => ({
    createdAt,
    email,
    name,
    password,
    role,
    surname,
    updatedAt,
    id: _id,
});

const PAGE_SIZE = 10;

const filterStaff = (searchText, staffData) => {
    return staffData.filter(({name, role}) =>
        (!searchText || name.toLowerCase().includes(searchText.toLowerCase())) && role === 'admin'
    );
};


export const AdminPageStaff = () => {
    const [data, setData] = useState([]);
    const [staffMenuOpen, setStaffMenuOpen] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(Date.now());
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(0);

    const update = useCallback(() => {
        setShouldUpdate(Date.now());
    }, []);

    const handleOpenAddMenu = () => {
        setStaffMenuOpen(true);
    }

    const {
        GET: getAllUsers,
        DELETE: deleteUser,
    } = useApi('/dashboard/users');


    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const result = await getAllUsers(null,{
                    perPage: 999999,
                    page: 1,
                });
                if (result.status === 200) {
                    setData(JSON.parse(result.data).data.map(it => mapData(it)));
                    setLoading(false);
                } else {
                    console.log(result)
                }
            } catch (e) {
                setLoading(false);
            }

        })()
    }, [shouldUpdate]);


    const handleDelete = useCallback(async (id) => {
        try {
            setLoading(true)
            const result = await deleteUser(id);

            if (result.status === 200) {
                update();
                const initialUser = data.find(it => it.id === id);
                toast.error(`${initialUser.name} ${initialUser.surname} deleted successfully`,
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

            } else {
                console.error(result);
            }
        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }
    }, [data]);


    const filtered = useMemo(() => {
        return filterStaff(searchText, data);
    }, [searchText, data])

    const pagedStaff = useMemo(() => {
        const newArr = [...filtered];
        return newArr.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
    }, [currentPage, filtered]);
    const handleResetSearch = () => {
        setSearchText("");
    };
    return (
        <div className={styles.adminStaffWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <StaffAdd
                staffMenuOpen={staffMenuOpen}
                setStaffMenuOpen={setStaffMenuOpen}
                update={update}
            />
            <div className={styles.adminStaffContent}>
                <BlockTitle title="All Staff"/>
                <div className={styles.staffContainer}>
                    <div className={styles.staffManagement}>
                        <div className={styles.block}>
                            <label htmlFor="">
                                <input type="text"
                                       placeholder="Search by Name"
                                       value={searchText}
                                       onChange={(e) => setSearchText(e.target.value)}
                                />
                            </label>
                            <label htmlFor="">
                                <select disabled>
                                    <option value="admin">Admin</option>
                                </select>
                            </label>
                            <label htmlFor="">
                                <div className={styles.button} onClick={handleOpenAddMenu}>
                                    <span>+</span> Add Staff
                                </div>
                            </label>
                        </div>
                        <div className={styles.block}>
                            <label>
                                <button className={`${styles.resetBtn} ${styles.button}`}
                                        onClick={handleResetSearch}
                                >
                                    Reset
                                </button>
                            </label>
                        </div>
                    </div>
                    <div className={styles.staffTableWrapper}>
                        {loading
                            &&
                            <div className={styles.loader}>
                                <CircleDashed/>
                            </div>
                        }

                        <div className={styles.overflowBlock}>
                            <div className={styles.staffTable}>
                                <div className={styles.tableRow}>
                                    <div className={`${styles.name} ${styles.tableCell}`}>
                                        <p>Name</p>
                                    </div>
                                    <div className={`${styles.email} ${styles.tableCell}`}>
                                        <p>Email</p>
                                    </div>
                                    <div className={`${styles.date} ${styles.tableCell}`}>
                                        <p>Joining Date</p>
                                    </div>
                                    <div className={`${styles.date} ${styles.tableCell}`}>
                                        <p>Update Date</p>
                                    </div>
                                    <div className={`${styles.role} ${styles.tableCell}`}>
                                        <p>Role</p>
                                    </div>
                                    <div className={`${styles.status} ${styles.tableCell}`}>
                                        <p>Status</p>
                                    </div>
                                    <div className={`${styles.publish} ${styles.tableCell}`}>
                                        <p>Published</p>
                                    </div>
                                    <div className={`${styles.action} ${styles.tableCell}`}>
                                        <p>Actions</p>
                                    </div>
                                </div>
                                {!loading &&
                                    (pagedStaff.map((item) => (
                                        <StaffTableRow
                                            key={item.id}
                                            item={item}
                                            onDelete={handleDelete}
                                        />
                                    )))
                                }
                            </div>
                        </div>
                        <AdminPagination
                            pageSize={PAGE_SIZE}
                            totalElements={filtered.length}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
