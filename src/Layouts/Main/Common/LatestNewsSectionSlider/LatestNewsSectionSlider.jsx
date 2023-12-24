import React, {useState, useEffect, useMemo} from 'react';
import styles from "./LatestNewsSectionSlider.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "./pagination.scss";
import {Pagination} from "swiper/modules";
import {CaretLeft, CaretRight, Dot} from "@phosphor-icons/react";

export const LatestNewsSectionSlider = () => {



    const [slidesPerView, setSlidesPerView] = useState(3);

    const handleResize = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth <= 570) {
            setSlidesPerView(1);
        } else if (windowWidth <= 1200) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(3);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    const [hoverActive, setHoverActive] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [lastUpdated, setLastUpdated] = useState(0);
    const updateThreshold = 50;
    console.log(hoverActive)
    const handleMouseEnter = () => {
        setHoverActive(true);
    };

    const handleMouseLeave = () => {
        setHoverActive(false);
    };

    const handleMouseMove = (e) => {
        const currentTime = new Date().getTime();
        if (currentTime - lastUpdated >= updateThreshold) {
            setPosition({x: e.clientX, y: e.clientY});
            setLastUpdated(currentTime);
        }
    };
    const buttonStyle = hoverActive
        ? {top: `${position.y}px`, left: `${position.x}px`, position: 'fixed', display: "flex"}
        : {};

    const cursor = useMemo(() => (
            <div className={styles.customCursor} style={buttonStyle}>
                <CaretLeft weight="bold"/>
                <CaretRight weight="bold"/>
            </div>)
        , [buttonStyle])
    return (
        <section className={styles.latestNewsSection}
        >
            {/*CUSTOM CURSOR*/}
            {cursor}
            <div className={styles.latestNewsContent}>
                <div className={styles.latestNewsHeading}>
                    <p>BLOG & ARTICLES</p>
                    <h2>LATEST NEWS</h2>
                </div>
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={styles.latestNewsSlider}>
                    <Swiper
                        className={styles.swiperWrapper}
                        slidesPerView={slidesPerView}
                        spaceBetween={30}
                        loop={true}
                        pagination={true}
                        modules={[Pagination]}
                    >
                        <SwiperSlide className={styles.swiperCard}>
                            <div className={styles.productCardWrapper}>
                                <a href="https://easyeat.ancorathemes.com/what-is-the-difference-between-hamburgers-burgers/">
                                    <div className={styles.productImageBox}>
                                        <img
                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/04/img-113-copyright-890x664.jpg"
                                            alt="Product"/>
                                    </div>
                                </a>
                                <div className={styles.snacksPageTransfer}>
                                    <a href="https://easyeat.ancorathemes.com/category/food/snacks/">Snacks</a>
                                </div>
                                <div className={styles.factsPageTransfer}>
                                    <a href="https://easyeat.ancorathemes.com/what-is-the-difference-between-hamburgers-burgers/">What
                                        is the Difference Between Hamburgers &amp; Burgers?</a>
                                </div>
                                <div className={styles.dateAndCommentsBlock}>
                                    <div className={styles.dateBlock}>
                                        <a href="https://easyeat.ancorathemes.com/what-is-the-difference-between-hamburgers-burgers/">April
                                            21, 2020</a>
                                    </div>
                                    <Dot/>
                                    <div className={styles.commentBlock}>
                                        <a href="https://easyeat.ancorathemes.com/what-is-the-difference-between-hamburgers-burgers/#respond">
                                            <span>0</span>
                                            <span>Comments</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperCard}>
                            <div className={styles.productCardWrapper}>
                                <a href="https://easyeat.ancorathemes.com/10-the-most-unusual-ways-to-serve-burgers-in-restaurants/">
                                    <div className={styles.productImageBox}>
                                        <img
                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/02/img-82-copyright-890x664.jpg"
                                            alt="Product"/>
                                    </div>
                                </a>
                                <div className={styles.snacksPageTransfer}>
                                    <a href="https://easyeat.ancorathemes.com/category/food/snacks/">Snacks</a>
                                </div>
                                <div className={styles.factsPageTransfer}>
                                    <a href="https://easyeat.ancorathemes.com/10-the-most-unusual-ways-to-serve-burgers-in-restaurants/">10
                                        The Most Unusual Ways to Serve Burgers in Restaurants</a>
                                </div>
                                <div className={styles.dateAndCommentsBlock}>
                                    <div className={styles.dateBlock}>
                                        <a href="https://easyeat.ancorathemes.com/10-the-most-unusual-ways-to-serve-burgers-in-restaurants/">April
                                            21, 2020</a>
                                    </div>
                                    <Dot/>
                                    <div className={styles.commentBlock}>
                                        <a href="https://easyeat.ancorathemes.com/10-the-most-unusual-ways-to-serve-burgers-in-restaurants/#respond">
                                            <span>0</span>
                                            <span>Comments</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperCard}>
                            <div className={styles.productCardWrapper}>
                                <a href="https://easyeat.ancorathemes.com/how-to-make-the-perfect-french-fries-with-sauce-at-home/">
                                    <div className={styles.productImageBox}>
                                        <img
                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/02/img-87-copyright-890x664.jpg"
                                            alt="Product"/>
                                    </div>
                                </a>
                                <div className={styles.snacksPageTransfer}>
                                    <a href="https://easyeat.ancorathemes.com/category/food/snacks/">Snacks</a>
                                </div>
                                <div className={styles.factsPageTransfer}>
                                    <a href="https://easyeat.ancorathemes.com/how-to-make-the-perfect-french-fries-with-sauce-at-home/">How
                                        to Make the Perfect French Fries With Sauce at Home?</a>
                                </div>
                                <div className={styles.dateAndCommentsBlock}>
                                    <div className={styles.dateBlock}>
                                        <a href="https://easyeat.ancorathemes.com/how-to-make-the-perfect-french-fries-with-sauce-at-home/">April
                                            21, 2020</a>
                                    </div>
                                    <Dot/>
                                    <div className={styles.commentBlock}>
                                        <a href="https://easyeat.ancorathemes.com/how-to-make-the-perfect-french-fries-with-sauce-at-home/#respond">
                                            <span>0</span>
                                            <span>Comments</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={styles.swiperCard}>
                            <div className={styles.productCardWrapper}>
                                <a href="https://easyeat.ancorathemes.com/secret-sauce-creating-the-ultimate-burger-sauce-at-home/">
                                    <div className={styles.productImageBox}>
                                        <img
                                            src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/02/img-64-copyright-890x664.jpg"
                                            alt="Product"/>
                                    </div>
                                </a>
                                <div className={styles.snacksPageTransfer}>
                                    <a href="https://easyeat.ancorathemes.com/category/food/snacks/">Snacks</a>
                                </div>
                                <div className={styles.factsPageTransfer}>
                                    <a href="https://easyeat.ancorathemes.com/secret-sauce-creating-the-ultimate-burger-sauce-at-home/">Secret
                                        Sauce: Creating the Ultimate Burger Sauce at Home</a>
                                </div>
                                <div className={styles.dateAndCommentsBlock}>
                                    <div className={styles.dateBlock}>
                                        <a href="https://easyeat.ancorathemes.com/secret-sauce-creating-the-ultimate-burger-sauce-at-home/">April
                                            16, 2020</a>
                                    </div>
                                    <Dot/>
                                    <div className={styles.commentBlock}>
                                        <a href="https://easyeat.ancorathemes.com/secret-sauce-creating-the-ultimate-burger-sauce-at-home/#respond">
                                            <span>0</span>
                                            <span>Comments</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    );
};
