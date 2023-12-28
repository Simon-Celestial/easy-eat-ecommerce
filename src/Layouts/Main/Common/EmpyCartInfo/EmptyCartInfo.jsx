import React from 'react'
import styles from "./EmptyCartInfo.module.scss";


export const EmptyCartInfo = () => {
    return (
        <div className={styles.cartIsEmpty}>
            <p>Your cart is currently empty.</p>
            <a href="#">Return to shop</a>
        </div>
    )
}
