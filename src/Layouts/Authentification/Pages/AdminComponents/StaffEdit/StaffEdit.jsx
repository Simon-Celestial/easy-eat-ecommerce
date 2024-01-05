import React from 'react'
import styles from "./StaffEdit.module.scss";
import {Power} from "@phosphor-icons/react";

export const StaffEdit = ({staffMenuOpen,setStaffMenuOpen,editMode}) => {
    return (
        <div className={`${styles.staffEditOverlay} ${staffMenuOpen && styles.staffMenuActive}`}>
            <form className={styles.staffEditWrapper}>
            <div className={styles.staffHead}>
                <div className={styles.headTitle}>
                    <h2>{editMode? "Update Staff" : "Add Staff"}</h2>
                    <p>{editMode? "Updated your staff necessary information from here" : "Add new staff member"}</p>

                </div>
                <div className={styles.closeBtn} onClick={()=>setStaffMenuOpen(false)}>
                    <Power />
                </div>
            </div>
                <div className={styles.staffContent}>
                    <div className={styles.contentItem}>
                        <p>Name:</p>
                        <label htmlFor="">
                            <input type="text" required/>
                        </label>
                    </div>
                    <div className={styles.contentItem}>
                        <p>Surname:</p>
                        <label htmlFor="">
                            <input type="text" required/>
                        </label>
                    </div>
                    <div className={styles.contentItem}>
                        <p>Email:</p>
                        <label htmlFor="">
                            <input type="email" required/>
                        </label>
                    </div>
                    <div className={styles.contentItem}>
                        <p>Password:</p>
                        <label htmlFor="">
                            <input type="password" required/>
                        </label>
                    </div>
                    <div className={styles.contentItem}>
                        <p>Staff Role</p>
                        <label htmlFor="">
                            <select>
                                <option value="" hidden>Select Role</option>
                                <option value="admin">Admin</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className={styles.staffButtons}>
                    <div  className={styles.button} onClick={()=>setStaffMenuOpen(false)}>Cancel</div>
                    <button className={styles.button} type="submit">{editMode? "Update Staff": "Add Staff"}</button>
                </div>
            </form>
        </div>
    )
}
