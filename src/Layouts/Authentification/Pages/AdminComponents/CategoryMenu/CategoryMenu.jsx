import React from 'react'
import styles from "./CategoryMenu.module.scss";
import {Power} from "@phosphor-icons/react";
import {PublishButton} from "../PublishButton/PublishButton.jsx";

export const CategoryMenu = ({categoryMenuOpen, setCategoryMenuOpen, editMode}) => {
    return (
        <div className={`${styles.categoryMenuOverlay} ${categoryMenuOpen && styles.categoryVisible}`}>
            <form className={styles.categoryMenuContent}>
                <div className={styles.categoryHead}>
                    <div className={styles.categoryHeadTitle}>
                        <h2>{editMode ? "Edit Category" : "Add Category"}</h2>
                        <p>{editMode ? "Edit your Product category" : "Add your Product category"}</p>
                    </div>
                    <div className={styles.closeCategoryBlock} onClick={() => setCategoryMenuOpen(false)}>
                        <Power/>
                    </div>
                </div>
                <div className={styles.categoryMiddle}>
                    <div className={styles.middleItem}>
                        <p>Category Name</p>
                        <div className={styles.inputWrapper}>
                            <input type="text" required/>
                        </div>
                    </div>
                    <div className={styles.middleItem}>
                        <p>Category Image</p>
                        <div className={`${styles.inputWrapper} ${styles.imageWrapper}`}>
                            <input type="file" accept="image/*,.jpeg,.jpg,.png,.webp" required/>
                        </div>
                    </div>
                    <div className={`${styles.middleItem} ${styles.publishedWrapper}`}>
                        <p>Published</p>
                        <PublishButton/>
                    </div>
                </div>
                <div className={styles.categoryButtons}>
                    <div className={styles.button} onClick={() => setCategoryMenuOpen(false)}>Cancel</div>
                    <button className={styles.button} type="submit">
                        {editMode? "Edit Category" : "Add Category"}
                    </button>
                </div>
            </form>
        </div>
    )
}
