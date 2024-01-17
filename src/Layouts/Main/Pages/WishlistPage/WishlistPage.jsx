import React, {useCallback, useContext, useEffect, useState} from 'react'
import styles from "./WishlistPage.module.scss";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {Header} from "../../Components/Header/Header.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Car, ShoppingCart, X} from "@phosphor-icons/react";
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";
import {Link} from "react-router-dom";
import useApi from "../../../../Hooks/useApi.js";
import toast from "react-hot-toast";
import {resolveSequential} from "../../../Authentication/Pages/CheckoutPage/CheckoutPage.jsx";

export const WishlistPage = () => {

    const {
        setBasketVisible,
        setHeaderColorChange,
    } = useContext(LayoutContext);
    const [selectedItems, setSelectedItems] = useState([]);
    const {
        wishlist,
        setWishlist,
        add,
        basket,
        cache,
        update,
        basketOperationInProgress,
    } = useContext(UserDataContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    const handleAddSelectedToCart = useCallback(async (...ids) => {
        await Promise.all(ids.map(async (id, i) => {
            const product = cache.find(it => it._id === id);
            console.log(product);
            if (product.stock === 0) return;
            const foundItem = basket.find(it => it.productId === id);
            if (foundItem) {
                await update(foundItem._id, foundItem.productCount + 1, i === ids.length - 1)
                toast.success(`${product.title} added to basket`, {
                    position: "top-center",
                    style: {
                        background: "green",
                        color: "white",
                    },
                });
            }
            else {
                await add({
                    ...product,
                    count: 1,
                })
            }
        }))

    }, [basket, selectedItems, wishlist, cache])
    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);
    useEffect(() => {
        setSelectedItems([]);
    }, [wishlist])
    console.log(wishlist)
    return (
        <div className={styles.wishlistPageWrapper}>
            {/*PAGE HEADER*/}
            <Header/>
            {/*PAGE CONTENT*/}
            <PageNameSection title="Wishlist Page"/>

            {Object.keys(wishlist).length === 0 ?
                <div className={styles.wishlistEmpty}>
                    <p>Your Wishlist is currently empty.</p>
                    <Link to="/shop">Return To Shop</Link>
                </div>
                :
                <div className={styles.wishlistPageContent}>
                    <div className={styles.wishlistItemsBlock}>
                        <div className={styles.productRow} style={{background: "white", borderColor: "transparent"}}>
                            <div className={`${styles.productCheckBox}`}>
                                <input type="checkbox"
                                       defaultChecked={false}
                                       onChange={({target}) => {
                                           console.log(target.checked)
                                           if (target.checked) {
                                               setSelectedItems(Object.keys(wishlist))
                                           }
                                           else setSelectedItems([]);
                                       }}/>
                            </div>
                            <div className={`${styles.productRemove} ${styles.productBox}`}>
                            </div>

                            <div className={`${styles.productImage} ${styles.productBox}`}></div>
                            <div className={`${styles.productName} ${styles.productBox}`}>
                                <p>Product Name</p>
                                <p>Product</p>
                            </div>
                            <div className={`${styles.productPrice} ${styles.productBox}`}>
                                Unit Price
                            </div>
                            <div className={`${styles.productStock} ${styles.productBox}`}>
                                Stock Status
                            </div>
                            <div className={`${styles.productAction} ${styles.productBox}`}></div>
                        </div>
                        {
                            Object.keys(wishlist).map(id => {
                                const product = cache.find(it => it._id === id);
                                return <div className={styles.productRow}>
                                    <div
                                        key={product._id}
                                        className={`${styles.productCheckBox}`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.includes(product._id)}
                                            onChange={() => {
                                                if (selectedItems.includes(product._id)) {
                                                    setSelectedItems(prev => prev.filter(it => it !== product._id));
                                                }
                                                else return setSelectedItems(prev => [...prev, product._id]);

                                            }}
                                        />
                                    </div>
                                    <div className={`${styles.productRemove} ${styles.productBox}`}>
                                        <X
                                            onClick={() => setWishlist(prev => {
                                                const newObj = {...prev};
                                                delete newObj[product._id];
                                                return newObj;
                                            })}
                                            weight="light"
                                        />
                                    </div>

                                    <div className={`${styles.productImage} ${styles.productBox}`}>
                                        <Link to={`shop/product/${product._id}`} target={'_blank'}>
                                            <img
                                                src={product.images?.[0]?.url}
                                                alt="Product"/>
                                        </Link>
                                    </div>
                                    <div className={`${styles.productName} ${styles.productBox}`}>
                                        <Link to={`shop/product/${product._id}`} target={'_blank'}>
                                            {product?.title}
                                        </Link>
                                    </div>
                                    <div className={`${styles.productPrice} ${styles.productBox}`}>
                                        {(product.salePrice === product.productPrice || product.salePrice) &&
                                            <span>${product.productPrice?.toFixed(2)}</span>}
                                        ${(product.salePrice || product.productPrice)?.toFixed(2)}
                                    </div>
                                    <div className={`${styles.productStock} ${styles.productBox}`}>
                                        {product.stock <= 0 ? "Out of Stock" : "In Stock"}
                                    </div>
                                    <div className={`${styles.productAction} ${styles.productBox}`}>
                                        <button
                                            disabled={product.stock <= 0 || basketOperationInProgress}
                                            onClick={() => handleAddSelectedToCart(product._id)}
                                        >
                                            <p>Add to Cart</p>
                                            <ShoppingCart
                                                weight="fill"
                                            />
                                        </button>
                                    </div>
                                </div>;
                            })
                        }

                    </div>
                    <div className={styles.wishlistActions}>
                        <div className={styles.actionsBlock}>
                        </div>
                        <div className={styles.actionsBlock}>
                            <button
                                disabled={selectedItems.length === 0}
                                onClick={() => {
                                    setWishlist(prev => {
                                        const newObj = {...prev};
                                        selectedItems.forEach(id => {
                                            delete newObj[id];
                                        });
                                        return newObj;
                                    });
                                }}>Remove Selected
                            </button>
                            <button
                                disabled={selectedItems.length === 0}
                                onClick={() => handleAddSelectedToCart(...selectedItems)}
                            >Add Selected to Cart
                            </button>
                            <button
                                disabled={Object.keys(wishlist).length === 0}
                                onClick={() => handleAddSelectedToCart(...Object.keys(wishlist))}
                            >Add All to Cart
                            </button>
                        </div>

                    </div>
                </div>

            }

            {/*PAGE FOOTER*/}
            <ChangedFooter/>
            {/*PAGE COMPONENTS*/}
            <UiControl/>
        </div>
    )
}
