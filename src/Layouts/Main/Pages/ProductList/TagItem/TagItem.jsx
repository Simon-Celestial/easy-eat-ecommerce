import React from 'react'
import styles from "../ProductList.module.scss";

export const TagItem = ({tag}) => {
    return (
        <div className={styles.tagItem}>
            <p>
                {tag.title}
            </p>
        </div>
    )
}
