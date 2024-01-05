import React, {useState} from 'react'
import styles from "./AdminPageCategories.module.scss";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {AdminPagination} from "../../AdminComponents/AdminPagination/AdminPagination.jsx";
import {Trash, Wrench} from "@phosphor-icons/react";
import {PublishButton} from "../../AdminComponents/PublishButton/PublishButton.jsx";
import {CategoryMenu} from "../../AdminComponents/CategoryMenu/CategoryMenu.jsx";

export const AdminPageCategories = () => {
    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const handleOpenEditMenu = () => {
        setEditMode(true);
        setCategoryMenuOpen(true);
    }
    const handleOpenCategoryMenu = (e) => {
        e.preventDefault();
        setEditMode(false);
        setCategoryMenuOpen(true);
    }
    return (
        <div className={styles.categoriesPageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <CategoryMenu categoryMenuOpen={categoryMenuOpen}
                          setCategoryMenuOpen={setCategoryMenuOpen}
                          editMode={editMode}/>
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
                        <button onClick={handleOpenCategoryMenu}>Add Category</button>
                        <button>Remove Category</button>
                    </div>
                </form>
                <div className={styles.categoryTableWrapper}>
                    <div className={styles.categoryOverflow}>
                        <div className={styles.categoryTable}>
                            <div className={`${styles.tableRow} ${styles.headRow}`}>
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
                            <div className={styles.tableRow}>
                                <div className={`${styles.checkBox} ${styles.box}`}>
                                    <input type="checkbox"/>
                                </div>
                                <div className={`${styles.id} ${styles.box}`}>
                                    <p>2ABC</p>
                                </div>
                                <div className={`${styles.icon} ${styles.box}`}>
                                    <div className={styles.iconBox}>
                                        <img
                                            src="https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/carp-fish_paxzrt.png"
                                            alt="brand"/>
                                    </div>
                                </div>
                                <div className={`${styles.name} ${styles.box}`}>
                                    <p>Fish & Meat</p>
                                </div>
                                <div className={`${styles.description} ${styles.box}`}>
                                    <p>Fish & Meat</p>
                                </div>
                                <div className={`${styles.published} ${styles.box}`}>
                                    <PublishButton/>
                                </div>
                                <div className={`${styles.action} ${styles.box}`}>
                                    <span onClick={handleOpenEditMenu}><Wrench/></span>
                                    <span><Trash/></span>
                                </div>
                            </div>
                            <div className={styles.tableRow}>
                                <div className={`${styles.checkBox} ${styles.box}`}>
                                    <input type="checkbox"/>
                                </div>
                                <div className={`${styles.id} ${styles.box}`}>
                                    <p>2ABC</p>
                                </div>
                                <div className={`${styles.icon} ${styles.box}`}>
                                    <div className={styles.iconBox}>
                                        <img
                                            src="https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/carp-fish_paxzrt.png"
                                            alt="brand"/>
                                    </div>
                                </div>
                                <div className={`${styles.name} ${styles.box}`}>
                                    <p>Fish & Meat</p>
                                </div>
                                <div className={`${styles.description} ${styles.box}`}>
                                    <p>Fish & Meat</p>
                                </div>
                                <div className={`${styles.published} ${styles.box}`}>
                                    <PublishButton/>
                                </div>
                                <div className={`${styles.action} ${styles.box}`}>
                                    <span onClick={handleOpenEditMenu}><Wrench/></span>
                                    <span><Trash/></span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <AdminPagination/>
                </div>

            </div>
        </div>
    )
}
