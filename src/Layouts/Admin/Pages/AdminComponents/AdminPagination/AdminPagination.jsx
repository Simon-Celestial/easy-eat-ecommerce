import React from 'react'
import styles from "./AdminPagination.module.scss";
import {CaretDown, CaretUp} from "@phosphor-icons/react";

export const AdminPagination = () => {
    return (
        <div className={styles.paginationBlock}>
            <div className={`${styles.paginationItem} ${styles.leftArrow}`}>
                <CaretUp weight="regular"/>
            </div>
            <div className={styles.paginationItem}>
                1
            </div>
            <div className={styles.paginationItem}>
                2
            </div>
            <div className={styles.paginationItem}>
                3
            </div>
            <div className={styles.paginationItem}>
                4
            </div>
            <div className={styles.paginationItem}>
                5
            </div>
            <div className={`${styles.paginationItem} ${styles.rightArrow}`}>
                <CaretDown weight="regular"/>
            </div>
        </div>

    )
}
