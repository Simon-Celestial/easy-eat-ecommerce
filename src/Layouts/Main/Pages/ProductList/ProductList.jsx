import styles from "./ProductList.module.scss";
import React, {useContext, useEffect, useState} from 'react'
import {Footer} from "../../Components/Footer/Footer.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Header} from "../../Components/Header/Header.jsx";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {ArrowRight, DotOutline, Heart, MagnifyingGlass, ShoppingCart, Star, X} from "@phosphor-icons/react";
import RangeSlider from "../../Common/RangeSlider/RangeSlider.jsx";

export const ProductList = () => {
    const {
        setHeaderColorChange,
        setBasketVisible,
    } = useContext(LayoutContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);

    const [bounds, setBounds] = useState([0, 260]);

    return (
        <div className={styles.productListWrapper}>
            {/*HEADER*/}
            <Header/>
            <main className={styles.productListMain}>
                <PageNameSection title="Shop"/>
                {/*ALL PRODUCTS SECTION*/}
                <section className={styles.allProductsSection}>
                    <div className={styles.allProductsContent}>
                        <div className={styles.leftBlockProducts}>
                            <div className={styles.leftBlockSorting}>
                                <p>Showing 1–6 of 33 results</p>
                                <form method="get" className={styles.selectionBlock}>
                                    <select name="sorting">
                                        <option value="popularity" selected="selected">Sort by popularity</option>
                                        <option value="rating">Sort by average rating</option>
                                        <option value="date">Sort by latest</option>
                                        <option value="price">Sort by price: low to high</option>
                                        <option value="price-reverse">Sort by price: high to low</option>
                                    </select>
                                </form>

                            </div>
                            <div className={styles.leftAllProducts}>
                                {/*TO ADD SALE PRICE WRITE IT IN SPAN INSIDE P*/}
                                {/*TO ADD SALE MARK ADD productOnSale class div*/}
                                {/*TO ADD OUT OF STOCK ADD outOfStock class div*/}
                                <div className={styles.productCard}>
                                    <div className={styles.outOfStock}>
                                        Out of Stock
                                    </div>
                                    <div className={styles.productImage}>
                                        <div className={styles.productOptions}>
                                            <a href="">
                                                <Heart/>
                                            </a>
                                            <a href="">
                                                <ShoppingCart/>
                                            </a>
                                            <a href="">
                                                <ArrowRight/>
                                            </a>
                                        </div>
                                        <a href="#">
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-1024x1024.png"
                                                alt="Product"/>
                                        </a>
                                    </div>
                                    <div className={styles.productTitle}>
                                        <a href="#">
                                            Chicken Burger
                                        </a>
                                        <p>
                                            {/*<span>discounted price</span>*/}
                                            $165.00</p>
                                        <div className={styles.productRating}>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>

                                        </div>
                                    </div>

                                </div>
                                <div className={styles.productCard}>
                                    <div className={styles.productOnSale}>
                                        10%
                                    </div>
                                    <div className={styles.productImage}>
                                        <div className={styles.productOptions}>
                                            <a href="">
                                                <Heart/>
                                            </a>
                                            <a href="">
                                                <ShoppingCart/>
                                            </a>
                                            <a href="">
                                                <ArrowRight/>
                                            </a>
                                        </div>
                                        <a href="#">
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"
                                                alt="Product"/>
                                        </a>
                                    </div>
                                    <div className={styles.productTitle}>
                                        <a href="#">
                                            Black Burger
                                        </a>
                                        <p>
                                            <span>$99.00</span>
                                            $89.00</p>
                                        <div className={styles.productRating}>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>

                                        </div>
                                    </div>

                                </div>
                                <div className={styles.productCard}>
                                    <div className={styles.productImage}>
                                        <div className={styles.productOptions}>
                                            <a href="">
                                                <Heart/>
                                            </a>
                                            <a href="">
                                                <ShoppingCart/>
                                            </a>
                                            <a href="">
                                                <ArrowRight/>
                                            </a>
                                        </div>
                                        <a href="#">
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-1024x1024.png"
                                                alt="Product"/>
                                        </a>
                                    </div>
                                    <div className={styles.productTitle}>
                                        <a href="#">
                                            Chicken Burger
                                        </a>
                                        <p>
                                            {/*<span>discounted price</span>*/}
                                            $165.00</p>
                                        <div className={styles.productRating}>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>

                                        </div>
                                    </div>

                                </div>
                                <div className={styles.productCard}>
                                    <div className={styles.productImage}>
                                        <div className={styles.productOptions}>
                                            <a href="">
                                                <Heart/>
                                            </a>
                                            <a href="">
                                                <ShoppingCart/>
                                            </a>
                                            <a href="">
                                                <ArrowRight/>
                                            </a>
                                        </div>
                                        <a href="#">
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-1024x1024.png"
                                                alt="Product"/>
                                        </a>
                                    </div>
                                    <div className={styles.productTitle}>
                                        <a href="#">
                                            Chicken Burger
                                        </a>
                                        <p>
                                            {/*<span>discounted price</span>*/}
                                            $165.00</p>
                                        <div className={styles.productRating}>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>

                                        </div>
                                    </div>

                                </div>
                                <div className={styles.productCard}>
                                    <div className={styles.productImage}>
                                        <div className={styles.productOptions}>
                                            <a href="">
                                                <Heart/>
                                            </a>
                                            <a href="">
                                                <ShoppingCart/>
                                            </a>
                                            <a href="">
                                                <ArrowRight/>
                                            </a>
                                        </div>
                                        <a href="#">
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-1024x1024.png"
                                                alt="Product"/>
                                        </a>
                                    </div>
                                    <div className={styles.productTitle}>
                                        <a href="#">
                                            Chicken Burger
                                        </a>
                                        <p>
                                            {/*<span>discounted price</span>*/}
                                            $165.00</p>
                                        <div className={styles.productRating}>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>

                                        </div>
                                    </div>

                                </div>
                                <div className={styles.productCard}>
                                    <div className={styles.productImage}>
                                        <div className={styles.productOptions}>
                                            <a href="">
                                                <Heart/>
                                            </a>
                                            <a href="">
                                                <ShoppingCart/>
                                            </a>
                                            <a href="">
                                                <ArrowRight/>
                                            </a>
                                        </div>
                                        <a href="#">
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-1024x1024.png"
                                                alt="Product"/>
                                        </a>
                                    </div>
                                    <div className={styles.productTitle}>
                                        <a href="#">
                                            Chicken Burger
                                        </a>
                                        <p>
                                            {/*<span>discounted price</span>*/}
                                            $165.00</p>
                                        <div className={styles.productRating}>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>
                                            <Star weight="fill"/>

                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div className={styles.leftAllProductsPagination}>
                                <div className={styles.paginationItem}>
                                    1
                                </div>
                                <div className={styles.paginationItem}>
                                    2
                                </div>
                                <div className={styles.paginationItem}>
                                    3
                                </div>
                                <div className={styles.paginationItem}>
                                    4
                                </div>
                                <div className={styles.paginationItem}>
                                    5
                                </div>
                                <div className={styles.paginationItem}>
                                    6
                                </div>
                                <div className={styles.paginationItem}>
                                    <ArrowRight/>
                                </div>

                            </div>

                        </div>
                        <div className={styles.rightBlockFilter}>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Cart</p>
                                </div>
                                <div className={styles.rightBasketContent}>
                                    {/*EMPTY BASKET*/}
                                    {/*<div className={styles.emptyBasket}>*/}
                                    {/*    <p>No products in the cart.</p>*/}
                                    {/*</div>*/}
                                    <div className={styles.rightBasketProducts}>
                                        <div className={styles.productsCards}>
                                            <div className={styles.productCard}>
                                                <div className={styles.deleteProduct}>
                                                    <X/>
                                                </div>
                                                <div className={styles.productImage}>
                                                    <a href="#">
                                                        <img
                                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/02/product-18-copyright-480x480.png"
                                                            alt="Product"/>
                                                    </a>
                                                </div>
                                                <div className={styles.productTitle}>
                                                    <a href="#">Veggie Pizza</a>
                                                    <p>2 × $13.00</p>
                                                </div>
                                            </div>
                                            <div className={styles.productCard}>
                                                <div className={styles.deleteProduct}>
                                                    <X/>
                                                </div>
                                                <div className={styles.productImage}>
                                                    <a href="#">
                                                        <img
                                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/02/product-18-copyright-480x480.png"
                                                            alt="Product"/>
                                                    </a>
                                                </div>
                                                <div className={styles.productTitle}>
                                                    <a href="#">Veggie Pizza</a>
                                                    <p>2 × $13.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.productSubtotal}>
                                            <span>Subtotal: <p>$26.00</p></span>
                                        </div>
                                        <div className={styles.cartOperations}>
                                            <a href="#">View Cart</a>
                                            <a href="#">Checkout</a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Search</p>
                                </div>
                                <form className={styles.rightSearchContent}>
                                    <button><MagnifyingGlass weight="light"/></button>

                                    <input type="text" placeholder="Search for products ..."/>
                                </form>


                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Availability</p>
                                </div>
                                <div className={styles.availabilityContent}>
                                    <div className={styles.availabilityItem}>
                                        <input type="checkbox"/>
                                        In Stock
                                        <span>(23)</span>

                                    </div>
                                    <div className={styles.availabilityItem}>
                                        <input type="checkbox"/>
                                        Out of Stock
                                        <span>(11)</span>
                                    </div>

                                </div>

                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Categories</p>
                                </div>
                                <div className={styles.rightCategoriesContent}>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            Burgers & Panini
                                        </a>
                                        <span>(4)</span>
                                    </div>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            Hot Dogs & Snacks
                                        </a>
                                        <span>(4)</span>
                                    </div>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            Meat & Fish
                                        </a>
                                        <span>(3)</span>
                                    </div>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            Pizzas & Pastas
                                        </a>
                                        <span>(4)</span>
                                    </div>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            Popular Dishes
                                        </a>
                                        <span>(6)</span>
                                    </div>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            The Dishes
                                        </a>
                                        <span>(4)</span>
                                    </div>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            Uncategorized
                                        </a>
                                        <span>(0)</span>
                                    </div>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            Vietnamese Coffee
                                        </a>
                                        <span>(5)</span>
                                    </div>
                                    <div className={styles.rightCategoriesItem}>
                                        <a href="#">
                                            <DotOutline weight="fill"/>
                                            Vindaloo
                                        </a>
                                        <span>(3)</span>
                                    </div>
                                </div>


                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Filter</p>
                                </div>
                                <form className={styles.rightFilterContent}>
                                    <RangeSlider
                                        min={0}
                                        max={260}
                                        bounds={bounds}
                                        setBounds={setBounds}
                                    />
                                    <div className={styles.filterPrice}>
                                        Price:
                                        <p>${bounds[0]}</p>
                                        <p>-</p>
                                        <p>${bounds[1]}</p>
                                    </div>
                                    <button type="submit">
                                        Filter
                                    <ArrowRight />
                                    </button>
                                </form>
                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Tags</p>
                                </div>
                                <div className={styles.rightTagsContent}>
                                    <div className={styles.tagItem}>
                                        <a href="#">
                                            Item
                                        </a>
                                    </div>
                                    <div className={styles.tagItem}>
                                        <a href="#">
                                            Sale
                                        </a>
                                    </div>
                                    <div className={styles.tagItem}>
                                        <a href="#">
                                            Simple
                                        </a>
                                    </div>
                                    <div className={styles.tagItem}>
                                        <a href="#">
                                            Special
                                        </a>
                                    </div>
                                    <div className={styles.tagItem}>
                                        <a href="#">
                                            Stock
                                        </a>
                                    </div>
                                    <div className={styles.tagItem}>
                                        <a href="#">
                                            Variable
                                        </a>
                                    </div>
                                </div>
                            </div>
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
