import React, {useState} from 'react'
import styles from "./AdminPageProduct.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {ProductsMenu} from "../../AdminComponents/ProductsMenu/ProductsMenu.jsx";

export const AdminPageProduct = () => {

    const [productsMenuOpen, setProductsMenuOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const handleOpenEditMenu = () => {
        setEditMode(true);
        setProductsMenuOpen(true);
    }
    return (
        <div className={styles.adminProductWrapper}>
            <AdminHeader />
            <AdminSideMenu />
            <ProductsMenu setProductsMenuOpen={setProductsMenuOpen} productsMenuOpen={productsMenuOpen} editMode={editMode}/>
            <div className={styles.adminProductContent}>
                <BlockTitle title="Product Single"/>
                <div className={styles.productBlock}>
                    <div className={styles.productImage}>
                        <img src="https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-deep-ash-920x920.webp" alt="Product"/>
                    </div>
                    <div className={styles.productTitle}>
                        <span className={styles.productStatus}>
                            Status:
                            <p>Published</p>
                        </span>
                        <div className={styles.productInfo}>
                            <h2>Premium T-Shirt</h2>
                        </div>
                        <div className={styles.productInfo}>
                            <h2>$25.00</h2>
                        </div>
                        <div className={styles.quantityBlock}>
                            <span>In Stock</span>
                            <p>Quantity: 4500</p>
                        </div>
                        <div className={styles.description}>
                            A T-shirt (also spelled tee-shirt or tee shirt), or tee for short, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar.
                        </div>
                        <div className={styles.category}>
                            Category: <p>Man</p>
                        </div>
                        <div className={styles.edit} onClick={handleOpenEditMenu}>
                            Edit Product
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
