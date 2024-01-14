import React, {useContext} from 'react'
import styles from "../ProductList.module.scss";
import {ArrowRight, Heart, ShoppingCart, Star} from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import {UserDataContext} from "../../../../../Context/UserDataContext/UserDataContext.jsx";
import toast from "react-hot-toast";

export const ProductCard = ({
                                product,
                            }) => {
    const salePercent = (100 - ((product?.salePrice / product?.productPrice) * 100));
    const {
        setWishlist,
        wishlist,
        update,
        add,
        basket,
    } = useContext(UserDataContext);
    return (
        <div className={`${styles.productCard}`}>
            {product.stock <= 0 ?
                <div className={styles.outOfStock}>
                    Out of Stock
                </div> : null
            }
            {salePercent !== 100 ?
                <div className={styles.productOnSale}>
                    -{salePercent.toFixed(2)} %
                </div> : null
            }
            <div className={styles.productImage}>
                <div className={styles.productOptions}>
                    <p className={styles.optionButton}>
                        <Heart
                            style={{
                                color: wishlist[product._id] ? 'red' : 'unset'
                            }}
                            onClick={() => {
                                setWishlist(prev => {
                                    const id = product._id;
                                    if (prev[id]) {
                                        const newVal = {
                                            ...prev,
                                        }
                                        delete newVal[id];
                                        toast(`${product.title} is removed from wishlist!`);
                                        return newVal;
                                    }
                                    toast(`${product.title} added to wishlist!`);
                                    return ({
                                        ...prev,
                                        [id]: product,
                                    });
                                });
                            }}/>
                    </p>
                    <p className={styles.optionButton}>
                        <ShoppingCart
                            color={basket.find(it => it.productId === product._id)? 'red': 'unset'}
                            onClick={() => {
                            const foundItem = basket.find(it => it.productId === product._id);
                            if (foundItem) {
                                update(product._id, foundItem.productCount + 1)
                            } else {
                                add([
                                    {
                                        productId: product._id,
                                        productCount: 1,
                                    }
                                ])
                            }
                        }}/>
                    </p>
                    <Link className={styles.optionButton} to={`/product/${product._id}`} target={'_blank'}>
                        <ArrowRight/>
                    </Link>
                </div>
                <Link to={`/product/${product._id}`} target={'_blank'}>
                    <img
                        src={product?.images?.[0]?.url}
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
