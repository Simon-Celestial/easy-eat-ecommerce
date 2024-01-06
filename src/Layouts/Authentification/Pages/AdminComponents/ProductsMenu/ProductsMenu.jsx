import React from 'react'
import styles from "./ProductsMenu.module.scss";
import {Power} from "@phosphor-icons/react";

export const ProductsMenu = ({productsMenuOpen, setProductsMenuOpen, editMode}) => {
    return (
        <div className={`${styles.productsMenuOverlay} ${productsMenuOpen && styles.menuActive}`}>
            <form className={styles.productsMenuContent}>
                <div className={styles.menuHead}>
                    <div className={styles.headTitle}>
                        <h2>{editMode? "Edit Product" : "Add Product"}</h2>
                        <p>{editMode? "Edit your product" : "Add your Product"}</p>
                    </div>
                    <div className={styles.closeMenu} onClick={() => setProductsMenuOpen(false)}>
                        <Power/>
                    </div>
                </div>
                <div className={styles.menuMain}>
                    <div className={styles.elementsRow}>
                        <p>Product Name:</p>
                        <input type="text" placeholder="Product Name" required/>
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Description:</p>
                        <textarea placeholder="Product Description" required/>
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Image:</p>
                        <div className={styles.imagesBox}>
                            <div className={styles.image}>
                                <img
                                    src="https://res.cloudinary.com/ahossain/image/upload/v1704561143/product/WhatsAppImage2023-10-18at22.15.59%281%29.jpg"
                                    alt="Image"/>
                            </div>
                            <div className={styles.image}>
                                <img
                                    src="https://res.cloudinary.com/ahossain/image/upload/v1704561143/product/WhatsAppImage2023-10-18at22.15.59%281%29.jpg"
                                    alt="Image"/>
                            </div>
                        </div>
                        <div className={styles.fileAddWrapper}>
                            <input type="file" required/>
                        </div>
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Category:</p>
                        <select name="category" required>
                            <option value="" hidden>Select Category</option>
                            <option value="category1">Category1</option>
                            <option value="category2">Category2</option>
                            <option value="category3">Category3</option>
                            <option value="category4">Category4</option>
                            <option value="category5">Category5</option>
                            <option value="category6">Category6</option>
                            <option value="category7">Category7</option>
                        </select>

                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Price:</p>
                        <div className={styles.priceBox}>
                            <input type="text" placeholder="Product Price" required/>
                        </div>
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Sale Price:</p>
                        <div className={styles.priceBox}>
                            <input type="text" placeholder="Sale Price"/>
                        </div>
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Quantity:</p>
                        <input type="text" placeholder="Product Quantity"/>
                    </div>
                </div>
                <div className={styles.menuButtons}>
                    <div className={styles.button} onClick={() => setProductsMenuOpen(false)}>Cancel</div>
                    <button type="submit" className={styles.button}>{editMode? "Edit Product" : "Add Product"}</button>
                </div>

            </form>
        </div>
    )
}
