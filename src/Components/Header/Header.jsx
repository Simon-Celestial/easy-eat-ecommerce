import styles from "./Header.module.scss";
import {MagnifyingGlass, ShoppingBag, X} from "@phosphor-icons/react";
import {NavMenuItems} from "./HeaderComponents/NavMenuItems.jsx";
import {useCallback, useEffect, useState} from "react";


export const Header = () => {
    const [basketOpen, setBasketOpen] = useState(false);

    const handleBasketOpen = useCallback((ev) => {
            ev.stopPropagation();
            setBasketOpen(true);
        }, []);
    const handleBasketClose = () => {
        setBasketOpen(false);
    };

    useEffect(() => {
        const action = () => {
            handleBasketClose();
        }
        document.addEventListener("click", action);
        return () => {
            document.removeEventListener("click", action);
        };
    }, []);




    const menuItems = [
        {
            id: 1,
            drop: true,
            label: "Home",
            link: "/",
            item1: "Burger Shop",
            item2: "Steakhouse & Grill",
            item3: "Pizzeria",
            item4: "Food Truck",
            item5: "Indian Restaurant",
            item6: "Thai Food",
            item7: "Coffee Bar",
        },
        {
            id: 2,
            drop: true,
            toolsDrop: true,
            label: "Pages",
            link: "/",
            item1: "About US",
            item2: "FAQs",
            item3: "Menu",
            item4: "Our Services",
            item5: "Our Team",
            item6: "Pricing",
            item7: "Tools",
        },
        {
            id: 3,
            drop: true,
            singlePost: true,
            label: "Blog ",
            link: "/",
            item1: "Standard",
            item2: "List",
            item3: "Portfolio",
            item4: "Grid",
            item5: "Single Post",
        },
        {
            id: 4,
            drop: true,
            label: "Shop",
            link: "/",
            item1: "Product List",
            item2: "Product Single",
            item3: "Cart",
            item4: "Checkout",
            item5: "Wishlist Page",
        },
        {
            id: 5,
            drop: false,
            label: "Contacts",
            link: "/",
        },
    ];
    return (
        <header className={styles.siteHeader}>
            <section className={styles.headerContent}>

                {/*HEADER SEARCH CONTAINER*/}
                <div className={styles.headerSearchWrapper}>
                    <div className={styles.headerSearchContent}>
                        <div className={styles.searchTopBlock}>
                            <img src="//easyeat.ancorathemes.com/wp-content/uploads/2023/01/logo-small-inverse.png" alt="EasyEat"/>
                            <div className={styles.closeSearch}>
                                <X />
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.headerLeft}>
                    <a href="/" className={styles.headerLogo}>
                        <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/logo-inverse.png"
                             alt="Header Logo"/>
                    </a>
                    <div className={styles.headerNavigation}>
                        {menuItems.map((items) => (
                            <NavMenuItems key={items.id} items={items}/>
                        ))}
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerRightItem}>
                        <div className={styles.basketCount}>0</div>
                        <div onClick={handleBasketOpen}>
                            <ShoppingBag size={28}/>
                        </div>

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
                    <div className={styles.headerRightItem}>
                        <MagnifyingGlass size={28}/>
                    </div>
                    <div className={styles.headerRightItem}>
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
                </div>

            </section>
        </header>
    );
};
