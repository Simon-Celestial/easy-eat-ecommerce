import styles from "./Home.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {ArrowRight, CaretDoubleDown, Heart, TelegramLogo} from "@phosphor-icons/react";
import {SubscribeModal} from "../../Common/SubscribeModal/SubscribeModal.jsx";
import React, {useState, useCallback, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {CollageProductItems} from "../../Common/CollageProductItems/CollageProductItems.jsx";
import {FadeImageSlider} from "../../Common/FadeImageSlider/FadeImageSlider.jsx";
import {LatestNewsSectionSlider} from "../../Common/LatestNewsSectionSlider/LatestNewsSectionSlider.jsx";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";
import {Bounce, toast} from "react-toastify";
import partnershipData from '../../../../../public/HomePageData/partners.json';
import iconsData from '../../../../../public/HomePageData/icons.json';
import { ThreeCircles} from "react-loader-spinner";


export const Home = () => {
    const {
        setBasketVisible,
    } = useContext(LayoutContext);

    const {
        cache,
        setWishlist,
        wishlist,
        cacheLoading,
    } = useContext(UserDataContext);

    const [position, setPosition] = useState({x: 0, y: 0});
    const [parallaxEnabled, setParallaxEnabled] = useState(false);


    const handleMouseMove = useCallback((e) => {
        if (parallaxEnabled) {
            setPosition({x: e.clientX, y: e.clientY});
        }
        else {

        }
    }, [parallaxEnabled]);

    const handleMouseEnter = useCallback(() => {
        setParallaxEnabled(true);
    }, []);
    const handleMouseLeave = useCallback(() => {
        setParallaxEnabled(false);
        setPosition({x: 0, y: 0})
    }, []);


    const parallaxStyleUpper = {
        transform: `translate(-${position.x / 50}px, -${position.y / 40}px)`,
        transition: parallaxEnabled ? '0ms' : '200ms'
    };

    const parallaxStyleLower = {
        transform: `translate(-${position.x / 200}px, -${position.y / 200}px)`,
        transition: parallaxEnabled ? '0ms' : '200ms'
    };

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);
    const [visibleActive, setVisibleActive] = useState(false);

    useEffect(() => {
        setVisibleActive(true);
    }, []);

    return (
        <>
        {!cacheLoading ?
            <div className={styles.homeWrapper}>
                {/*HOME PAGE MODAL*/}
                <SubscribeModal/>

                {/*HEADER*/}
                <Header/>

                {/*HOME PAGE MAIN CONTENT*/}
                <main className={styles.mainWrapper}>
                    {/*ABOUT US SECTION*/}
                    <section
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        className={styles.aboutUsSection}
                    >
                        <div className={styles.aboutUsContent}>
                            <div className={`${styles.aboutUsLeft} ${visibleActive && styles.transformActive}`}>
                                <div className={styles.aboutUsLeftTittle}>
                                    <p>About Us</p>
                                    <h1>UNFORGETTABLE BURGERS,</h1>
                                    <h1>UNFORGETTABLE MEMORIES</h1>
                                    <div className={styles.aboutUsServices}>
                                        {iconsData.map(data => (
                                                <a href={data.link} className={styles.servicesCard} key={data.id}>
                                                    <div className={styles.iconBox}>
                                                        <i/>{data.icon}
                                                    </div>
                                                    <span className={styles.serviceCardTittle}>{data.title}</span>
                                                </a>
                                            )
                                        )}
                                    </div>
                                    <Link to="https://easyeat.ancorathemes.com/about-us/">
                                        <button>
                                            About Us
                                            <ArrowRight/>
                                        </button>
                                    </Link>

                                </div>
                            </div>
                            <div className={`${styles.aboutUsRight} ${visibleActive && styles.visibleActive}`}>
                                <div className={styles.spinningCircle}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-3.svg"
                                        alt=""
                                    />

                                </div>
                                <div className={styles.floatingBurger}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-5-copyright.png"
                                        alt=""
                                        style={parallaxStyleUpper}
                                    />
                                </div>
                                <div className={styles.solidCircleTop}>
                                    <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill-2.svg"
                                         alt="decoration"/>
                                </div>
                                <div className={styles.solidCircleBottom}>
                                    <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill-2.svg"
                                         alt="decoration"/>
                                </div>
                                <div className={styles.redCrownTop}>
                                    <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/crown-3.svg"
                                         alt="Decoration"
                                         style={parallaxStyleLower}
                                    />

                                </div>
                                <div className={styles.redBallTop}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-3.svg"
                                        alt="Decoration"
                                        style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.redLineBurger}>
                                    <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-7.svg"
                                         alt="Decoration"
                                         style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.redSmallLineBurger}>
                                    <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-9.svg"
                                         alt="Decoration"
                                         style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.redBottomLineBurger}>
                                    <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-8.svg"
                                         alt="Decoration"
                                         style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.spinningCircleBottom}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-3.svg"
                                        alt=""
                                    />

                                </div>
                                <div className={styles.redBigBallBottom}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-3.svg"
                                        alt="Decoration"
                                        style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.redSmallBallBottom}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-4.svg"
                                        alt="Decoration"
                                        style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.redTinyBallBurger}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                        alt="Decoration"
                                        style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.redSmallBallTop}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-4.svg"
                                        alt="Decoration"
                                        style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.redTinyBallRight}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                        alt="Decoration"
                                        style={parallaxStyleLower}
                                    />
                                </div>
                                <div className={styles.redLineRightBurger}>
                                    <img
                                        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-10.svg"
                                        alt="Decoration"
                                        style={parallaxStyleLower}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*OUR BURGERS SECTION*/}
                    <section
                        className={styles.ourBurgersSection}
                    >
                        <div className={styles.ourBurgersContent}>
                            <div className={styles.ourBurgersHeading}>
                                <span>Our Burgers</span>
                                <h2>Unleash Your Burger Cravings with Our Menu</h2>
                            </div>
                            <div className={styles.ourBurgersProducts}>
                                {
                                    cache?.filter(p => p.stock !== 0).slice(-4).map(product => {
                                        const salePercent = (100 - ((product?.salePrice / product?.productPrice) * 100));

                                        return <div className={styles.ourBurgersCardWrapper} key={product._id}>
                                            {
                                                salePercent !== 0 && salePercent !== 100 &&
                                                <div className={styles.cardSale}>
                                                    -{salePercent.toFixed(2)}%
                                                </div>
                                            }
                                            <div className={styles.burgerCardManipulation}>
                                                <div className={styles.manipulationItem}>
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
                                                </div>
                                                <Link
                                                    to={`/product/${product._id}`}
                                                    className={styles.manipulationItem}>
                                                    <ArrowRight weight="light"/>
                                                </Link>
                                            </div>
                                            <div className={styles.burgerCard}>
                                                <Link to={`/product/${product._id}`}>
                                                    <div className={styles.ourBurgersImg}>
                                                        <img
                                                            src={product?.images?.[0]?.url}
                                                            alt={product?.images?.[0]?.public_id}/>
                                                    </div>
                                                </Link>
                                                <Link to={`/product/${product._id}`}>
                                                    <div className={styles.ourBurgerTitle}>
                                                        <span>{product.title}</span>
                                                    </div>
                                                </Link>
                                                <div className={styles.ourBurgerPrice}>
                                                <span>
                                                    {product.salePrice && (product.salePrice !== product.productPrice)
                                                        && <p>${product.productPrice.toFixed(2)}</p>}
                                                    ${(product.salePrice || product.productPrice).toFixed(2)}
                                                </span>
                                                </div>
                                                <div className={styles.addToCart}>
                                                    <Link to={`/product/${product._id}`}>Buy Now</Link>
                                                </div>

                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className={styles.ourBurgersViewMore}>
                                <Link to="/shop">
                                    <button>
                                        View More
                                        <ArrowRight/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/*INGREDIENTS SECTION*/}
                    <section className={styles.ingredientsSection}>
                        <div className={styles.ingredientsContent}>
                            <div className={styles.ingredientsLeft}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/img-5-copyright.jpg"
                                     alt="Cook"/>
                            </div>
                            <div className={styles.ingredientsRight}>
                                <span>GOURMET BURGERS</span>
                                <h1>DELICIOUS BURGERS MADE FROM THE FRESHEST INGREDIENTS</h1>
                                <p>Nibh venenatis cras sed felis eget velit aliquet sagittis. Faucibus purus in massa tempor
                                    nec feugiat nisl pretium fusce.</p>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/img-4-copyright.jpg"
                                     alt="Burger"/>
                            </div>
                        </div>
                    </section>

                    {/*PARTNERSHIP SECTION*/}
                    <section className={styles.partnershipSection}>
                        <div className={styles.partnershipContent}>
                            {partnershipData.map(partner => (
                                <div key={partner.id} className={styles.partnershipItem}>
                                    <img src={partner.src} alt={partner.alt}/>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/*COLLAGE IMAGES SECTION*/}
                    <div className={styles.collageImagesSection}>
                        <div className={styles.imageColumn}>
                            <CollageProductItems
                                productName="Chef's Chicken Burger"
                                category="Burgers"
                                imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-6-copyright.jpg"
                                productUrl="https://easyeat.ancorathemes.com/portfolio/chefs-chicken-burger/"
                            />
                        </div>
                        <div className={styles.imageColumn}>
                            <CollageProductItems
                                productName="Double Set Burger"
                                category="Burgers"
                                imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-10-copyright-890x664.jpg"
                                productUrl="https://easyeat.ancorathemes.com/portfolio/double-burger-set/"


                            />
                            <CollageProductItems
                                productName="Craft Light Beer"
                                category="Burgers"
                                imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-12-copyright-890x664.jpg"
                                productUrl="https://easyeat.ancorathemes.com/portfolio/craft-light-beer/"

                            />
                        </div>
                        <div className={styles.imageColumn}>
                            <CollageProductItems
                                productName="Spicy Tomato Sauce"
                                category="Burgers"
                                imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-11-copyright-890x664.jpg"
                                productUrl="https://easyeat.ancorathemes.com/portfolio/spicy-tomato-sauce/"

                            />
                            <CollageProductItems
                                productName="Hot French Fries"
                                category="Burgers"
                                imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-13-copyright-890x664.jpg"
                                productUrl="https://easyeat.ancorathemes.com/portfolio/hot-french-fries/"
                            />
                        </div>
                    </div>

                    {/*OUR MENU SECTION*/}

                    <section
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        className={styles.ourMenuSection}
                    >
                        <div className={styles.decorationTomato} style={parallaxStyleLower}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-8-copyright.png"
                                alt="Decoration"/>
                        </div>
                        <div className={styles.decorationBurger} style={parallaxStyleLower}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-7-copyright.png"
                                alt="Decoration"/>
                        </div>
                        <div className={styles.decorationCheese} style={parallaxStyleLower}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-6-copyright.png"
                                alt="Decoration"/>

                        </div>
                        <div className={styles.decorationFries} style={parallaxStyleLower}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-10-copyright.png"
                                alt="Decoration"/>
                        </div>
                        <div className={styles.decorationSalad} style={parallaxStyleLower}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-9-copyright.png"
                                alt="Decoration"/>

                        </div>
                        <div className={styles.ourMenuContent}>
                            <div className={styles.ourMenuHeading}>
                                <p>Our Menu</p>
                                <span>YOUR ONE-STOP BURGER SHOP</span>
                                <CaretDoubleDown/>
                            </div>
                            <div className={styles.ourMenuContainer}>
                                <div className={styles.ourMenuColumn}>
                                    {
                                        cache.filter((p, i) => i % 2).slice(0, 5).map(product =>
                                            <div className={styles.ourMenuColumnItem} key={product._id}>
                                                <div className={styles.ourMenuRow}>
                                                    <Link
                                                        to={`/product/${product._id}`}
                                                        className={styles.ourMenuDetails}>
                                                        {product.title}
                                                    </Link>
                                                    <div className={styles.ourMenuItemDots}></div>
                                                    <div className={styles.ourMenuDetails}>
                                                        ${(product.salePrice || product.productPrice).toFixed(2)}
                                                    </div>
                                                </div>
                                                <div className={styles.ourMenuItemDescription}>
                                                    {`${product.description.slice(0, 50)}...`}
                                                </div>
                                            </div>)
                                    }
                                </div>
                                <div className={styles.ourMenuColumn}>
                                    {
                                        cache.filter((p, i) => !(i % 2)).slice(0, 5).map(product =>
                                            <div className={styles.ourMenuColumnItem} key={product._id}>
                                                <div className={styles.ourMenuRow}>
                                                    <Link
                                                        to={`/product/${product._id}`}
                                                        className={styles.ourMenuDetails}>
                                                        {product.title}
                                                    </Link>
                                                    <div className={styles.ourMenuItemDots}></div>
                                                    <div className={styles.ourMenuDetails}>
                                                        ${(product.salePrice || product.productPrice).toFixed(2)}
                                                    </div>
                                                </div>
                                                <div className={styles.ourMenuItemDescription}>
                                                    {`${product.description.slice(0, 50)}...`}
                                                </div>
                                            </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*OUR DINER SECTION*/}
                    <section
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                        className={styles.ourDinerSection}>
                        <div className={styles.solidCircleOurDinner}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill-3.svg"
                                 alt="Decoration"/>
                        </div>
                        <div className={styles.spinningCircleOurDinner}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-4.svg"
                                 alt="Decoration"/>
                        </div>
                        <div className={styles.solidCircleLeftOurDinner}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill-4.svg"
                                 alt="Decoration"/>
                        </div>
                        <div className={styles.spinningCircleLeftOurDinner}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-5.svg"
                                 alt="Decoration"/>
                        </div>


                        <div className={styles.ourDinerLeft}>
                            <div className={styles.ourDinnerBigImg} style={parallaxStyleLower}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-11-copyright.png"
                                    alt="Decoration"/>
                            </div>
                            <div className={styles.ourDinnerCrown} style={parallaxStyleUpper}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/crown-4.svg"
                                     alt="Decoration"/>
                            </div>
                            <div className={styles.ourDinnerRedLineLeft} style={parallaxStyleUpper}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-11.svg"
                                     alt="Decoration"/>
                            </div>
                            <div className={styles.ourDinnerRedLineRight} style={parallaxStyleUpper}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-13.svg"
                                     alt="Decoration"/>
                            </div>
                            <div className={styles.ourDinnerRedLineTop} style={parallaxStyleUpper}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-12.svg"
                                     alt="Decoration"/>
                            </div>
                            <div className={styles.ourDinnerDotRight} style={parallaxStyleUpper}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                     alt="Decoration"/>
                            </div>
                            <div className={styles.ourDinnerDotTop} style={parallaxStyleUpper}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                     alt="Decoration"/>
                            </div>
                            <div className={styles.ourDinnerDotLeft} style={parallaxStyleUpper}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                     alt="Decoration"/>
                            </div>


                        </div>
                        <div className={styles.ourDinerRight}>
                            <h2>OUR DINER</h2>
                            <span>We make the best burgers in town</span>
                            <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam.natus error sit voluptatem accusantium doloremque laudantium.</p>
                            <p>Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas.</p>
                            <Link to="https://easyeat.ancorathemes.com/about-us/">
                                <button>
                                    Learn More
                                    <ArrowRight/>
                                </button>
                            </Link>
                        </div>
                    </section>

                    {/*FADE IMAGE SLIDER SECTION*/}
                    <FadeImageSlider/>

                    {/*LATEST NEWS SECTION WITH SLIDER*/}
                    <LatestNewsSectionSlider/>

                    {/*SUBSCRIBE SECTION*/}
                    <section className={styles.subscribeSection}>
                        <div className={styles.subscribeSectionContent}>
                            <div className={`${styles.subscribeRotateCircleRight} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-2.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeSolidCircleRight} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeRotateCircleLeft} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-2.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeSolidCircleLeft} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeRedLineRight} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-6.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeRedDotRight} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeRedCrownLeft} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/crown-2.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeRedDotTop} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeRedLineTop} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-5.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeRedLineBottom} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-4.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={`${styles.subscribeRedDotBottom} ${styles.decoration}`}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={styles.subscribeTittle}>
                                <h2>Subscribe for exclusive</h2>
                                <h2>updates and hot offers!</h2>
                            </div>
                            <div className={styles.subscribeFormWrapper}>
                                <form action="#">
                                    <div className={styles.subscribeFormTop}>
                                        <label htmlFor="subscribeInput">
                                            <input type="main" placeholder="Enter Your Email Address" required/>
                                        </label>
                                        <button type="submit">
                                            <TelegramLogo/>
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                    <div className={styles.subscribeFormBottom}>
                                        <label htmlFor="subscribeAgreement">
                                            <input type="checkbox"/>
                                            I agree to the
                                            <a href="https://easyeat.ancorathemes.com/privacy-policy/" target="_blank">Privacy
                                                Policy</a>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>
                {/*FOOTER*/}
                <Footer/>
                {/*COMMON COMPONENTS FOR UI */}
                <UiControl/>
            </div>
          :
            <div className={styles.homePageLoader}>
                render(<ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#FFB936"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />)
            </div>
        }
        </>

    )
}
