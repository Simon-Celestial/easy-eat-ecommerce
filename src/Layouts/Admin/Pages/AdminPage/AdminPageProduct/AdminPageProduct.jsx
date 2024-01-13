import React from 'react'
import styles from "./AdminPageProduct.module.scss";

// title,
//     description,
//     productPrice,
//     brandId,
//     stock,
//     isPublish,
//     salePrice,
//     isDeal,
//     images,
//     createdAt,
//     updatedAt,
//     totalCount,
export const AdminPageProduct = ({
                                     data,
                                     onReturn,
                                     brands,
                                 }) => {

    return (
        <div className={styles.adminProductWrapper}>
            <div className={styles.adminProductContent}>
                <div className={styles.productBlock}>
                    <div className={styles.productImage}>
                        <img
                            src={data?.images?.[0]?.url}
                            alt="Product"/>
                    </div>
                    <div className={styles.productTitle}>
                        <span className={styles.productStatus}>
                            Status:
                            <p style={{ background: data.isPublish ? "green" : "red" }}>{data.isPublish ? 'Published' : 'Not Published'}</p>
                        </span>
                        <div className={styles.productInfo}>
                            <h2>{data.title}</h2>
                        </div>
                        <div className={styles.productInfo}>
                            <div className={styles.price}>
                                <h2>${data.salePrice.toFixed(2) || 'N\A'}</h2>
                                <h2>${data.productPrice.toFixed(2) || 'N\A'}</h2>
                            </div>


                        </div>
                        <div className={styles.quantityBlock}>
                            <span style={{
                                background: data.stock? "green" : "red"
                            }}>{data.stock < 1 ? 'Out of stock' : 'In Stock'}</span>
                            <p>Quantity: {data.stock}</p>
                        </div>
                        <div className={styles.description}>
                            {data.description}
                        </div>
                        <div className={styles.category}>
                            Category: <p>{brands.find(it => it.value === data.brandId)?.label}</p>
                        </div>
                        <button onClick={onReturn} className={styles.back}>RETURN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
