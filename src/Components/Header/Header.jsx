import styles from "./Header.module.scss";
import {CaretRight, MagnifyingGlass, ShoppingBag, X} from "@phosphor-icons/react";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBasketball} from "@fortawesome/free-solid-svg-icons";
import {LayoutContext} from "../../Context/LayoutContext/LayoutContext.jsx";


export const Header = () => {
    const {
        mobileMenuOpen,
        setMobileMenuOpen,
        headerTransform,
        setHeaderTransform,
        handleWidgetOpen,
        handleWidgetClose,
        openHandler,
    } = useContext(LayoutContext);

    const handleHeaderTransform = useCallback(() => {
        if (window.scrollY > 650 && window.innerWidth > 1200) {
            setHeaderTransform(true);
        } else if (window.scrollY <= 650 || window.innerWidth < 1200) {
            setHeaderTransform(false);
        }
    }, [setHeaderTransform]);

    useEffect(() => {
        window.addEventListener('scroll', handleHeaderTransform);
        return () => {
            window.removeEventListener('scroll',handleHeaderTransform);
        };
    }, [setHeaderTransform]);

    // STATES TO OPEN AND CLOSE WIDGETS
    const [dropDownHomeOpen, setDropDownHomeOpen] = useState(false);
    const [dropDownPagesOpen, setDropDownPagesOpen] = useState(false);
    const [dropDownBlogOpen, setDropDownBlogOpen] = useState(false);
    const [dropDownShopOpen, setDropDownShopOpen] = useState(false);
    const [dropDownToolsOpen, setDropDownToolsOpen] = useState(false);
    const [dropDownPostOpen, setDropDownPostOpen] = useState(false);
    const [basketOpen, setBasketOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [rightMenuOpen, setRightMenuOpen] = useState(false);



    // useEffect CLOSE WIDGETS WHEN CLICKING OUTSIDE THE WIDGET AREA
    useEffect(() => {
        const action = () => {
            handleWidgetClose(setBasketOpen);
            handleWidgetClose(setSearchOpen);
            handleWidgetClose(setRightMenuOpen);
        }
        document.addEventListener("click", action);
        return () => {
            document.removeEventListener("click", action);
        };
    }, []);


    return (
        // HEADER WRAPPER
        <header className={`${styles.siteHeader} ${headerTransform && styles.headerTransformActive}`}>

            <section className={styles.headerContent}>
                {/*HEADER RIGHT MENU*/}
                <div className={`${styles.rightMenuWrapper} ${rightMenuOpen && styles.rightMenuActive}`}
                     onClick={ev => ev.stopPropagation()}>
                    <div className={styles.rightMenuContent}>
                        <div className={styles.rightMenuHeader}>
                            <a href="/">
                            <img src="//easyeat.ancorathemes.com/wp-content/uploads/2023/01/logo-small-inverse.png"
                                 alt="Easy Eat"/>
                            </a>
                            <div className={styles.closeRightMenu} onClick={openHandler(setRightMenuOpen)}>
                                <X/>
                            </div>
                        </div>
                        <div className={styles.rightMenuSocial}>
                            <a href="https://www.facebook.com/AncoraThemes" target={"_blank"}>
                                <FontAwesomeIcon icon={faFacebookF}/>
                                <p>Facebook</p>
                            </a>
                            <a href="https://twitter.com/themes_ancora" target={"_blank"}>
                                <FontAwesomeIcon icon={faTwitter}/>
                                <p>Twitter</p>
                            </a>
                            <a href="https://dribbble.com/AncoraThemes" target={"_blank"}>
                                <FontAwesomeIcon icon={faBasketball}/>
                                <p>Dribble</p>
                            </a>
                            <a href="https://www.instagram.com/ancora_themes" target={"_blank"}>
                                <FontAwesomeIcon icon={faInstagram}/>
                                <p>Instagram</p>
                            </a>
                        </div>
                        <div className={styles.rightMenuFooter}>
                            <a href="tel:+18408412569" target="_blank">+1 840 841 25 69</a>
                            <a href="mailto:info@email.com" target="_blank">info@email.com</a>
                        </div>
                    </div>
                </div>

                {/*HEADER SEARCH CONTAINER*/}
                <div className={`${styles.headerSearchWrapper} ${searchOpen && styles.headerSearchActive}`}
                     onClick={ev => ev.stopPropagation()}>
                    <div className={`${styles.headerSearchContent} ${searchOpen && styles.headerSearchContentActive}`}>
                        <div className={styles.searchTopBlock}>
                            <img src="//easyeat.ancorathemes.com/wp-content/uploads/2023/01/logo-small-inverse.png"
                                 alt="EasyEat"/>
                            <div onClick={openHandler(setSearchOpen)} className={styles.closeSearch}>
                                <X/>
                            </div>
                        </div>
                        <div className={styles.headerFormWrapper}>
                            <form role="search" method="get" action="https://easyeat.ancorathemes.com/">
                                <input type="text" className={styles.headerSearchInput}
                                       placeholder="Type words and hit enter"/>
                                <button type="submit" className={styles.searchSubmit}>
                                    <MagnifyingGlass size={32}/>
                                </button>
                            </form>

                        </div>

                    </div>
                </div>

                {/*HEADER CONTENT*/}
                <div className={styles.headerLeft}>
                    <a href="/" className={styles.headerLogo}>
                        <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/logo-inverse.png"
                             alt="Header Logo"/>
                    </a>
                    {/*HEADER NAVIGATION*/}
                    <div className={styles.headerNavigation}>
                        {/*HEADER NAVIGATION ITEMS*/}
                        <div className={styles.navigationItems} onMouseEnter={openHandler(setDropDownHomeOpen)}
                             onMouseLeave={openHandler(setDropDownHomeOpen)}>
                            <a href="#" className={styles.pageLink}>Home</a>
                            <div
                                className={`${styles.navDropdownWrapper} ${dropDownHomeOpen && styles.navDropdownActive}`}>
                                <div className={styles.navDropdown}>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Burger Shop</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Steakhouse & Grill</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Pizzeria</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Food Truck</p>
                                        </a>
                                    </div>
                                    <div
                                        className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Indian Restaurant</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}>
                                        <a href="#">
                                            <p>Thai Food</p>
                                        </a>
                                    </div>
                                    <div
                                        className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Coffee Bar</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navigationItems} onMouseEnter={openHandler(setDropDownPagesOpen)}
                             onMouseLeave={openHandler(setDropDownPagesOpen)}>
                            <a href="#" className={styles.pageLink}>Pages</a>
                            <div
                                className={`${styles.navDropdownWrapper} ${dropDownPagesOpen && styles.navDropdownActive}`}>
                                <div className={styles.navDropdown}>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>About Us</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>FAQs</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Menu</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Our Services</p>
                                        </a>
                                    </div>
                                    <div
                                        className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Our Team</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}>
                                        <a href="#">
                                            <p>Pricing</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                         onMouseEnter={openHandler(setDropDownToolsOpen)}
                                         onMouseLeave={openHandler(setDropDownToolsOpen)}>
                                        <a href="#">
                                            <p>Tools</p>
                                        </a>
                                        <CaretRight size={14} color="gray" weight="bold"/>
                                        <div
                                            className={`${styles.subMenuDropdown} ${dropDownToolsOpen && styles.submenuActive}`}>
                                            <div className={styles.subMenuContent}>
                                                <div className={styles.navDropdownItem}>
                                                    <a href="#">
                                                        Typography
                                                    </a>
                                                </div>
                                                <div className={styles.navDropdownItem}>
                                                    <a href="#">
                                                        <p>404 Page</p>
                                                    </a>
                                                </div>
                                                <div className={styles.navDropdownItem}>
                                                    <a href="#">
                                                        <p>Service Plus</p>
                                                    </a>
                                                </div>
                                                <div className={styles.navDropdownItem}>
                                                    <a href="#">
                                                        <p>Newsletter Popups</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navigationItems} onMouseEnter={openHandler(setDropDownBlogOpen)}
                             onMouseLeave={openHandler(setDropDownBlogOpen)}>
                            <a href="#" className={styles.pageLink}>Blog</a>
                            <div
                                className={`${styles.navDropdownWrapper} ${dropDownBlogOpen && styles.navDropdownActive}`}>
                                <div className={styles.navDropdown}>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Standard</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>List</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Portfolio</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Grid</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                         onMouseEnter={openHandler(setDropDownPostOpen)}
                                         onMouseLeave={openHandler(setDropDownPostOpen)}>
                                        <a href="#">
                                            <p>Single Post</p>
                                        </a>
                                        <CaretRight size={14} color="gray" weight="bold"/>
                                        <div
                                            className={`${styles.subMenuDropdown}  ${dropDownPostOpen && styles.submenuActive}`}>
                                            <div className={styles.subMenuContent}>
                                                <div className={styles.navDropdownItem}>
                                                    <a href="#">
                                                        Standard
                                                    </a>
                                                </div>
                                                <div className={styles.navDropdownItem}>
                                                    <a href="#">
                                                        With Sidebar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navigationItems} onMouseEnter={openHandler(setDropDownShopOpen)}
                             onMouseLeave={openHandler(setDropDownShopOpen)}>
                            <a href="#" className={styles.pageLink}>Shop</a>
                            <div
                                className={`${styles.navDropdownWrapper} ${dropDownShopOpen && styles.navDropdownActive}`}>
                                <div className={styles.navDropdown}>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Product List</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Product Single</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Cart</p>
                                        </a>
                                    </div>
                                    <div className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Checkout</p>
                                        </a>
                                    </div>
                                    <div
                                        className={styles.navDropdownItem}
                                    >
                                        <a href="#">
                                            <p>Wishlist Page</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.navigationItems}>
                            <a href="#" className={styles.pageLink}>Contacts</a>
                        </div>
                    </div>
                </div>
                {/*HEADER RIGHT CONTAINER*/}
                <div className={styles.headerRight}>
                    <div className={styles.headerRightItem}>
                        <div className={styles.basketCount}>0</div>
                        <div onClick={handleWidgetOpen(setBasketOpen)}>
                            <ShoppingBag size={28}/>
                        </div>
                        {/*BASKET */}
                        <div
                            className={[styles.basketDropdown, basketOpen && styles.basketActive].join(' ')}
                            onClick={ev => ev.stopPropagation()}
                        >
                            {/*<div className={styles.emptyBasket}>*/}
                            {/*    <ShoppingBag size={32} weight="bold" color="white" />*/}
                            {/*    <h1>No products in the cart.</h1>*/}
                            {/*</div>*/}
                            <div className={styles.basketProducts}>
                                <div className={styles.basketCard}>
                                    <div className={styles.basketClose}>
                                        <p>x</p>
                                    </div>
                                    <a href="" className={styles.imageBlock}>
                                        <img
                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"
                                            alt="Product"/>
                                    </a>
                                    <div className={styles.basketCardTitle}>
                                        <h2>Black Burger</h2>
                                        <p>1 x $89.00</p>
                                    </div>

                                </div>
                                <div className={styles.basketCard}>
                                    <div className={styles.basketClose}>
                                        <p>x</p>
                                    </div>
                                    <a href="" className={styles.imageBlock}>
                                        <img
                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"
                                            alt="Product"/>
                                    </a>
                                    <div className={styles.basketCardTitle}>
                                        <h2>Black Burger</h2>
                                        <p>1 x $89.00</p>
                                    </div>
                                </div>
                                <div className={styles.basketCard}>
                                    <div className={styles.basketClose}>
                                        <p>x</p>
                                    </div>
                                    <a href="" className={styles.imageBlock}>
                                        <img
                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"
                                            alt="Product"/>
                                    </a>
                                    <div className={styles.basketCardTitle}>
                                        <h2>Black Burger</h2>
                                        <p>1 x $89.00</p>
                                    </div>

                                </div>
                                <div className={styles.basketCard}>
                                    <div className={styles.basketClose}>
                                        <p>x</p>
                                    </div>
                                    <a href="" className={styles.imageBlock}>
                                        <img
                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"
                                            alt="Product"/>
                                    </a>
                                    <div className={styles.basketCardTitle}>
                                        <h2>Black Burger</h2>
                                        <p>1 x $89.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.basketFooter}>
                                <div className={styles.basketSubtotal}>
                                    <p>SUBTOTAL: $254.00</p>
                                </div>
                                <div className={styles.basketButtons}>
                                    <a href="/" className={styles.btn}>VIEW CART</a>
                                    <a href="/" className={styles.btn}>CHECKOUT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.headerRightItem} onClick={handleWidgetOpen(setSearchOpen)}>
                        <MagnifyingGlass size={28}/>
                    </div>
                    <div className={styles.headerRightItem} onClick={handleWidgetOpen(setRightMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                            <g transform="translate(-2124 -2665)">
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2124 2665)"></path>
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2132 2665)"></path>
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2140 2665)"></path>
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2124 2673)"></path>
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2132 2673)"></path>
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2140 2673)"></path>
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2124 2681)"></path>
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2132 2681)"></path>
                                <path
                                    d="M2.5,1.5a1,1,0,1,0,1,1,1,1,0,0,0-1-1M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z"
                                    transform="translate(2140 2681)"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.mobileMenuBtn} onClick={openHandler(setMobileMenuOpen)}>
                        <div className={styles.mobileBtnStick}></div>
                        <div className={styles.mobileBtnStick}></div>
                        <div className={styles.mobileBtnStick}></div>
                    </div>

                </div>
            </section>
        </header>
    );
};




