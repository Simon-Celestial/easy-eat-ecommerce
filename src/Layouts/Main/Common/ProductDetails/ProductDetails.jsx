import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExpand, faMagnifyingGlassPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {CaretDown, CaretUp, Heart, MagnifyingGlass, ShoppingCart, Star} from "@phosphor-icons/react";
import styles from "../../Common/ProductDetails/ProductDetails.module.scss";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import {Bounce, toast} from 'react-toastify';
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";

export const ProductDetails = ({product, brands}) => {
    const {
        openHandler,
        magnifiedOpen,
        setMagnifiedOpen,
    } = useContext(LayoutContext);

    const {
        wishlist,
        setWishlist,
    } = useContext(UserDataContext);
    const [productCount, setProductCount] = useState(1);

    // PRODUCT COUNTER STATE
    const handleProductCount = (number) => {
        setProductCount(prevCount => prevCount + number);
    }

    const [activeTab, setActiveTab] = useState(0);
    const [mainImage, setMainImage] = useState(product?.images?.[0]);

    const handleTabClick = (index) => {
        setMainImage(product?.images?.[index]);
        setActiveTab(index);
    };

    console.log({mainImage})
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
        else {
            document.body.style.overflowY = 'hidden';
        }
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
        }
        else {
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
        handle.active ? handle.exit() : handle.enter();
    }, [handle]);

    const handleCloseAllClick = useCallback(() => {
        setMagnifiedOpen(true);
        if (handle.active) handle.exit();
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
    const salePercent = useMemo(() => {
        return (100 - ((product?.salePrice / product?.productPrice) * 100));
    }, [product])

    const [expandImage, setExpandImage] = useState(false);

    const isOnSale = useMemo(() => !!product.salePrice && (product.salePrice !== product.productPrice),
        [product]);

    return (
        <>
            {/*MAGNIFIED IMAGE*/}
            <FullScreen handle={handle}>
                <div className={`${styles.magnifiedImageWrapper} ${magnifiedOpen && styles.magnifiedDisabled}`}>
                    <div className={styles.magnifiedImageHeader}>
                        <div className={styles.magnifiedLocation}>
                            <p>Total images: {product?.images?.length}</p>
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
                            {
                                (product?.images || []).map(img => {
                                    return <SplideSlide key={img.public_id}>
                                        <div className={styles.slideWrapper}>
                                            <div
                                                className={`${
                                                    styles.magnifyImgBlock
                                                } ${expandImage && styles.imageExpanded}`}>
                                                <img className={styles.magnifySliderImg}
                                                     src={img.url}
                                                     alt={img.public_id}/>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                })
                            }

                        </Splide>

                    </div>
                    <div className={styles.magnifiedImageFooter}>
                    </div>

                </div>
            </FullScreen>
            <section className={styles.productDetailsSection}>
                <div className={styles.productDetailsContent}>
                    {/*PRODUCTS LEFT CONTAINER*/}
                    <div className={styles.productDetailsLeft}>
                        <div className={styles.productTabMenu}>
                            <div className={styles.productTabMenuColumn}>
                                {(product?.images || []).map((image, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.columnItem} ${index === activeTab ? styles.itemActive : ""}`}
                                        onClick={() => handleTabClick(index)}
                                    >
                                        <img src={image.url} alt={`Burger ${index + 1}`}/>
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
                                            src={mainImage?.url} alt="Main Burger Image"
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
                        {
                            (salePercent !== 100 && salePercent !== 0) ? <div className={styles.productSale}>
                                -{salePercent.toFixed(2)}%
                            </div> : ''
                        }
                        <div className={styles.productName}>
                            <h1>{product?.title}</h1>
                        </div>
                        <div className={styles.productPrice}>
                            {/*PRODUCT SINGLE */}
                            <div className={styles.productPriceWrapper}>
                                {
                                    isOnSale &&
                                    <p className={`${styles.normalPrice} ${styles.price}`}>$ {(product.productPrice)?.toFixed(2)}</p>
                                }

                                {

                                    <p
                                        className={`${styles.discountedPrice} ${styles.price}`}
                                    >
                                        {`$ ${(product.salePrice || product?.productPrice).toFixed(2)}`}
                                    </p>
                                }
                                {/*STANDARD PRICE*/}
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
                                {product?.description}
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
                                <Heart
                                    weight="regular"
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
                                                toast.error(`${product.title} removed from wishlist!`,
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
                                            toast.success(`${product.title} added to wishlist!`,
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
                            </div>

                        </div>
                        <div className={styles.productMetaData}>
                            <div className={styles.metaDataRow}><b>Category:</b> <a href="">{
                                brands?.find(it => it?._id === product?.brandId)?.name
                            }</a>
                            </div>
                            <div className={styles.metaDataRow}><b>Tags:</b> <a href="">Sale</a><b>,</b> <a
                                href="">Special</a></div>
                            <div className={styles.metaDataRow}><b>Product ID:</b> {product?._id}</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
