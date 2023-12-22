import styles from "./Home.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {ArrowRight, CaretDoubleDown, Heart, TelegramLogo} from "@phosphor-icons/react";
import {SubscribeModal} from "../../Common/subscribeModal/SubscribeModal.jsx";
import {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {CollageProductItems} from "../../Common/CollageProductItems/CollageProductItems.jsx";


export const Home = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const sectionRef = useRef();
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };
        if (sectionRef.current) {
            sectionRef.current.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            if (sectionRef.current) {
                sectionRef.current.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [sectionRef]);
    const parallaxStyle = {
        transform: `translate(-${position.x / 50}px, -${position.y / 40}px)`,
    };
    const parallaxStyleFast = {
        transform: `translate(-${position.x / 40}px, -${position.y / 100}px)`,
    };
    return (
        <div className={styles.homeWrapper}>
            {/*HOME PAGE MODAL*/}
            <SubscribeModal/>
            {/*/!*SITE MAIN COMPONENTS*!/*/}
            <Header/>
            {/*HOME PAGE MAIN CONTENT*/}
            <main className={styles.mainWrapper}>
                {/*ABOUT US SECTION*/}
                <section className={styles.aboutUsSection} ref={sectionRef}>
                    <div className={styles.aboutUsContent}>
                        <div className={styles.aboutUsLeft}>
                            <div className={styles.aboutUsLeftTittle}>
                                <p>About Us</p>
                                <h1>UNFORGETTABLE BURGERS,</h1>
                                <h1>UNFORGETTABLE MEMORIES</h1>
                                <div className={styles.aboutUsServices}>
                                    <a href="#" className={styles.servicesCard}>
                                        <div className={styles.iconBox}>
                                            <i/>&#xe800;
                                        </div>
                                        <span className={styles.serviceCardTittle}>Lorem ipsum dolor sit amet adipiscing elit</span>

                                    </a>
                                    <a href="#" className={styles.servicesCard}>
                                        <div className={styles.iconBox}>
                                            <i/>&#xe801;
                                        </div>
                                        <span className={styles.serviceCardTittle}>Lorem ipsum dolor sit amet adipiscing elit</span>
                                    </a>
                                    <a href="#" className={styles.servicesCard}>
                                        <div className={styles.iconBox}>
                                            <i/>&#xe802;
                                        </div>
                                        <span className={styles.serviceCardTittle}>Lorem ipsum dolor sit amet adipiscing elit</span>
                                    </a>
                                </div>
                                <a href="#">
                                    <button>
                                        About Us
                                        <ArrowRight/>
                                    </button>
                                </a>

                            </div>
                        </div>
                        <div className={styles.aboutUsRight}>
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
                                    style={parallaxStyleFast}
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
                                     style={parallaxStyle}
                                />

                            </div>
                            <div className={styles.redBallTop}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-3.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redLineBurger}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-7.svg"
                                     alt="Decoration"
                                     style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redSmallLineBurger}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-9.svg"
                                     alt="Decoration"
                                     style={parallaxStyleFast}
                                />
                            </div>
                            <div className={styles.redBottomLineBurger}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-8.svg"
                                     alt="Decoration"
                                     style={parallaxStyle}
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
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redSmallBallBottom}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-4.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redTinyBallBurger}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redSmallBallTop}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-4.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redTinyBallRight}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redLineRightBurger}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-10.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/*OUR BURGERS SECTION*/}
                <section className={styles.ourBurgersSection}>
                    <div className={styles.ourBurgersContent}>
                        <div className={styles.ourBurgersHeading}>
                            <span>Our Burgers</span>
                            <h2>Unleash Your Burger Cravings with Our Menu</h2>
                        </div>
                        <div className={styles.ourBurgersProducts}>
                            {/*FOR SALE ON PRODUCT ADD .cardSale styles, in .ourBurgersCardWrapper*/}
                            {/*FOR LINE THROUGH ON SALE PRICE (WRITE PRICE IN SPAN <p>sale price<p/>)*/}
                            <div className={styles.ourBurgersCardWrapper}>
                                <div className={styles.burgerCardManipulation}>
                                    <div className={styles.manipulationItem}>
                                        <Heart weight="light"/>
                                    </div>
                                    <a href="#" className={styles.manipulationItem}>
                                        <ArrowRight weight="light"/>
                                    </a>
                                </div>
                                <div className={styles.burgerCard}>
                                    <Link to="/home/:id">
                                        <div className={styles.ourBurgersImg}>
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-480x480.png"
                                                alt="Burger"/>
                                        </div>
                                    </Link>
                                    <Link to="/home/details">
                                        <div className={styles.ourBurgerTitle}>
                                            <span>CHICKEN BURGER</span>
                                        </div>
                                    </Link>
                                    <div className={styles.ourBurgerPrice}>
                                        <span>$165.00</span>
                                    </div>
                                    <div className={styles.addToCart}>
                                        <a href="#">Buy Now</a>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.ourBurgersCardWrapper}>
                                <div className={styles.cardSale}>
                                    -10%
                                </div>
                                <div className={styles.burgerCardManipulation}>
                                    <div className={styles.manipulationItem}>
                                        <Heart weight="light"/>
                                    </div>
                                    <a href="#" className={styles.manipulationItem}>
                                        <ArrowRight weight="light"/>
                                    </a>
                                </div>
                                <div className={styles.burgerCard}>
                                    <Link to="/home/:id">
                                        <div className={styles.ourBurgersImg}>
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"
                                                alt="Burger"/>
                                        </div>
                                    </Link>
                                    <Link to="/home/details">
                                        <div className={styles.ourBurgerTitle}>
                                            <span>BLACK BURGER</span>
                                        </div>
                                    </Link>
                                    <div className={styles.ourBurgerPrice}>
                                        <span><p>$99.00</p>$89.00</span>
                                    </div>
                                    <div className={styles.addToCart}>
                                        <a href="#">Buy Now</a>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.ourBurgersCardWrapper}>
                                <div className={styles.burgerCardManipulation}>
                                    <div className={styles.manipulationItem}>
                                        <Heart weight="light"/>
                                    </div>
                                    <a href="#" className={styles.manipulationItem}>
                                        <ArrowRight weight="light"/>
                                    </a>
                                </div>
                                <div className={styles.burgerCard}>
                                    <Link to="/home/:id">
                                        <div className={styles.ourBurgersImg}>
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-1-copyright-1024x1024.png"
                                                alt="Burger"/>
                                        </div>
                                    </Link>
                                    <Link to="/home/details">
                                        <div className={styles.ourBurgerTitle}>
                                            <span>FISH BURGER</span>
                                        </div>
                                    </Link>
                                    <div className={styles.ourBurgerPrice}>
                                        <span>$49.00</span>
                                    </div>
                                    <div className={styles.addToCart}>
                                        <a href="#">Buy Now</a>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.ourBurgersCardWrapper}>
                                <div className={styles.burgerCardManipulation}>
                                    <div className={styles.manipulationItem}>
                                        <Heart weight="light"/>
                                    </div>
                                    <a href="#" className={styles.manipulationItem}>
                                        <ArrowRight weight="light"/>
                                    </a>
                                </div>
                                <div className={styles.burgerCard}>
                                    <Link to="/home/:id">
                                        <div className={styles.ourBurgersImg}>
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-2-copyright-480x480.png"
                                                alt="Burger"/>
                                        </div>
                                    </Link>
                                    <Link to="/home/details">
                                        <div className={styles.ourBurgerTitle}>
                                            <span>DOUBLE BURGER</span>
                                        </div>
                                    </Link>
                                    <div className={styles.ourBurgerPrice}>
                                        <span>$125.00 - $165.00</span>
                                    </div>
                                    <div className={styles.addToCart}>
                                        <a href="#">Buy Now</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.ourBurgersViewMore}>
                            <Link to="/home">
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
                        <div className={styles.partnershipItem}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/client-1-copyright.png"
                                alt="Partners"/>
                        </div>
                        <div className={styles.partnershipItem}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/client-2-copyright.png"
                                alt="Partners"/>
                        </div>
                        <div className={styles.partnershipItem}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/client-3-copyright.png"
                                alt="Partners"/>
                        </div>
                        <div className={styles.partnershipItem}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/client-4-copyright.png"
                                alt="Partners"/>
                        </div>
                        <div className={styles.partnershipItem}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/client-5-copyright.png"
                                alt="Partners"/>
                        </div>
                        <div className={styles.partnershipItem}>
                            <img
                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/client-6-copyright.png"
                                alt="Partners"/>
                        </div>

                    </div>
                </section>

                {/*COLLAGE IMAGES SECTION*/}
                <div className={styles.collageImagesSection}>
                    <div className={styles.imageColumn}>
                        <CollageProductItems productName="Chef's Chicken Burger" category="Burgers"
                                             imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-6-copyright.jpg"/>
                    </div>
                    <div className={styles.imageColumn}>
                        <CollageProductItems productName="Double Set Burger" category="Burgers"
                                             imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-10-copyright-890x664.jpg"/>
                        <CollageProductItems productName="Craft Light Beer" category="Burgers"
                                             imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-12-copyright-890x664.jpg"/>
                    </div>
                    <div className={styles.imageColumn}>
                        <CollageProductItems productName="Spicy Tomato Sauce" category="Burgers"
                                             imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-11-copyright-890x664.jpg"/>
                        <CollageProductItems productName="Hot French Fries" category="Burgers"
                                             imageUrl="https://easyeat.ancorathemes.com/wp-content/uploads/2017/05/img-13-copyright-890x664.jpg"/>
                    </div>
                </div>

                {/*OUR MENU SECTION*/}
                <section className={styles.ourMenuSection}>
                    <div className={styles.ourMenuContent}>
                        <div className={styles.ourMenuHeading}>
                            <p>Our Menu</p>
                            <span>YOUR ONE-STOP BURGER SHOP</span>
                            <CaretDoubleDown/>
                        </div>
                        <div className={styles.ourMenuContainer}>
                            <div className={styles.ourMenuColumn}>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            CLASSIC JUICY CHEESEBURGER
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $12.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            MUSHROOM SWISS BURGER

                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $10.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            BUFFALO CHICKEN BURGER
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $14.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            SOUTHWEST CHICKEN BURGER
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $10.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            PHILLY CHEESESTEAK BURGER
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $12.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ourMenuColumn}>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            LOADED GUACAMOLE BURGER
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $16.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            TERIYAKI PINEAPPLE BURGER
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $12.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            DOUBLE BACON CHEESEBURGER
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $16.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            DOUBLE CHEESEBURGER MELT
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $14.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                                <div className={styles.ourMenuColumnItem}>
                                    <div className={styles.ourMenuRow}>
                                        <a href="#" className={styles.ourMenuDetails}>
                                            BLACKENED CHICKEN BURGER
                                        </a>
                                        <div className={styles.ourMenuItemDots}>
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                                            . . . . . . . . . . . . . . . . . . . . .
                                        </div>
                                        <div className={styles.ourMenuDetails}>
                                            $12.00
                                        </div>
                                    </div>
                                    <div className={styles.ourMenuItemDescription}>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/*LATEST NEWS SECTION WITH SLIDER*/}
                <section className={styles.latestNewsSection}>

                </section>
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
    )
}
