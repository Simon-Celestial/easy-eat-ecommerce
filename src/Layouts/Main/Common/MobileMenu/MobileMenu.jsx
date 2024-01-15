import React, {useContext, useEffect, useState} from 'react'
import styles from "./MobileMenu.module.scss";
import {ArrowRight, X} from "@phosphor-icons/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightLong,faChevronDown, faCircleUser} from "@fortawesome/free-solid-svg-icons";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {Link} from "react-router-dom";
import {SocialIcons} from "../SocialIcons/SocialIcons.jsx";

export const MobileMenu = () => {

    // FUNCTION FROM CONTEXT TO OPEN AND CLOSE WIDGETS
    const {
        openHandler,
        mobileMenuOpen,
        setMobileMenuOpen,
    } = useContext(LayoutContext);

    // FUNCTION TO CLOSE MOBILE MENU WHEN DISPLAY WIDTH > 1200
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth > 1200) {
                setMobileMenuOpen(false);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    // MOBILE DROPDOWN STATES
    const [mobileHomeDropdown,setMobileHomeDropdown] = useState(false);
    const [mobilePagesDropdown,setMobilePagesDropdown] = useState(false);
    const [mobileBlogDropdown,setMobileBlogDropdown] = useState(false);
    const [mobileShopDropdown,setMobileShopDropdown] = useState(false);
    const [mobileToolsDropdown,setMobileToolsDropdown] = useState(false);
    const [mobilePostDropdown,setMobilePostDropdown] = useState(false);


    return (
        // MOBILE MENU SECTION
        <section className={`${styles.mobileMenuSection} ${mobileMenuOpen && styles.mobileMenuActive}`}>
            <div className={styles.mobileMenuContent}>
                <div className={styles.mobileMenuHeader}>
                    <Link to="/home" className={styles.mobileLogo}>
                        <img src="//easyeat.ancorathemes.com/wp-content/uploads/2023/05/logo-inverse.png"
                             alt="Easy Eat"/>
                    </Link>
                    <div className={styles.closeMobileMenu} onClick={openHandler(setMobileMenuOpen)}>
                        <p>Close</p>
                        <X/>
                    </div>
                </div>
                <div className={styles.mobileMenuMain}>
                    <div className={styles.mobileMenuTitle}>
                        <div className={styles.mobileMenuItems}>
                            {/*HOME*/}
                            <div className={styles.mobileMenuItem} >
                                <p onClick={openHandler(setMobileHomeDropdown)}>HOME
                                    <ArrowRight/>
                                </p>
                                <div className={`${styles.mobileMenuDropdown} ${mobileHomeDropdown && styles.mobileDropdownActive}`}>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Burger Shop</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Steakhouse & Grill</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Pizzeria</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Food Truck</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Indian Restaurant</a>
                                    </div>

                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Thai Food</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Coffee Bar</a>
                                    </div>
                                </div>
                            </div>
                            {/*PAGES*/}
                            <div className={styles.mobileMenuItem} >
                                <p onClick={openHandler(setMobilePagesDropdown)}>PAGES
                                    <ArrowRight/>
                                </p>
                                <div className={`${styles.mobileMenuDropdown} ${mobilePagesDropdown && styles.mobileDropdownActive}`}>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">About Us</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">FAQs</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Menu</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Our Services</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Our Team</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Pricing</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#" onClick={openHandler(setMobileToolsDropdown)}>Tools
                                            <FontAwesomeIcon icon={faChevronDown} style={mobileToolsDropdown && { transform: 'rotate(180deg)' }}/></a>
                                        <div className={`${styles.mobileMenuSubDropdown} ${mobileToolsDropdown && styles.mobileSubDropdownActive}`}>
                                            <div className={styles.mobiMenuSubDropdownItems}>
                                                <a href="#">Typography</a>
                                            </div>
                                            <div className={styles.mobiMenuSubDropdownItems}>
                                                <a href="#">404 Page</a>
                                            </div>
                                            <div className={styles.mobiMenuSubDropdownItems}>
                                                <a href="#">Service Plus</a>
                                            </div>
                                            <div className={styles.mobiMenuSubDropdownItems}>
                                                <a href="#">Newsletter Popups</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*BLOG*/}
                            <div className={styles.mobileMenuItem}>
                                <p onClick={openHandler(setMobileBlogDropdown)}>BLOG
                                    <ArrowRight/>
                                </p>
                                <div className={`${styles.mobileMenuDropdown} ${mobileBlogDropdown && styles.mobileDropdownActive}`}>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Standard</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">List</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Portfolio</a>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#">Grid</a>
                                    </div>

                                    <div className={styles.mobileMenuDropdownItems}>
                                        <a href="#" onClick={openHandler(setMobilePostDropdown)}>Single Post
                                            <FontAwesomeIcon icon={faChevronDown} style={mobilePostDropdown && { transform: 'rotate(180deg)' }} /></a>
                                        <div className={`${styles.mobileMenuSubDropdown} ${mobilePostDropdown && styles.mobileSubDropdownActive}`}>
                                            <div className={styles.mobiMenuSubDropdownItems}>
                                                <a href="#">Standard</a>
                                            </div>
                                            <div className={styles.mobiMenuSubDropdownItems}>
                                                <a href="#">With Sidebar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*SHOP*/}
                            <div className={styles.mobileMenuItem}>
                                <p onClick={openHandler(setMobileShopDropdown)}>SHOP
                                    <ArrowRight/>
                                </p>
                                <div className={`${styles.mobileMenuDropdown} ${mobileShopDropdown && styles.mobileDropdownActive}`}>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <Link to="/shop" >Product List</Link>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <Link to="/cart">Cart</Link>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <Link to="/auth/checkout">Checkout</Link>
                                    </div>
                                    <div className={styles.mobileMenuDropdownItems}>
                                        <Link to="/wishlist">Wishlist Page</Link>
                                    </div>
                                </div>
                            </div>
                            {/*CONTACT*/}
                            <div className={styles.mobileMenuItem}>
                                <Link to="/contact-us">CONTACTS
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mobileMenuFooter}>
                        <SocialIcons />
                    </div>
                </div>
                <div className={styles.mobileMenuSide}>
                    <div className={styles.mobileMenuSideContent}>
                        <div className={styles.mobileMenuSideItems}>
                            <p>Have a project?</p>
                            <a href="mailto:info@website.com">info@website.com</a>
                        </div>
                        <div className={styles.mobileMenuSideItems}>
                            <p>Want to Work With Us?</p>
                            <a href="mailto:info@website.com">info@website.com
                                <FontAwesomeIcon icon={faArrowRightLong}/>
                            </a>
                        </div>
                        <div className={styles.mobileMenuSideItems}>
                            <p>Want to Buy Pastry?</p>
                            <Link to="/shop">Go to Shop
                                <FontAwesomeIcon icon={faArrowRightLong}/>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>


        </section>
    )
}
