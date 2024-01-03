import React, {useContext, useState} from 'react'
import styles from "./AdminPageStaff.module.scss";
import {AdminHeader} from "../AdminPageCommon/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../AdminPageCommon/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../AdminPageCommon/BlockTitle/BlockTitle.jsx";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";
import {Trash, Wrench} from "@phosphor-icons/react";

export const AdminPageStaff = () => {
    const  {
        openHandler,
    } = useContext(LayoutContext);

    const [adminActive,setAdminActive] = useState(false);

    return (
        <div className={styles.adminStaffWrapper}>
            <AdminHeader />
            <AdminSideMenu />
            <div className={styles.adminStaffContent}>
                <BlockTitle  title="All Staff"/>
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
                            <button style={styles.add}><span>+</span> Add Staff</button>
                        </label>
                        </div>
                        <div className={styles.block}>
                            <label htmlFor="">
                                <button disabled className={styles.filter}>Filter</button>
                            </label>
                            <label htmlFor="">
                                <button className={styles.resetBtn}>Reset</button>
                            </label>


                        </div>
                    </form>
                    <div className={styles.staffTable}>
                        <div className={styles.tableRow}>
                            <div className={`${styles.name} ${styles.tableCell}`}>
                                <p>Name</p>
                            </div>
                            <div className={`${styles.email} ${styles.tableCell}`}>
                                <p>Email</p>
                            </div>
                            <div className={`${styles.contact} ${styles.tableCell}`}>
                                <p>Contact</p>
                            </div>
                            <div className={`${styles.date} ${styles.tableCell}`}>
                                <p>Joining Date</p>
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
                        <div className={styles.tableRow}>
                            <div className={`${styles.name} ${styles.tableCell}`}>
                                <span>John Wick</span>
                            </div>
                            <div className={`${styles.email} ${styles.tableCell}`}>
                                <span>salam@popolam.com</span>
                            </div>
                            <div className={`${styles.contact} ${styles.tableCell}`}>
                                <span>+994558280192</span>
                            </div>
                            <div className={`${styles.date} ${styles.tableCell}`}>
                                <span>Jan 4, 2024</span>
                            </div>
                            <div className={`${styles.role} ${styles.tableCell}`}>
                                <span>Admin</span>
                            </div>
                            <div className={`${styles.status} ${styles.tableCell}`}>
                                <span>Active</span>
                            </div>
                            <div className={`${styles.publish} ${styles.tableCell}`}>
                                <span className={`${adminActive && styles.adminActive}`} onClick={openHandler(setAdminActive)}>
                                    <div className={styles.point}></div>
                                </span>
                            </div>
                            <div className={`${styles.action} ${styles.tableCell}`}>
                                <span><Wrench  /></span>
                                <span><Trash  /></span>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={`${styles.name} ${styles.tableCell}`}>
                                <span>John Wick</span>
                            </div>
                            <div className={`${styles.email} ${styles.tableCell}`}>
                                <span>salam@popolam.com</span>
                            </div>
                            <div className={`${styles.contact} ${styles.tableCell}`}>
                                <span>+994558280192</span>
                            </div>
                            <div className={`${styles.date} ${styles.tableCell}`}>
                                <span>Jan 4, 2024</span>
                            </div>
                            <div className={`${styles.role} ${styles.tableCell}`}>
                                <span>Admin</span>
                            </div>
                            <div className={`${styles.status} ${styles.tableCell}`}>
                                <span>Active</span>
                            </div>
                            <div className={`${styles.publish} ${styles.tableCell}`}>
                                <span className={`${adminActive && styles.adminActive}`} onClick={openHandler(setAdminActive)}>
                                    <div className={styles.point}></div>
                                </span>
                            </div>
                            <div className={`${styles.action} ${styles.tableCell}`}>
                                <span><Wrench  /></span>
                                <span><Trash  /></span>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={`${styles.name} ${styles.tableCell}`}>
                                <span>John Wick</span>
                            </div>
                            <div className={`${styles.email} ${styles.tableCell}`}>
                                <span>salam@popolam.com</span>
                            </div>
                            <div className={`${styles.contact} ${styles.tableCell}`}>
                                <span>+994558280192</span>
                            </div>
                            <div className={`${styles.date} ${styles.tableCell}`}>
                                <span>Jan 4, 2024</span>
                            </div>
                            <div className={`${styles.role} ${styles.tableCell}`}>
                                <span>Admin</span>
                            </div>
                            <div className={`${styles.status} ${styles.tableCell}`}>
                                <span>Active</span>
                            </div>
                            <div className={`${styles.publish} ${styles.tableCell}`}>
                                <span className={`${adminActive && styles.adminActive}`} onClick={openHandler(setAdminActive)}>
                                    <div className={styles.point}></div>
                                </span>
                            </div>
                            <div className={`${styles.action} ${styles.tableCell}`}>
                                <span><Wrench  /></span>
                                <span><Trash  /></span>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={`${styles.name} ${styles.tableCell}`}>
                                <span>John Wick</span>
                            </div>
                            <div className={`${styles.email} ${styles.tableCell}`}>
                                <span>salam@popolam.com</span>
                            </div>
                            <div className={`${styles.contact} ${styles.tableCell}`}>
                                <span>+994558280192</span>
                            </div>
                            <div className={`${styles.date} ${styles.tableCell}`}>
                                <span>Jan 4, 2024</span>
                            </div>
                            <div className={`${styles.role} ${styles.tableCell}`}>
                                <span>Admin</span>
                            </div>
                            <div className={`${styles.status} ${styles.tableCell}`}>
                                <span>Active</span>
                            </div>
                            <div className={`${styles.publish} ${styles.tableCell}`}>
                                <span className={`${adminActive && styles.adminActive}`} onClick={openHandler(setAdminActive)}>
                                    <div className={styles.point}></div>
                                </span>
                            </div>
                            <div className={`${styles.action} ${styles.tableCell}`}>
                                <span><Wrench  /></span>
                                <span><Trash  /></span>
                            </div>
                        </div>
                        <div className={styles.tableRow}>
                            <div className={`${styles.name} ${styles.tableCell}`}>
                                <span>John Wick</span>
                            </div>
                            <div className={`${styles.email} ${styles.tableCell}`}>
                                <span>salam@popolam.com</span>
                            </div>
                            <div className={`${styles.contact} ${styles.tableCell}`}>
                                <span>+994558280192</span>
                            </div>
                            <div className={`${styles.date} ${styles.tableCell}`}>
                                <span>Jan 4, 2024</span>
                            </div>
                            <div className={`${styles.role} ${styles.tableCell}`}>
                                <span>Admin</span>
                            </div>
                            <div className={`${styles.status} ${styles.tableCell}`}>
                                <span>Active</span>
                            </div>
                            <div className={`${styles.publish} ${styles.tableCell}`}>
                                <span className={`${adminActive && styles.adminActive}`} onClick={openHandler(setAdminActive)}>
                                    <div className={styles.point}></div>
                                </span>
                            </div>
                            <div className={`${styles.action} ${styles.tableCell}`}>
                                <span><Wrench  /></span>
                                <span><Trash  /></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
