import React, {useContext, useEffect, useState} from 'react'
import styles from "./CartPage.module.scss";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";
import {CaretDown, CaretUp, CircleDashed, X} from "@phosphor-icons/react";
import {StatusBar} from "../../Common/StatusBar/StatusBar.jsx";
import {CouponBlock} from "../../Common/CouponBlock/CouponBlock.jsx";
import {Link} from "react-router-dom";
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";
import {EmptyCartInfo} from "../../Common/EmpyCartInfo/EmptyCartInfo.jsx";

export const CartPage = () => {
    const {
        setBasketVisible,
    } = useContext(LayoutContext);


    const {
        basket,
        cache: products,
        update,
        remove,
        loading,
        cacheLoading,
    } = useContext(UserDataContext);


    const {
        setHeaderColorChange,
    } = useContext(LayoutContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON OFF
    useEffect(() => {
        setBasketVisible(false);
    }, []);

    console.log({basket})
    return (
        <div className={styles.cartPageWrapper}>
            <Header/>
            <PageNameSection title="Cart"/>
            <section className={styles.cartSection}>
                {cacheLoading ?
                    <div className={styles.cartPageLoader}>
                        <CircleDashed/>
                    </div>
                    :
                    <div className={styles.cartContent}>
                        {
                            basket.length === 0 ?
                                <EmptyCartInfo/>
                                :
                                <div className={styles.cartContainer}>
                                    <StatusBar first="#EC3D08" second="black" third="black"/>
                                    <div className={styles.cartBasket}>
                                        <div className={styles.cartBody}>
                                            <div className={styles.cartRow}
                                                 style={{background: 'white', borderColor: "transparent"}}>
                                                <div className={styles.productName}>
                                                    Product
                                                </div>
                                                <div className={styles.productPrice}>
                                                    Price
                                                </div>
                                                <div className={styles.productQuantity}>
                                                    Quantity
                                                </div>
                                                <div className={styles.productSubtotal}>
                                                    Subtotal
                                                </div>
                                                <div className={styles.productRemove}>
                                                    Remove
                                                </div>
                                            </div>
                                            {!loading ?
                                                basket.map(bItem => {
                                                    const product = products.find(it => it._id === bItem.productId);
                                                    const price = product.salePrice || product.productPrice;

                                                    return <div
                                                        key={`${bItem._id}desktop`}
                                                        className={styles.cartRow}
                                                    >
                                                        <div className={styles.productName}>
                                                           <span className={styles.productNameInner}>
                                                               <div className={styles.imageBox}>
                                                                   <img
                                                                       src={product?.images?.[0]?.url}
                                                                       alt={product?.images?.[0]?.public_id}/>
                                                               </div>
                                                               <Link to={`/product/${product._id}`}>{product.title}</Link>
                                                           </span>
                                                        </div>
                                                        <div className={styles.productPrice}>
                                                            <span>${price?.toFixed(2)}</span>
                                                        </div>
                                                        <div className={styles.productQuantity}>
                                                            <div className={styles.productCount}>
                                                                <p>{bItem.productCount}</p>
                                                                <div className={styles.counterControl}>
                                                                  <span onClick={() =>
                                                                      update(bItem._id, bItem.productCount + 1)}>
                                                                      <CaretUp/>
                                                                  </span>
                                                                    <span
                                                                        onClick={() => bItem.productCount > 0 ?
                                                                            update(bItem._id, bItem.productCount - 1) :
                                                                            {}}
                                                                    >
                                                              <CaretDown/>
                                                          </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.productSubtotal}>
                                                            <span>${(bItem.productCount * price)?.toFixed(2)}</span>
                                                        </div>
                                                        <div className={styles.productRemove}>
                                                            <span>
                                                             <X onClick={() => remove(bItem._id)} weight="thin"/>
                                                         </span>
                                                        </div>
                                                    </div>
                                                })
                                                :
                                                <div className={styles.desktopBasketLoader}>
                                                    <CircleDashed/>
                                                </div>
                                            }
                                            {!loading ?
                                                basket.map(bItem => {
                                                    const product = products.find(it => it._id === bItem.productId);
                                                    const price = product.salePrice || product.productPrice;

                                                    return <div
                                                        key={`${bItem._id}mobile`}
                                                        className={styles.mobileProductCard}>
                                                        <div className={styles.mobileProductName}>
                                                            <p>Product:</p>
                                                            <div className={styles.deleteMobileProduct}>
                                                                <X onClick={() => remove(bItem._id)}/>
                                                            </div>
                                                        </div>
                                                        <div className={styles.mobileProductNameInner}>
                                                            <div className={styles.mobileImgBlock}>
                                                                <img
                                                                    src={product?.images?.[0]?.url}
                                                                    alt={product?.images?.[0]?.public_id}/>
                                                            </div>
                                                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                                                        </div>
                                                        <div className={styles.mobileProductPrice}>
                                                            <p>Price:</p>
                                                            <p>${price.toFixed(2)}</p>
                                                        </div>
                                                        <div className={styles.mobileProductQuantity}>
                                                            <p>Quantity:</p>
                                                            <div className={styles.mobileProductCount}>
                                                                <p>{bItem.productCount}</p>
                                                                <div className={styles.counterControl}>
                                                          <span
                                                              onClick={() => update(bItem._id, bItem.productCount + 1)}>
                                                              <CaretUp/>
                                                          </span>
                                                                    <span
                                                                        onClick={() => bItem.productCount > 0 ?
                                                                            update(bItem._id, bItem.productCount - 1) : {}}
                                                                    >
                                                               <CaretDown/>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.mobileProductSubtotal}>
                                                            <p>Subtotal:</p>
                                                            <span>${(bItem.productCount * price)?.toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                })
                                                :
                                                <div className={styles.mobileBasketLoader}>
                                                    <CircleDashed/>
                                                </div>

                                            }

                                        </div>
                                        <div className={styles.cartBottom}>
                                            <CouponBlock/>
                                            <div className={styles.buttonBlock}>
                                                <Link to="/shop">
                                                    Continue Shopping
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={styles.cartTotal}>
                                            <div className={styles.cartTotalContent}>
                                                <div className={styles.cartTotalHeading}>
                                                    <p>Cart Totals</p>
                                                </div>
                                                <div className={styles.cartTotalBody}>
                                                    <div className={styles.cartTotalRow}>
                                                        <div className={styles.cartTotalTitle}>
                                                            Subtotal
                                                        </div>
                                                        <div className={styles.cartTotalPrice}>
                                                            ${basket.map(bItem => {
                                                            const product = products.find(it => it._id === bItem.productId);
                                                            return (product.salePrice || product.productPrice) * bItem.productCount;
                                                        }).reduce((a, b) => a + b, 0).toFixed(2)}
                                                        </div>
                                                    </div>
                                                    <div className={styles.cartTotalRow}>
                                                        <div className={styles.cartTotalTitle}>
                                                            Total
                                                        </div>
                                                        <div className={styles.cartTotalPrice}>
                                                            ${basket.map(bItem => {
                                                            const product = products.find(it => it._id === bItem.productId);
                                                            return (product.salePrice || product.productPrice) * bItem.productCount;
                                                        }).reduce((a, b) => a + b, 0).toFixed(2)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.cartTotalButton}>
                                                    <Link to="/auth/checkout">Proceed to checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                }
            </section>
            {/*FOOTER*/}
            <ChangedFooter/>
            {/*COMMON COMPONENTS FOR UI */}
            <UiControl/>
        </div>
    )
}
