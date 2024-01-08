import React from 'react'
import styles from "./PageNotFound.module.scss";

export const PageNotFound = () => {
    return (
        <div className={styles.pageNotFound}>
            <p>404</p>
            <span>Page not Found</span>
        </div>
    )
}
