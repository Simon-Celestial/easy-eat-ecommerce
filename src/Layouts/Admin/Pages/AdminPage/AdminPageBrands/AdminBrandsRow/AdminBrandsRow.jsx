import React from 'react'
import styles from "../AdminPageBrands.module.scss";
import {Trash, Wrench} from "@phosphor-icons/react";
import moment from "moment";
export const AdminBrandsRow = ({
                                   brand,
                                   handleOpenEditMenu,
                                   handleDelete,

                               }) => {

    return (
        <div className={styles.tableRow}>
            <div className={`${styles.id} ${styles.box}`}>
                <p title={brand?.id}>ID</p>
            </div>
            <div className={`${styles.icon} ${styles.box}`}>
                <div className={styles.iconBox}>
                    <img
                        src={brand?.image?.url || `/public/images/noImg.png`}
                        alt="Brand"/>
                </div>
            </div>
            <div className={`${styles.name} ${styles.box}`}>
                <p>{brand?.name}</p>
            </div>
            <div className={`${styles.description} ${styles.box}`}>
                <p>{brand?.name}</p>
            </div>
            <div className={`${styles.date} ${styles.box}`}>
                <p>{moment(brand.createdAt).format('YYYY.DD.MM HH:mm')}</p>
            </div>
            <div className={`${styles.date} ${styles.box}`}>
                <p>{moment(brand.updatedAt).format('YYYY.DD.MM HH:mm')}</p>
            </div>

            <div className={`${styles.action} ${styles.box}`}>
                <span onClick={handleOpenEditMenu}><Wrench/></span>
                <span><Trash onClick={() => handleDelete(brand.id)}/></span>
            </div>
        </div>
    )
}
