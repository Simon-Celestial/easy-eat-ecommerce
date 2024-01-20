import React, {useState, useEffect, useMemo} from 'react';
import styles from "./LatestNewsSectionSlider.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import "./pagination.scss";
import {Pagination} from "swiper/modules";
import {CaretLeft, CaretRight, Dot} from "@phosphor-icons/react";
import sliderData from "../../../../../public/HomePageData/sliderData.json";

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
                        {sliderData.map(data => (
                            <SwiperSlide className={styles.swiperCard} key={data.id}>
                                <div className={styles.productCardWrapper}>
                                    <a href={data.link}>
                                        <div className={styles.productImageBox}>
                                            <img
                                                src={data.imageSrc}
                                                alt="Product"/>
                                        </div>
                                    </a>
                                    <div className={styles.snacksPageTransfer}>
                                        <a href={data.categoryLink}>Snacks</a>
                                    </div>
                                    <div className={styles.factsPageTransfer}>
                                        <a href={data.link}>
                                            {data.title}</a>
                                    </div>
                                    <div className={styles.dateAndCommentsBlock}>
                                        <div className={styles.dateBlock}>
                                            <a href={data.link}>
                                                {data.date}
                                            </a>
                                        </div>
                                        <Dot/>
                                        <div className={styles.commentBlock}>
                                            <a href={data.commentsLink}>
                                                <span>{data.commentsCount}</span>
                                                <span>Comments</span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    );
};
