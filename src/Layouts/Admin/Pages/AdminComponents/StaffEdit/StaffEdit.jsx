import React from 'react'
import styles from "./StaffEdit.module.scss";
import {Power} from "@phosphor-icons/react";
import {useFormik} from "formik";
import {API_KEY, BASE_URL} from "../../../../../Context/AuthContext/AuthContext.jsx";


export const StaffEdit = ({staffMenuOpen, setStaffMenuOpen, editMode}) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            password: '',
        },

        onSubmit: values => {
            console.log(values);

        },
    });

    return (
        <div className={`${styles.staffEditOverlay} ${staffMenuOpen && styles.staffMenuActive}`}>
            <form
                className={styles.staffEditWrapper}
                onSubmit={formik.handleSubmit}

            >
                <div className={styles.staffHead}>
                    <div className={styles.headTitle}>
                        <h2>{editMode ? "Update Staff" : "Add Staff"}</h2>
                        <p>{editMode ? "Updated your staff necessary information from here" : "Add new staff member"}</p>

                    </div>
                    <div className={styles.closeBtn} onClick={() => setStaffMenuOpen(false)}>
                        <Power/>
                    </div>
                </div>
                <div className={styles.staffContent}>
                    <div className={styles.contentItem}>
                        <p>Name:</p>
                        <label htmlFor="name">
                            <input type="text"
                                   id="name"
                                   name="name"
                                   required
                                   onChange={formik.handleChange}
                                   value={formik.values.name}
                            />
                        </label>
                    </div>
                    <div className={styles.contentItem}>
                        <p>Surname:</p>
                        <label htmlFor="surname">
                            <input type="text"
                                   id="surname"
                                   name="surname"
                                   onChange={formik.handleChange}
                                   value={formik.values.surname}
                                   required/>
                        </label>
                    </div>
                    <div className={styles.contentItem}>
                        <p>Email:</p>
                        <label htmlFor="email">
                            <input type="email"
                                   required
                                   id="email"
                                   name="email"
                                   onChange={formik.handleChange}
                                   value={formik.values.email}

                            />
                        </label>
                    </div>
                    <div className={styles.contentItem}>
                        <p>Password:</p>
                        <label htmlFor="password">
                            <input type="password"
                                   required
                                   id="password"
                                   name="password"
                                   onChange={formik.handleChange}
                                   value={formik.values.password}

                            />
                        </label>
                    </div>
                    <div className={styles.contentItem}>
                        <p>Staff Role</p>
                        <label htmlFor="role">
                            <select name="role" id="role">
                                <option value="admin">Admin</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className={styles.staffButtons}>
                    <div className={styles.button} onClick={() => setStaffMenuOpen(false)}>Cancel</div>
                    <button className={styles.button} type="submit">{editMode ? "Update Staff" : "Add Staff"}</button>
                </div>
            </form>
        </div>
    )
}
