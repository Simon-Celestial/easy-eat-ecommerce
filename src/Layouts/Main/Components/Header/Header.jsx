import styles from "./Header.module.scss";
import {CaretRight, MagnifyingGlass, ShoppingBag, X} from "@phosphor-icons/react";
import React, {useCallback, useContext, useEffect, useState} from "react";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser, faKey, faUsers} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


export const Header = () => {
    const {
        setMobileMenuOpen,
        headerTransform,
        setHeaderTransform,
        handleWidgetOpen,
        openHandler,
        basketOpen,
        setBasketOpen,
        setSearchOpen,
        setSideMenuOpen,
        dropDownAccountOpen,
        setDropDownAccountOpen,
        setHeaderColorChange,
        headerColorChange,
    } = useContext(LayoutContext);

    // HEADER COLOR STATE CHANGE
    useEffect(()=> {
        setHeaderColorChange(false);
    },[]);

    const handleHeaderTransform = useCallback(() => {
        if (window.scrollY > 550 && window.innerWidth > 1200) {
            setHeaderTransform(true);
        } else if (window.scrollY <= 550 || window.innerWidth < 1200) {
            setHeaderTransform(false);
        }
    }, [setHeaderTransform]);

    useEffect(() => {
        window.addEventListener('scroll', handleHeaderTransform);
        return () => {
            window.removeEventListener('scroll', handleHeaderTransform);
        };
    }, [setHeaderTransform]);

    // STATES TO OPEN AND LOSE WIDGETS
    const [dropDownHomeOpen, setDropDownHomeOpen] = useState(false);
    const [dropDownPagesOpen, setDropDownPagesOpen] = useState(false);
    const [dropDownBlogOpen, setDropDownBlogOpen] = useState(false);
    const [dropDownShopOpen, setDropDownShopOpen] = useState(false);
    const [dropDownToolsOpen, setDropDownToolsOpen] = useState(false);
    const [dropDownPostOpen, setDropDownPostOpen] = useState(false);

    return (
        // HEADER WRAPPER
        <header className={`${styles.siteHeader} ${headerTransform && styles.headerTransformActive}`}>

            <section className={styles.headerContent}>
                {/*HEADER CONTENT*/}
                <div className={styles.headerLeft}>
                    <Link to="/home" className={styles.headerLogo}>
                        <img src={`${headerColorChange && !headerTransform? "//easyeat.ancorathemes.com/wp-content/uploads/2023/05/logo.png" : "//easyeat.ancorathemes.com/wp-content/uploads/2023/05/logo-inverse.png"}`}
                             alt="Header Logo"/>
                    </Link>
                    {/*HEADER NAVIGATION*/}
                    <div className={styles.headerNavigation}>
                        {/*HEADER NAVIGATION ITEMS*/}
                        <div className={styles.navigationItems} onMouseEnter={openHandler(setDropDownHomeOpen)}
                             onMouseLeave={openHandler(setDropDownHomeOpen)}>
                            <Link to="/home" className={`${styles.pageLink} ${headerColorChange && styles.blackColorActive}`}>Home</Link>
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
                            <a href="#" className={`${styles.pageLink} ${headerColorChange && styles.blackColorActive}`}>Pages</a>
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
                            <a href="#" className={`${styles.pageLink} ${headerColorChange && styles.blackColorActive}`}>Blog</a>
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
                            <a href="#" className={`${styles.pageLink} ${headerColorChange && styles.blackColorActive}`}>Shop</a>
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
                            <a href="#" className={`${styles.pageLink} ${headerColorChange && styles.blackColorActive}`}>Contacts</a>
                        </div>
                    </div>
                </div>
                {/*HEADER RIGHT CONTAINER*/}
                <div className={styles.headerRight}>
                    <div className={styles.headerRightItem}>
                        <div className={styles.basketCount}>0</div>
                        <div onClick={handleWidgetOpen(setBasketOpen)}>
                            <ShoppingBag/>
                        </div>
                        {/*BASKET */}
                        <div className={[styles.basketDropdown, basketOpen && styles.basketActive].join(' ')}
                             onClick={ev => ev.stopPropagation()}>
                            <div className={styles.closeBasketBtn} onClick={openHandler(setBasketOpen)}>
                                <X/>
                            </div>
                            <div className={styles.emptyBasket}>
                                <ShoppingBag size={32} weight="bold" color="white"/>
                                <h1>No products in the cart.</h1>
                            </div>
                            {/*<div className={styles.basketContent}>*/}
                            {/*<div className={styles.basketProducts}>*/}
                            {/*    <div className={styles.basketCard}>*/}
                            {/*        <div className={styles.basketClose}>*/}
                            {/*            <p>x</p>*/}
                            {/*        </div>*/}
                            {/*        <a href="" className={styles.imageBlock}>*/}
                            {/*            <img*/}
                            {/*                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"*/}
                            {/*                alt="Product"/>*/}
                            {/*        </a>*/}
                            {/*        <div className={styles.basketCardTitle}>*/}
                            {/*            <h2>Black Burger</h2>*/}
                            {/*            <p>1 × $89.00</p>*/}
                            {/*        </div>*/}

                            {/*    </div>*/}
                            {/*    <div className={styles.basketCard}>*/}
                            {/*        <div className={styles.basketClose}>*/}
                            {/*            <p>x</p>*/}
                            {/*        </div>*/}
                            {/*        <a href="" className={styles.imageBlock}>*/}
                            {/*            <img*/}
                            {/*                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"*/}
                            {/*                alt="Product"/>*/}
                            {/*        </a>*/}
                            {/*        <div className={styles.basketCardTitle}>*/}
                            {/*            <h2>Black Burger</h2>*/}
                            {/*            <p>1 × $89.00</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className={styles.basketCard}>*/}
                            {/*        <div className={styles.basketClose}>*/}
                            {/*            <p>x</p>*/}
                            {/*        </div>*/}
                            {/*        <a href="" className={styles.imageBlock}>*/}
                            {/*            <img*/}
                            {/*                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"*/}
                            {/*                alt="Product"/>*/}
                            {/*        </a>*/}
                            {/*        <div className={styles.basketCardTitle}>*/}
                            {/*            <h2>Black Burger</h2>*/}
                            {/*            <p>1 × $89.00</p>*/}
                            {/*        </div>*/}

                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className={styles.basketFooter}>*/}
                            {/*    <div className={styles.basketSubtotal}>*/}
                            {/*        <p>SUBTOTAL: $254.00</p>*/}
                            {/*    </div>*/}
                            {/*    <div className={styles.basketButtons}>*/}
                            {/*        <a href="/" className={styles.btn}>VIEW CART</a>*/}
                            {/*        <a href="/" className={styles.btn}>CHECKOUT</a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={styles.headerRightItem} onClick={handleWidgetOpen(setDropDownAccountOpen)}>
                        <FontAwesomeIcon icon={faCircleUser}/>
                        <div
                            className={`${styles.accountDropdown} ${dropDownAccountOpen && styles.accountDropdownActive}`}
                            onClick={ev => ev.stopPropagation()}>
                            <Link to="/auth/login">
                                <FontAwesomeIcon icon={faKey}/>
                                LOGIN
                            </Link>
                            <Link to="/auth/register">
                                <FontAwesomeIcon icon={faUsers} />
                                REGISTER
                            </Link>
                        </div>
                    </div>

                    <div className={styles.headerRightItem} onClick={handleWidgetOpen(setSearchOpen)}>
                        <MagnifyingGlass/>
                    </div>
                    <div className={styles.headerRightItem} onClick={handleWidgetOpen(setSideMenuOpen)}>
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




