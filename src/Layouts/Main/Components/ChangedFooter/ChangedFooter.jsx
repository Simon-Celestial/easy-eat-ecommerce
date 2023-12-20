import React from 'react'
import styles from "./ChangedFooter.module.scss";
import {SocialIcons} from "../../Common/SocialIcons/SocialIcons.jsx";

export const ChangedFooter = () => {
    return (
        <footer className={styles.changedFooter}>
            <div className={styles.changedFooterContent}>
                <div className={styles.changedFooterMain}>
                    <div className={styles.footerMainBlocks}>
                        <h2>WORKING HOURS</h2>
                        <p>Mon-Fri: 9 AM – 6 PM</p>
                        <p>Saturday: 9 AM – 4 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className={styles.footerMainBlocks}>
                        <h2>ADDRESS</h2>
                        <p>Germany —</p>
                        <p>785 Street, Office 478</p>
                        <p>Berlin, De 81566</p>
                        <p><a href="mailto:info@email.com">info@email.com</a></p>
                        <p><a href="tel:+18408412569">+1 840 841 25 69</a></p>
                    </div>
                    <div className={styles.footerMainBlocks}>
                        <h2>LINKS</h2>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">Services</a></p>
                        <p><a href="#">About</a></p>
                        <p><a href="#">Menu</a></p>
                        <p><a href="#">Contacts</a></p>
                    </div>
                    <div className={styles.footerMainBlocks}>
                        <h2>GET IN TOUCH</h2>
                        <SocialIcons/>
                    </div>
                </div>
                <div className={styles.footerBottomContainer}>
                    <a href="https://ancorathemes.com/" target="_blank" rel="noopener">AncoraThemes</a>
                    © 2023. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
