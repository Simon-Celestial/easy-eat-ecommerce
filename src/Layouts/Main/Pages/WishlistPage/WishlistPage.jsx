import React, {useContext, useEffect} from 'react'
import styles from "./WishlistPage.module.scss";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {Header} from "../../Components/Header/Header.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Car, ShoppingCart, X} from "@phosphor-icons/react";

export const WishlistPage = () => {

    const {
        setBasketVisible,
        setHeaderColorChange,
    } = useContext(LayoutContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);
    return (
        <div className={styles.wishlistPageWrapper}>
            {/*PAGE HEADER*/}
            <Header/>
            {/*PAGE CONTENT*/}
            <PageNameSection title="Wishlist Page"/>

            {/*WHEN LIST IS EMPTY ADD THIS BLOCK*/}

            {/*<div className={styles.wishlistEmpty}>*/}
            {/*    <p>Your Wishlist is currently empty.</p>*/}
            {/*    <a href="/home/shop">Return To Shop</a>*/}
            {/*</div>*/}


            <form action="#" method="post" className={styles.wishlistPageContent}>
                <div className={styles.wishlistItemsBlock}>
                    <div className={styles.productRow} style={{background: "white", borderColor: "transparent"}}>
                        <div className={`${styles.productCheckBox}`}>
                            <input type="checkbox"/>
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
                    <div className={styles.productRow}>
                        <div className={`${styles.productCheckBox}`}>
                            <input type="checkbox"/>
                        </div>
                        <div className={`${styles.productRemove} ${styles.productBox}`}>
                            <X weight="light"/>
                        </div>

                        <div className={`${styles.productImage} ${styles.productBox}`}>
                            <a href="#">
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-480x480.png"
                                    alt="Product"/>
                            </a>
                        </div>
                        <div className={`${styles.productName} ${styles.productBox}`}>
                            <a href="#">Chicken Burger</a>
                        </div>
                        <div className={`${styles.productPrice} ${styles.productBox}`}>
                            <span>$188.00</span>
                            $165.00
                        </div>
                        <div className={`${styles.productStock} ${styles.productBox}`}>
                            IN STOCK
                        </div>
                        <div className={`${styles.productAction} ${styles.productBox}`}>
                            <button>
                                <p>Add to Cart</p>
                                <ShoppingCart weight="fill"/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.productRow}>
                        <div className={`${styles.productCheckBox}`}>
                            <input type="checkbox"/>
                        </div>
                        <div className={`${styles.productRemove} ${styles.productBox}`}>
                            <X weight="light"/>
                        </div>

                        <div className={`${styles.productImage} ${styles.productBox}`}>
                            <a href="#">
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-480x480.png"
                                    alt="Product"/>
                            </a>
                        </div>
                        <div className={`${styles.productName} ${styles.productBox}`}>
                            <a href="#">Chicken Burger</a>
                        </div>
                        <div className={`${styles.productPrice} ${styles.productBox}`}>
                            <span>$188.00</span>
                            $165.00
                        </div>
                        <div className={`${styles.productStock} ${styles.productBox}`}>
                            IN STOCK
                        </div>
                        <div className={`${styles.productAction} ${styles.productBox}`}>
                            <button>
                                <p>Add to Cart</p>
                                <ShoppingCart weight="fill"/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.productRow}>
                        <div className={`${styles.productCheckBox}`}>
                            <input type="checkbox"/>
                        </div>
                        <div className={`${styles.productRemove} ${styles.productBox}`}>
                            <X weight="light"/>
                        </div>

                        <div className={`${styles.productImage} ${styles.productBox}`}>
                            <a href="#">
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-480x480.png"
                                    alt="Product"/>
                            </a>
                        </div>
                        <div className={`${styles.productName} ${styles.productBox}`}>
                            <a href="#">Chicken Burger</a>
                        </div>
                        <div className={`${styles.productPrice} ${styles.productBox}`}>
                            <span>$188.00</span>
                            $165.00
                        </div>
                        <div className={`${styles.productStock} ${styles.productBox}`}>
                            IN STOCK
                        </div>
                        <div className={`${styles.productAction} ${styles.productBox}`}>
                            <button>
                                <p>Add to Cart</p>
                                <ShoppingCart weight="fill"/>
                            </button>
                        </div>
                    </div>

                </div>
                <div className={styles.wishlistActions}>
                    <div className={styles.actionsBlock}>
                        <select name="product_actions">
                            <option value="" selected="selected">Actions</option>
                            <option value="add_to_cart_selected">Add to Cart</option>
                            <option value="remove_selected">Remove</option>
                        </select>
                        <button>Apply Action</button>
                    </div>
                    <div className={styles.actionsBlock}>
                        <button type="submit">Add Selected to Cart</button>
                        <button type="submit">Add All to Cart</button>
                    </div>

                </div>
            </form>

            {/*PAGE FOOTER*/}
            <ChangedFooter/>
            {/*PAGE COMPONENTS*/}
            <UiControl/>
        </div>
    )
}
