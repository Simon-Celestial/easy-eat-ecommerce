import React, {useContext, useEffect, useState} from 'react'
import styles from "./WishlistPage.module.scss";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {Header} from "../../Components/Header/Header.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Car, ShoppingCart, X} from "@phosphor-icons/react";
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";
import {Link} from "react-router-dom";

export const WishlistPage = () => {

    const {
        setBasketVisible,
        setHeaderColorChange,
    } = useContext(LayoutContext);
    const [selectedItems, setSelectedItems] = useState([]);
    const {
        wishlist,
        setWishlist,
    } = useContext(UserDataContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);
    useEffect(() => {
        setSelectedItems([]);
    },[wishlist])
    console.log(wishlist)
    return (
        <div className={styles.wishlistPageWrapper}>
            {/*PAGE HEADER*/}
            <Header/>
            {/*PAGE CONTENT*/}
            <PageNameSection title="Wishlist Page"/>

            {Object.keys(wishlist).length === 0?
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
                                           } else setSelectedItems([]);
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
                            Object.values(wishlist).map(product => <div className={styles.productRow}>
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
                                            } else return setSelectedItems(prev => [...prev, product._id]);

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
                                    {(product.salePrice === product.productPrice || product.salePrice) && <span>${product.productPrice?.toFixed(2)}</span>}
                                    ${(product.salePrice || product.productPrice)?.toFixed(2)}
                                </div>
                                <div className={`${styles.productStock} ${styles.productBox}`}>
                                    {product.stock <=0? "Out of Stock" : "In Stock"}
                                </div>
                                <div className={`${styles.productAction} ${styles.productBox}`}>
                                    <button
                                        disabled={product.stock <= 0}
                                    >
                                        <p>Add to Cart</p>
                                        <ShoppingCart
                                            weight="fill"
                                        />
                                    </button>
                                </div>
                            </div>)
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
                                }}>Remove Selected</button>
                            <button
                                disabled={selectedItems.length === 0}
                            >Add Selected to Cart</button>
                            <button>Add All to Cart</button>
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
