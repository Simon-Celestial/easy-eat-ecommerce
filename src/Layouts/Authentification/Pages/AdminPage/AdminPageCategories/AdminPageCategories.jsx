import React from 'react'
import styles from "./AdminPageCategories.module.scss";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {AdminPagination} from "../../AdminComponents/AdminPagination/AdminPagination.jsx";

export const AdminPageCategories = () => {
    return (
        <div className={styles.categoriesPageWrapper}>
            <AdminHeader />
            <AdminSideMenu />
            <div className={styles.categoriesPageContent}>
                <BlockTitle title="Category"/>
                <form className={styles.categoryManipulation}>
                 <div className={styles.searchBlock}>
                     <label htmlFor="">
                         <input type="text" placeholder="Enter category name..."/>
                     </label>
                     <div className={styles.searchButtons}>
                         <button>Search</button>
                         <button>Clear</button>
                     </div>
                 </div>
                    <div className={styles.addCategory}>
                        <button>Add Category</button>
                        <button>Remove Category</button>
                    </div>
                </form>
                <div className={styles.categoryTableWrapper}>
                    <div className={styles.categoryOverflow}>
                        <div className={styles.categoryTable}>
                            <div className={styles.tableRow}>
                             <div className={`${styles.checkBox} ${styles.box}`}>
                                 <input type="checkbox"/>
                             </div>
                                <div className={`${styles.id} ${styles.box}`}>
                                    <p>Id</p>
                                </div>
                                <div className={`${styles.icon} ${styles.box}`}>
                                    <p>Icon</p>
                                </div>
                                <div className={`${styles.name} ${styles.box}`}>
                                    <p>Name</p>
                                </div>
                                <div className={`${styles.description} ${styles.box}`}>
                                    <p>Description</p>
                                </div>
                                <div className={`${styles.published} ${styles.box}`}>
                                    <p>Published</p>
                                </div>
                                <div className={`${styles.action} ${styles.box}`}>
                                    <p>Actions</p>
                                </div>



                            </div>

                        </div>
                    </div>
                    <AdminPagination />
                </div>

            </div>
        </div>
    )
}
