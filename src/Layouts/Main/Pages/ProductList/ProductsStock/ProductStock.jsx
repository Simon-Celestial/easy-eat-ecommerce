import React from 'react'
import styles from "../ProductList.module.scss";

export const ProductStock = ({
                                 label, active, onClick,
                             }) => {
    return (
        <div
            onClick={onClick}
            className={styles.availabilityItem}
        >
            <input type="checkbox" checked={active}/>
            {label === 'inStock'? 'In Stock': 'Out Of Stock'}
        </div>
    )
}
