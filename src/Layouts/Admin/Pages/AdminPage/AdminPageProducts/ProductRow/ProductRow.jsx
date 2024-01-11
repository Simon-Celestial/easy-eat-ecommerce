import React from 'react'
import styles from "../AdminProductsPage.module.scss";
import {Link} from "react-router-dom";
import {Eye, Trash, Wrench} from "@phosphor-icons/react";
import {PublishButton} from "../../../AdminComponents/PublishButton/PublishButton.jsx";

export const ProductRow = ({handleOpenEditMenu, data, brands, handleDelete}) => {
    return (
        <div className={`${styles.tableRow}`}>
            <div className={`${styles.tableCell} ${styles.check}`}>
                <input type="checkbox"/>
            </div>
            <div className={`${styles.tableCell} ${styles.name}`}>
                <div className={styles.imgBox}>
                    <img
                        src={data?.images?.[0]?.url}
                        alt="Product"/>
                </div>
                <p>{data.title}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.category}`}>
                <p>{brands.find(it => it.value === data.brandId)?.label}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.price}`}>
                <p>${data.productPrice.toFixed(2)}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.sale}`}>
                <p>${data.salePrice?.toFixed(2)}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.stock}`}>
                <p>{data.stock}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.status}`}>
                <span style={{
                    background: data.stock > 0 ? "green" : "red"
                }}>
                    {data.stock > 0 ? "In stock" : "Out of Stock"}</span>
            </div>
            <div className={`${styles.tableCell} ${styles.view}`}>
                <Link to="/admin/product">
                    <span><Eye/></span>
                </Link>
            </div>
            <div className={`${styles.tableCell} ${styles.publish}`}>
                <PublishButton userActive={data.isPublish}/>
            </div>
            <div className={`${styles.tableCell} ${styles.actions}`}>
                <span onClick={() => handleOpenEditMenu(data.id)}><Wrench/></span>
                <span><Trash onClick={() => handleDelete(data.id)}/></span>
            </div>
        </div>

    )
}
