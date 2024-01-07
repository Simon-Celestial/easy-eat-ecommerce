import React, {useContext, useState} from 'react'
import styles from "./PublishButton.module.scss";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";

export const PublishButton = () => {
    const {
        openHandler,
    } = useContext(LayoutContext);
    const [adminActive, setAdminActive] = useState(false);

    return (
        <div className={styles.publishButton}>
            <span
                className={`${adminActive && styles.adminActive}`}
                onClick={openHandler(setAdminActive)}>
            <div className={styles.point}></div>
            </span>
        </div>
    )
}
