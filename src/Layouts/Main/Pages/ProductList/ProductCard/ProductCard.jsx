import React, {useContext, useMemo} from 'react'
import styles from "../ProductList.module.scss";
import {ArrowRight, CircleDashed, Heart, ShoppingCart, Star} from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import {UserDataContext} from "../../../../../Context/UserDataContext/UserDataContext.jsx";
import {Bounce, toast} from 'react-toastify';

export const ProductCard = ({
                                product,
                                loading
                            }) => {
    const salePercent = (100 - ((product?.salePrice / product?.productPrice) * 100));
    const {
        setWishlist,
        wishlist,
        update,
        add,
        basket,
        loading: productLoading
    } = useContext(UserDataContext);
    const isOnSale = useMemo(() => !!product.salePrice && (product.salePrice !== product.productPrice),
        [product]);
    return (
        <div className={`${styles.productCard} ${loading && styles.loadingAnimation}`}>
            {loading &&
                <div className={styles.productLoader}>
                    <CircleDashed/>
                </div>
            }
            {product.stock <= 0 ?
                <div className={styles.outOfStock}>
                    Out of Stock
                </div> : null
            }
            {(salePercent !== 100 && salePercent !== 0) ?
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
                                        toast.error(`${product.title} removed from wishlist`,
                                            {
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: false,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "colored",
                                                transition: Bounce,
                                            }
                                        );
                                        return newVal;
                                    }
                                    toast.success(`${product.title} added to wishlist`,
                                        {
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: false,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "colored",
                                            transition: Bounce,
                                        }
                                    );

                                    return ({
                                        ...prev,
                                        [id]: product,
                                    });
                                });
                            }}/>
                    </p>
                    <p className={styles.optionButton}>
                        {productLoading ?
                            <div className={styles.buttonLoader}>
                                <CircleDashed/>
                            </div>
                            :
                            <ShoppingCart

                                color={basket.find(it => it.productId === product._id) ? 'red' : 'unset'}
                                onClick={() => {
                                    const foundItem = basket.find(it => it.productId === product._id);
                                    if (foundItem) {
                                        toast.success(`${product.title} basket count updated`,
                                            {
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: false,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "colored",
                                                transition: Bounce,
                                            }
                                        );
                                        update(foundItem._id, foundItem.productCount + 1)
                                    }
                                    else {
                                        add({
                                            ...product,
                                            count: 1,
                                        })
                                        toast.success(`${product.title} added to basket`,
                                            {
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: false,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "colored",
                                                transition: Bounce,
                                            }
                                        );

                                    }
                                }}
                                style={{
                                    opacity: product.stock < 1 ? 0.3 : 1,
                                    pointerEvents: product.stock < 1 ? "none" : "auto",
                                }}/>
                        }


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
                    {/*STANDARD PRICE*/}
                    <span
                        className={`${isOnSale ? styles.productPrice : styles.salePrice}`}>${product?.productPrice.toFixed(2)}</span>
                    {/*DISCOUNTED PRICE*/}
                    {isOnSale ?
                        <span className={styles.salePrice}>{`$${product?.salePrice?.toFixed(2)}`}</span>
                        : ""}
                </p>

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
