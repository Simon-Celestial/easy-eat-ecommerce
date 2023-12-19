import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand, faMagnifyingGlassPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {CaretDown, CaretUp, Heart, MagnifyingGlass, ShoppingCart, Star} from "@phosphor-icons/react";
import styles from "../../Common/ProductDetails/ProductDetails.module.scss";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

export const ProductDetails = () => {
    const {
        openHandler,
        magnifiedOpen,
        setMagnifiedOpen,
    } = useContext(LayoutContext);


    const [productCount, setProductCount] = useState(0);

    // PRODUCT COUNTER STATE
    const handleProductCount = (number) => {
        setProductCount(prevCount => prevCount + number);
    }

    // TAB MENU
    const tabMainImages = [
        {
            big: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright.png',
            small: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-150x150.png',
        },
        {
            big: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright.png',
            small: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-150x150.png',
        },
        {
            big: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-2-copyright.png',
            small: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-2-copyright-150x150.png',
        },
        {
            big: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-1-copyright.png',
            small: 'https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-1-copyright-150x150.png',
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const [mainImage, setMainImage] = useState(tabMainImages[0]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setMainImage(tabMainImages[index]);
    };


    const [isMagnified, setIsMagnified] = useState(false);
    const magnificationContainerRef = useRef(null);
    const [scroll, setScroll] = useState([0, 0]);
    useEffect(() => {
        const onScrollEvent = () => {
            setScroll([window.scrollX, window.scrollY])
        }
        window.addEventListener('scroll', onScrollEvent);

        return () => {
            window.removeEventListener('scroll', onScrollEvent);
        }
    }, []);
    useEffect(() => {
        if (magnifiedOpen) {
            document.body.style.overflowY = 'auto';
        }

        return () => {
            document.body.style.overflowY = 'hidden';
        };
    }, [magnifiedOpen]);

    const {
        magX,
        magY,
        magWidth,
        magHeight,
    } = useMemo(() => {
        if (magnificationContainerRef?.current) {
            const rect = magnificationContainerRef.current.getBoundingClientRect();
            return {
                magX: rect.x,
                magY: rect.y,
                magWidth: rect.width,
                magHeight: rect.height
            }
        } else {
            return {
                magX: 0,
                magY: 0,
                magWidth: 0,
                magHeight: 0,
            }
        }
    }, [magnificationContainerRef.current, scroll]);
    const [offsetMousePos, setOffsetMousePos] = useState([0, 0]);
    const handleMouseMoveOnMagnifiedContainer = useCallback((ev) => {
        const mouseX = Math.min(Math.max(0, ev.clientX - magX), magWidth);
        const mouseY = Math.min(Math.max(0, ev.clientY - magY), magHeight);
        setOffsetMousePos([mouseX, mouseY]);
    }, [magX, magY, magWidth, magHeight, scroll])

    const handle = useFullScreenHandle();

    const handleToggleFullScreen = useCallback(() => {
        handle.active?  handle.exit() : handle.enter();
    }, [handle]);

    const handleCloseAllClick = useCallback(() => {
         setMagnifiedOpen(true);
        if(handle.active) handle.exit();
    }, [handle]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                setMagnifiedOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const [expandImage,setExpandImage] = useState(false);





    return (
        <>
            {/*MAGNIFIED IMAGE*/}
            <FullScreen handle={handle}>
            <div className={`${styles.magnifiedImageWrapper} ${magnifiedOpen && styles.magnifiedDisabled}`}>
                <div className={styles.magnifiedImageHeader}>
                    <div className={styles.magnifiedLocation}>
                        <p>4 / 4</p>
                    </div>
                    <div className={styles.magnifiedManipulation}>
                        <div className={styles.manipulationItem}>
                            <FontAwesomeIcon icon={faMagnifyingGlassPlus} onClick={openHandler(setExpandImage)}/>
                        </div>
                        <div className={styles.manipulationItem} onClick={handleToggleFullScreen}>
                            <FontAwesomeIcon icon={faExpand}/>
                        </div>
                        <div className={styles.manipulationItem} onClick={handleCloseAllClick}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                    </div>
                </div>
                <div className={styles.magnifiedImageSliderWrapper}>
                    <Splide
                        options={{}}
                        aria-label="My Favorite Images">
                        <SplideSlide>
                            <div className={styles.slideWrapper}>
                                <div className={`${styles.magnifyImgBlock} ${expandImage && styles.imageExpanded}`}>
                                    <img className={styles.magnifySliderImg}
                                         src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-1-copyright.png"
                                         alt="Image 1"/>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={styles.slideWrapper}>
                                <div className={`${styles.magnifyImgBlock} ${expandImage && styles.imageExpanded}`}>
                                    <img className={styles.magnifySliderImg}
                                         src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-2-copyright.png"
                                         alt="Image 2"/>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={styles.slideWrapper}>
                                <div className={`${styles.magnifyImgBlock} ${expandImage && styles.imageExpanded}`}>
                                    <img className={styles.magnifySliderImg}
                                         src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright.png"
                                         alt="Image 3"/>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={styles.slideWrapper}>
                                <div className={`${styles.magnifyImgBlock} ${expandImage && styles.imageExpanded}`}>
                                    <img className={styles.magnifySliderImg}
                                         src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright.png"
                                         alt="Image 4"/>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>

                </div>
                <div className={styles.magnifiedImageFooter}>
                    <p>Tasty Dished</p>
                </div>

            </div>
            </FullScreen>
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
                                        <img src={image.small} alt={`Burger ${index + 1}`}/>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.productTabMenuImage}>
                                <div className={styles.magnifyingImage} onClick={openHandler(setMagnifiedOpen)}>
                                    <MagnifyingGlass weight="light"/>
                                </div>

                                <div className={styles.tabMenuImage}>
                                    <div
                                        ref={magnificationContainerRef}
                                        onMouseMove={handleMouseMoveOnMagnifiedContainer}
                                        onMouseEnter={() => setIsMagnified(true)}
                                        onMouseLeave={() => setIsMagnified(false)}
                                        style={{
                                            overflow: 'hidden'
                                        }}>
                                        <img
                                            src={mainImage.big} alt="Main Burger Image"
                                            style={{
                                                transition: '50ms ease',
                                                transform: `\
                                                ${isMagnified ? 'scale(3)' : 'scale(1)'}\
                                                 translateX(${isMagnified ? magWidth / 2 - offsetMousePos[0] : 0}px)\
                                                 translateY(${isMagnified ? magHeight / 2 - offsetMousePos[1] : 0}px)\
                                                 `,
                                            }}
                                        />
                                    </div>
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
                            <div className={styles.metaDataRow}><b>Tags:</b> <a href="">Sale</a><b>,</b> <a
                                href="">Special</a></div>
                            <div className={styles.metaDataRow}><b>Product ID:</b> 2381</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
