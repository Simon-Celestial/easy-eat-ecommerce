import React, {useContext, useState} from 'react'
import styles from "./PublishButton.module.scss";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";

export const PublishButton = ({userActive,setUserActive}) => {
    const {
        openHandler,
    } = useContext(LayoutContext);

    return (
        <div className={styles.publishButton}>
            <span
                className={`${!userActive && styles.adminActive}`}
                onClick={openHandler(setUserActive)}>
            <div className={styles.point}></div>
            </span>
        </div>
    )
}
