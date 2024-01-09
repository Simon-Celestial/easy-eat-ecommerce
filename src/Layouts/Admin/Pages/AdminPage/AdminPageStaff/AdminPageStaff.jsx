import React, {useCallback, useEffect, useState} from 'react'
import styles from "./AdminPageStaff.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {AdminPagination} from "../../AdminComponents/AdminPagination/AdminPagination.jsx";
import {StaffEdit} from "../../AdminComponents/StaffEdit/StaffEdit.jsx";
import useApi from "../../../../../Hooks/useApi.js";
import {StaffTableRow} from "./StaffTableRow/StaffTableRow.jsx";
import {CircleDashed} from "@phosphor-icons/react";

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
})
export const AdminPageStaff = () => {
    const [data, setData] = useState([]);
    const [staffMenuOpen, setStaffMenuOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(Date.now());
    const [loading, setLoading] = useState(true);


    const update = useCallback(() => {
        setShouldUpdate(Date.now());
    }, []);

    const handleOpenEditMenu = () => {
        setEditMode(true);
        setStaffMenuOpen(true);
    }
    const handleOpenAddMenu = () => {
        setEditMode(false);
        setStaffMenuOpen(true);
    }

    const {
        GET: getAllUsers,
    } = useApi('/dashboard/users')


    useEffect(() => {
        (async () => {
            try {
                const result = await getAllUsers();
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
    console.log(loading)

    const handleDelete = useCallback((id) => {
        console.log(id);
    }, [])
    return (
        <div className={styles.adminStaffWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <StaffEdit staffMenuOpen={staffMenuOpen} setStaffMenuOpen={setStaffMenuOpen} editMode={editMode}/>
            <div className={styles.adminStaffContent}>
                <BlockTitle title="All Staff"/>
                <div className={styles.staffContainer}>
                    <form className={styles.staffManagement}>
                        <div className={styles.block}>
                            <label htmlFor="">
                                <input type="text" placeholder="Search by Name"/>
                            </label>
                            <label htmlFor="">
                                <select>
                                    <option value="" hidden>Staff Role</option>
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
                            <label htmlFor="">
                                <button disabled className={`${styles.filter} ${styles.button}`}>Filter</button>
                            </label>
                            <label htmlFor="">
                                <button className={`${styles.resetBtn} ${styles.button}`}>Reset</button>
                            </label>
                        </div>
                    </form>
                    <div className={styles.staffTableWrapper}>
                        {loading
                            &&
                            <div className={styles.loader}>
                                <CircleDashed />
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
                                    (data.map((item) => (
                                        <StaffTableRow
                                            key={item.id}
                                            item={item}
                                            onDelete={handleDelete}
                                            handleOpenEditMenu={handleOpenEditMenu}
                                        />
                                    )))
                                }

                            </div>
                        </div>
                        <AdminPagination/>
                    </div>
                </div>
            </div>
        </div>
    )
}
