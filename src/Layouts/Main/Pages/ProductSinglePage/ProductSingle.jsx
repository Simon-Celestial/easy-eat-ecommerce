import React, {useContext, useEffect, useState} from 'react'
import styles from "./ProductSingle.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {CaretDown, CaretUp, Heart, MagnifyingGlass, ShoppingCart, Star} from "@phosphor-icons/react";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

export const ProductSingle = () => {
    const [productCount, setProductCount] = useState(0);

    // PRODUCT COUNTER STATE
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

    // TAB MENU
    const tabMainImages = [
        {
            big:'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright.png',
            small:'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-150x150.png',
        },
        {
            big: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright.png',
            small: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-150x150.png',
        },
        {
            big:'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-2-copyright.png',
            small:'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-2-copyright-150x150.png',
        },
        {
            big:'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-1-copyright.png',
            small:'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-1-copyright-150x150.png',
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [mainImage, setMainImage] = useState(tabMainImages[0]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setMainImage(tabMainImages[index]);
    };


    return (
        <div className={styles.productSingleWrapper}>
            {/*PAGE HEADER*/}
            <Header/>
            {/*PAGE CONTENT*/}
            <PageNameSection title="Shop"/>
            <section className={styles.productDetailsSection}>
                <div className={styles.productDetailsContent}>
                    {/*PRODUCTS LEFT CONTAINER*/}
                    <div className={styles.productDetailsLeft}>
                        <div className={styles.productTabMenu}>
                            <div className={styles.productTabMenuColumn}>
                                {tabMainImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.columnItem} ${index === activeTab ? styles.itemActive : ""}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <img src={image.small} alt={`Burger ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.productTabMenuImage}>
                                <div className={styles.tabMenuImage}>
                                    <div className={styles.magnifyingImage}>
                                        <MagnifyingGlass weight="light"/>
                                    </div>
                                    <img src={mainImage.big} alt="Main Burger Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*PRODUCTS RIGHT CONTAINER*/}
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
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed
                                quia
                                consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum eirmod tempor
                                invidunt labore et dolore.
                            </p>
                            <p>
                                At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore
                                eirmod
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
                            <div className={styles.metaDataRow}><b>Category:</b> <a href="">Burgers & Panini</a>
                            </div>
                            <div className={styles.metaDataRow}><b>Tags:</b> <a href="">Sale</a><b>,</b><a
                                href="">Special</a></div>
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
