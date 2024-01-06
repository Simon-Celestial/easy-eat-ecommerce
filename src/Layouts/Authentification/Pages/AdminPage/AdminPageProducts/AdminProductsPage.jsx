import React, {useState} from 'react'
import styles from "./AdminProductsPage.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {Eye, Plus, Trash, Wrench} from "@phosphor-icons/react";
import {AdminPagination} from "../../AdminComponents/AdminPagination/AdminPagination.jsx";
import {PublishButton} from "../../AdminComponents/PublishButton/PublishButton.jsx";
import {ProductsMenu} from "../../AdminComponents/ProductsMenu/ProductsMenu.jsx";
import {Link} from "react-router-dom";

export const AdminProductsPage = () => {
    const [productsMenuOpen, setProductsMenuOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const handleOpenEditMenu = () => {
        setEditMode(true);
        setProductsMenuOpen(true);
    }
    const handleOpenAddMenu = () => {
        setEditMode(false);
        setProductsMenuOpen(true);
    }

    return (
        <div className={styles.adminProductPageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <ProductsMenu productsMenuOpen={productsMenuOpen} setProductsMenuOpen={setProductsMenuOpen} editMode={editMode}/>
            <div className={styles.adminProductPageContent}>
                <BlockTitle title="Products"/>
                <div className={styles.productsManipulation}>
                    <form className={styles.filterBlocks}>
                        <div className={styles.inputBlocks}>
                            <label htmlFor="">
                                <input type="text" placeholder="Search Product"/>
                            </label>
                            <label htmlFor="">
                                <select>
                                    <option value="All" hidden>Price</option>
                                    <option value="low">Low to High</option>
                                    <option value="high">High to Low</option>
                                    <option value="published">Published</option>
                                    <option value="unPublished">Unpublished</option>
                                    <option value="status-selling">Status - Selling</option>
                                    <option value="status-out-of-stock"> Status - Out of Stock</option>
                                </select>
                            </label>
                        </div>
                        <div className={styles.filterButtons}>
                            <button>Filter</button>
                            <button>Clear</button>
                        </div>
                    </form>
                    <div className={styles.addButtons}>
                        <div className={styles.button} onClick={handleOpenAddMenu}>
                            <p >Add Product</p>
                            <Plus/>
                        </div>
                        <div className={styles.button}>
                            <p>Delete Product</p>
                            <Trash/>
                        </div>
                    </div>
                </div>
                <div className={styles.productsTableBlock}>
                    <div className={styles.overflow}>
                        <div className={styles.table}>
                            <div className={`${styles.tableRow} ${styles.headRow}`}>
                                <div className={`${styles.tableCell} ${styles.check}`}>
                                    <input type="checkbox"/>
                                </div>
                                <div className={`${styles.tableCell} ${styles.name}`}>
                                    <p>Product Name</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.category}`}>
                                    <p>Category</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.price}`}>
                                    <p>Price</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.sale}`}>
                                    <p>Sale Price</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.stock}`}>
                                    <p>Stock</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.status}`}>
                                    <p>Status</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.view}`}>
                                    <p>View</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.publish}`}>
                                    <p>Published</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.actions}`}>
                                    <p>Actions</p>
                                </div>
                            </div>
                            <div className={`${styles.tableRow}`}>
                                <div className={`${styles.tableCell} ${styles.check}`}>
                                    <input type="checkbox"/>
                                </div>
                                <div className={`${styles.tableCell} ${styles.name}`}>
                                    <div className={styles.imgBox}>
                                        <img
                                            src="https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-deep-ash-920x920.webp"
                                            alt="Product"/>
                                    </div>
                                    <p>Premium T-shirt</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.category}`}>
                                    <p>Men</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.price}`}>
                                    <p>$500.00</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.sale}`}>
                                    <p>$450.00</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.stock}`}>
                                    <p>23</p>
                                </div>
                                <div className={`${styles.tableCell} ${styles.status}`}>
                                    <span>Out of Stock</span>
                                </div>
                                <div className={`${styles.tableCell} ${styles.view}`}>
                                    <Link to="/auth/product">
                                    <span><Eye/></span>
                                    </Link>
                                </div>
                                <div className={`${styles.tableCell} ${styles.publish}`}>
                                    <PublishButton/>
                                </div>
                                <div className={`${styles.tableCell} ${styles.actions}`}>
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
