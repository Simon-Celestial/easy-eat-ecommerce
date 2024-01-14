import React, {useContext} from 'react'
import styles from "../ProductList.module.scss";
import {X} from "@phosphor-icons/react";
import {UserDataContext} from "../../../../../Context/UserDataContext/UserDataContext.jsx";

export const BasketProductCard = ({
                                      item
                                  }) => {
    const {
        remove,
    } = useContext(UserDataContext);
    return (
        <div className={styles.productCard}>
            <div className={styles.deleteProduct}>
                <X onClick={() => remove(item._id)}/>
            </div>
            <div className={styles.productImage}>
                <a href="#">
                    <img
                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/02/product-18-copyright-480x480.png"
                        alt="Product"/>
                </a>
            </div>
            <div className={styles.productTitle}>
                <span>{item.productId}</span>
                <p>${item.productCount} × $13.00</p>
            </div>
        </div>
    )
}
