import React from 'react'
import styles from "./PageNameSection.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export const PageNameSection = ({ title }) => {
    return (
        <section className={styles.pageNameSection}>
            <div className={styles.pageNameContent}>
                <h1>{title}</h1>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
        </section>
    )
}
