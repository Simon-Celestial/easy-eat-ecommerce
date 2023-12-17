import React, {useContext} from 'react'
import {MagnifyingGlass, X} from "@phosphor-icons/react";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import styles from "./HeaderSearch.module.scss";

export const HeaderSearch = () => {
    const {
        searchOpen,
        setSearchOpen,
        openHandler,
    } = useContext(LayoutContext);
    return (
        <>
            {/*HEADER SEARCH CONTAINER*/}
            <div className={`${styles.headerSearchWrapper} ${searchOpen && styles.headerSearchActive}`} onClick={ev => ev.stopPropagation()}>
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
                                <MagnifyingGlass />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
