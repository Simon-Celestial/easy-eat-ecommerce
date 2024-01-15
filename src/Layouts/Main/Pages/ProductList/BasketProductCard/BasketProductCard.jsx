import React, {useContext} from 'react'
import styles from "../ProductList.module.scss";
import {CircleDashed, X} from "@phosphor-icons/react";
import {UserDataContext} from "../../../../../Context/UserDataContext/UserDataContext.jsx";
import {Link} from "react-router-dom";

export const BasketProductCard = ({
                                      item,
                                      data
                                  }) => {
    const {
        remove,
    } = useContext(UserDataContext);

    return (
        <div className={styles.productCard}>
            <div className={styles.deleteProduct}>
                <X onClick={() => remove(item._id)}/>
            </div>
            <div className={styles.productImage}>
                <Link to={`/product/${item.productId}`}>
                    <img
                        src={data?.images?.[0]?.url}
                        alt="Product"/>
                </Link>
            </div>
            <div className={styles.productTitle}>
                <Link to={`/product/${item.productId}`}>{data.title}</Link>
                <p>{item.productCount} × ${(data.salePrice ? data.salePrice : data.productPrice).toFixed(2)}</p>
            </div>
        </div>
    )

}
