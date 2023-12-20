import React from 'react'
import styles from "./Footer.module.scss";
import {SocialIcons} from "../../Common/SocialIcons/SocialIcons.jsx";

export const Footer = () => {
    return (
        // FOOTER
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.footerContentMain}>
                    <div className={styles.footerMainTitleBlock}>
                        <span>
                            We cook only the most
                            <br/>
                            delicious meals
                            </span>
                    </div>
                    <div className={styles.footerAddressBlock}>
                        <div className={styles.footerAddressTitle}>
                            <h2>Address</h2>
                            <p>Germany —
                                <br/>
                                785 Street, Office 478
                                <br/>
                                Berlin, De 81566
                            </p>
                        </div>
                        {/*SOCIAL ICONS*/}
                        <SocialIcons/>
                    </div>
                    <div className={styles.footerContactBlock}>
                        <h6>Say Hello</h6>
                        <p>
                            <a href="mailto:info@email.com">info@email.com</a>
                        </p>
                        <h6>
                            <a href="tel:+1%20840%20841%2025%2069">+1 840 841 25 69
                            </a>
                        </h6>
                    </div>
                </div>
                <div className={styles.footerContentBottom}>
                    <div className={styles.footerNavBlock}>
                        <div className={styles.footerNavItem}>
                            <a href="#">Our Blog</a>
                        </div>
                        <div className={styles.footerNavItem}>
                            <a href="#">About us</a>
                        </div>
                        <div className={styles.footerNavItem}>
                            <a href="#">Contacts</a>
                        </div>
                    </div>
                    <div className={styles.footerCopyright}>
                        <div className={styles.footerCopyrightTitle}>
                            <a href="#" target="_blank" rel="noopener">AncoraThemes</a>
                            © 2023. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
