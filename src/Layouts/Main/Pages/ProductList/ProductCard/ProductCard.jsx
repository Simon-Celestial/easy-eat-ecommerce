import React from 'react'
import styles from "../ProductList.module.scss";
import {ArrowRight, Heart, ShoppingCart, Star} from "@phosphor-icons/react";
import {Link} from "react-router-dom";

export const ProductCard = ({
                                product,
                            }) => {
    const salePercent = (100 - ((product?.salePrice / product?.productPrice) * 100));

    return (
        <div className={styles.productCard}>
            {product.stock < 0 ?
                <div className={styles.outOfStock}>
                    Out of Stock
                </div> : null
            }
            {salePercent ?
                <div className={styles.productOnSale}>
                    -{salePercent.toFixed(2)} %
                </div> : null
            }
            <div className={styles.productImage}>
                <div className={styles.productOptions}>
                    <p className={styles.optionButton}>
                        <Heart/>
                    </p>
                    <p className={styles.optionButton}>
                        <ShoppingCart/>
                    </p>
                    <Link className={styles.optionButton} to={`/product/${product._id}`} target={'_blank'}>
                        <ArrowRight/>
                    </Link>
                </div>
                <Link to={`/product/${product._id}`} target={'_blank'}>
                    <img
                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-1024x1024.png"
                        alt="Product"/>
                </Link>
            </div>
            <div className={styles.productTitle}>
                <Link to={`/product/${product._id}`} target={'_blank'}>
                    {product.title}
                </Link>
                <p>
                    {
                        product.salePrice > 0 ?
                        <span>${product.salePrice.toFixed(2)}</span> : null
                    }

                    ${product.productPrice.toFixed(2)}</p>
                <div className={styles.productRating}>
                    <Star weight="fill"/>
                    <Star weight="fill"/>
                    <Star weight="fill"/>
                    <Star weight="fill"/>
                    <Star weight="fill"/>
                </div>
            </div>
        </div>
    )
}
