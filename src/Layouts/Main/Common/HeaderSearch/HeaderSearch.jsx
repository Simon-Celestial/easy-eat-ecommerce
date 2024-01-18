import React, {useContext, useMemo, useState} from 'react'
import {MagnifyingGlass, X} from "@phosphor-icons/react";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import styles from "./HeaderSearch.module.scss";
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";
import {Link} from "react-router-dom";

export const HeaderSearch = () => {
    const {
        searchOpen,
        setSearchOpen,
        openHandler,
    } = useContext(LayoutContext);
    const {
        cache,
    } = useContext(UserDataContext);
    const [searchSample, setSearchSample] = useState('');

    const filtered = useMemo(() => {
        return searchSample ? cache
            .filter(product => product.title.toLowerCase().includes(searchSample.toLowerCase())) : []
    }, [cache, searchSample]);
    return (
        <>
            {/*HEADER SEARCH CONTAINER*/}
            <div className={`${styles.headerSearchWrapper} ${searchOpen && styles.headerSearchActive}`}
                 style={{
                     height: searchSample ? '100vh' : '',
                 }}
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
                        <div className={styles.searchField}>
                            <input
                                value={searchSample}
                                onChange={({target}) => setSearchSample(target.value)}
                                className={styles.headerSearchInput}
                                placeholder="Type words and hit enter"
                            />
                            <div className={styles.searchResults}
                                 style={{
                                     opacity: searchSample ? 1 : 0,
                                     background: filtered.length === 0? "transparent" : "white",
                                     pointerEvents: searchSample ? 'all' : 'none',
                                 }}>
                                {
                                    filtered.length > 0 && filtered.map(product => <Link
                                        to={`/product/${product._id}`}
                                        className={styles.smallProductCard}
                                        onClick={() => {
                                            setSearchOpen(false);
                                            setSearchSample('');
                                        }}>
                                        <img
                                            src={product?.images[0]?.url}
                                            alt={product?.images?.[0]?.public_id}
                                        />
                                        <div>
                                            {product.title}
                                        </div>
                                    </Link>)
                                }
                                {
                                    filtered.length === 0 && <div className={styles.nothingFound}>No results...</div>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
