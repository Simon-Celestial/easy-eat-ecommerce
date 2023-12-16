import React, {useContext} from 'react'
import styles from "./SideMenu.module.scss";
import {X} from "@phosphor-icons/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faBasketball} from "@fortawesome/free-solid-svg-icons";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

export const SideMenu = () => {
    const {
        sideMenuOpen,
        setSideMenuOpen,
        openHandler,
    } = useContext(LayoutContext);

    return (
        <>
            {/*HEADER SIDE MENU*/}
            <div className={`${styles.rightMenuWrapper} ${sideMenuOpen && styles.rightMenuActive}`}
                 onClick={ev => ev.stopPropagation()}>
                <div className={styles.rightMenuContent}>
                    <div className={styles.rightMenuHeader}>
                        <a href="/">
                            <img src="//easyeat.ancorathemes.com/wp-content/uploads/2023/01/logo-small-inverse.png"
                                 alt="Easy Eat"/>
                        </a>
                        <div className={styles.closeRightMenu} onClick={openHandler(setSideMenuOpen)}>
                            <X/>
                        </div>
                    </div>
                    <div className={styles.rightMenuSocial}>
                        <a href="https://www.facebook.com/AncoraThemes" target={"_blank"}>
                            <FontAwesomeIcon icon={faFacebookF}/>
                            <p>Facebook</p>
                        </a>
                        <a href="https://twitter.com/themes_ancora" target={"_blank"}>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <p>Twitter</p>
                        </a>
                        <a href="https://dribbble.com/AncoraThemes" target={"_blank"}>
                            <FontAwesomeIcon icon={faBasketball}/>
                            <p>Dribble</p>
                        </a>
                        <a href="https://www.instagram.com/ancora_themes" target={"_blank"}>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className={styles.rightMenuFooter}>
                        <a href="tel:+18408412569" target="_blank">+1 840 841 25 69</a>
                        <a href="mailto:info@email.com" target="_blank">info@email.com</a>
                    </div>
                </div>
            </div>

        </>
    )
}
