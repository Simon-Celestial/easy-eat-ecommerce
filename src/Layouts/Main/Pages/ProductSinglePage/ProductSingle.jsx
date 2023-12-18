import React, {useContext, useEffect, useState} from 'react'
import styles from "./ProductSingle.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {CaretDown, CaretUp, Heart, ShoppingCart, Star} from "@phosphor-icons/react";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

export const ProductSingle = () => {
    const [productCount, setProductCount] = useState(0);
    const handleProductCount = (number) => {
        setProductCount(prevCount => prevCount + number);
    }

    const {
        setHeaderColorChange,
    } = useContext(LayoutContext);
    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);
    return (
        <div className={styles.productSingleWrapper}>
            {/*PAGE HEADER*/}
            <Header/>
            {/*PAGE CONTENT*/}
            <PageNameSection title="Shop"/>
            <section className={styles.productDetailsSection}>
                <div className={styles.productDetailsContent}>
                    <div className={styles.productDetailsLeft}></div>
                    <div className={styles.productDetailsRight}>
                        <div className={styles.productSale}>
                            -10%
                        </div>
                        <div className={styles.productName}>
                            <h1>Black Burger</h1>
                        </div>
                        <div className={styles.productPrice}>
                            <div className={styles.productPriceWrapper}>
                                <p className={`${styles.discountedPrice} ${styles.price}`}>$ 99.00</p>
                                <p className={`${styles.normalPrice} ${styles.price}`}>$ 89.00</p>
                            </div>
                            <div className={styles.productRating}>
                                <Star size={15} weight="fill" color="#EC3D08"/>
                                <Star size={15} weight="fill" color="#EC3D08"/>
                                <Star size={15} weight="fill" color="#EC3D08"/>
                                <Star size={15} weight="fill" color="#EC3D08"/>
                                <Star size={15} weight="fill" color="#323641"/>
                            </div>
                        </div>
                        <div className={styles.productDescription}>
                            <p>
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia
                                consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum eirmod tempor
                                invidunt labore et dolore.
                            </p>
                            <p>
                                At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore eirmod
                                tempor invidunt magna aliquyam.
                            </p>
                        </div>
                        <div className={styles.productManipulation}>
                            <div className={styles.productCounter}>
                                <p>{productCount}</p>
                                <div className={styles.counterArrows}>
                                    <div className={styles.arrowBlock} onClick={() => handleProductCount(+1)}>
                                        <CaretUp/>
                                    </div>
                                    <div className={styles.arrowBlock}
                                         onClick={productCount > 0 ? () => handleProductCount(-1) : null}>
                                        <CaretDown/>
                                    </div>
                                </div>
                            </div>
                            <button className={styles.productBuyButton}>
                                <ShoppingCart/>
                                Buy Now
                            </button>
                            <div className={styles.productWishList}>
                                <Heart weight="light"/>
                            </div>

                        </div>
                        <div className={styles.productMetaData}>
                            <div className={styles.metaDataRow}><b>Category:</b> <a href="">Burgers & Panini</a></div>
                            <div className={styles.metaDataRow}><b>Tags:</b> <a href="">Sale</a><b>,</b><a href="">Special</a></div>
                            <div className={styles.metaDataRow}><b>Product ID:</b> 2381</div>
                        </div>
                    </div>

                </div>
            </section>
            {/*PAGE FOOTER*/}
            <Footer/>
            {/*PAGE COMPONENTS*/}
            <UiControl/>

        </div>
    )
}
