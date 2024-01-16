import React from 'react'
import styles from "./EmptyCartInfo.module.scss";
import {Link} from "react-router-dom";


export const EmptyCartInfo = () => {
    return (
        <div className={styles.cartIsEmpty}>
            <p>Your cart is currently empty.</p>
            <Link to="/shop">Return to shop</Link>
        </div>
    )
}
