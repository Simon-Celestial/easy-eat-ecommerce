import React from 'react'
import styles from "./BlockTitle.module.scss";


export const BlockTitle = ({title}) => {
    return (
        <div className={styles.blockTitle}>
            <h4>{title}</h4>
        </div>
    )
}
