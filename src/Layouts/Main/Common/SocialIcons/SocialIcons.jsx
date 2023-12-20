import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBasketball} from "@fortawesome/free-solid-svg-icons";
import styles from "./SosialIcons.module.scss";

export const SocialIcons = () => {
    return (
        <div className={styles.socialIcons}>
            <div className={styles.socialSpinners}>
                <a href="https://www.facebook.com/AncoraThemes/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
            </div>
            <div className={styles.socialSpinners}>
                <a href="https://twitter.com/themes_ancora" target="_blank">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </div>
            <div className={styles.socialSpinners}>
                <a href="https://dribbble.com/AncoraThemes" target="_blank">
                    <FontAwesomeIcon icon={faBasketball}/>
                </a>
            </div>
            <div className={styles.socialSpinners}>

                <a href="https://www.instagram.com/ancora_themes/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </div>
        </div>
    )
}
