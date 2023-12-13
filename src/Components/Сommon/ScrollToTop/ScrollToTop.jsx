import React, {useState, useEffect, useCallback} from 'react';
import { ArrowUp } from "@phosphor-icons/react";
import styles from "./ScrolltoTop.module.scss";

const ScrollToTop = () => {
    const [scrollToTopState, setScrollToTopState] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = useCallback(() => {
        if (window.scrollY > 250) {
            setScrollToTopState(true);
        } else if (window.scrollY <= 250) {
            setScrollToTopState(false);
        }
    }, [scrollToTopState]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollToTopState]);

    return (
        <button onClick={scrollToTop} className={`${styles.scrollToTop} ${scrollToTopState && styles.scrollToTopActive}`}>
            <ArrowUp size={20} weight="bold" color="white" />
        </button>
    );
};

export default ScrollToTop;
