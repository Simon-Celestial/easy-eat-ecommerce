import React from 'react'
import styles from "../ProductList.module.scss";
import {X} from "@phosphor-icons/react";

export const BasketProductCard = () => {
    return (
        <div className={styles.productCard}>
            <div className={styles.deleteProduct}>
                <X/>
            </div>
            <div className={styles.productImage}>
                <a href="#">
                    <img
                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/02/product-18-copyright-480x480.png"
                        alt="Product"/>
                </a>
            </div>
            <div className={styles.productTitle}>
                <a href="#">Veggie Pizza</a>
                <p>2 × $13.00</p>
            </div>
        </div>
    )
}
