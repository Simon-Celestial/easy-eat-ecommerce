import React, {useState} from 'react';
import styles from '../Header.module.scss';
import {CaretRight} from '@phosphor-icons/react';

export const NavMenuItems = ({items}) => {
    const [menuState, setMenuState] = useState({
        dropdown: '',
        subMenuDropdown: '',
    });

    const handleNavDropdownMouseEnter = () => {
        setMenuState((prevState) => ({...prevState, dropdown: styles.navDropdownActive}));
    };

    const handleNavDropdownMouseLeave = () => {
        setMenuState((prevState) => ({...prevState, dropdown: ''}));
    };

    const handleSubMenuMouseEnter = () => {
        setMenuState((prevState) => ({...prevState, subMenuDropdown: styles.submenuActive}));
    };

    const handleSubMenuMouseLeave = () => {
        setMenuState((prevState) => ({...prevState, subMenuDropdown: ''}));
    };

    return (
        <div
            className={styles.navigationItems}
            onMouseLeave={handleNavDropdownMouseLeave}
            onMouseEnter={handleNavDropdownMouseEnter}
        >
            <a
                href={items.link}
                className={styles.pageLink}
            >
                {items.label}
            </a>
            {items.drop ? (
                <div className={`${styles.navDropdownWrapper} ${menuState.dropdown}`}>
                    <div className={styles.navDropdown}>
                        <div className={styles.navDropdownItem}
                        >
                            <a href="#">
                                <p>{items.item1}</p>
                            </a>
                        </div>
                        <div className={styles.navDropdownItem}
                        >
                            <a href="#">
                                <p>{items.item2}</p>
                            </a>
                        </div>
                        <div className={styles.navDropdownItem}
                        >
                            <a href="#">
                                <p>{items.item3}</p>
                            </a>
                        </div>
                        <div className={styles.navDropdownItem}
                        >
                            <a href="#">
                                <p>{items.item4}</p>
                            </a>
                        </div>
                        <div
                            className={styles.navDropdownItem}
                            onMouseEnter={handleSubMenuMouseEnter}
                            onMouseLeave={handleSubMenuMouseLeave}
                        >
                            <a href="#">
                                <p>{items.item5}</p>
                            </a>
                            {items.singlePost ? (
                                <>
                                    <CaretRight size={14} color="gray" weight="bold"/>
                                    <div className={`${styles.subMenuDropdown} ${menuState.subMenuDropdown}`}>
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
                                </>
                            ) : null}
                        </div>
                        {items.item6 ? (
                            <div className={styles.navDropdownItem}>
                                <a href="#">
                                    <p>{items.item6}</p>
                                </a>
                            </div>
                        ) : null}
                        {items.item7 ? (
                            <div
                                className={styles.navDropdownItem}
                                onMouseEnter={handleSubMenuMouseEnter}
                                onMouseLeave={handleSubMenuMouseLeave}
                            >
                                <a href="#">
                                    <p>{items.item7}</p>
                                </a>
                                {items.toolsDrop ? (
                                    <>
                                        <CaretRight size={14} color="gray" weight="bold"/>
                                        <div className={`${styles.subMenuDropdown} ${menuState.subMenuDropdown}`}>
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
                                    </>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </div>
    );
};
