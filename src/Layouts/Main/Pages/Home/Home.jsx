import styles from "./Home.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {TelegramLogo} from "@phosphor-icons/react";

export const Home = () => {
    return (
        <div className={styles.HomeWrapper}>
            {/*/!*SITE MAIN COMPONENTS*!/*/}
            <Header/>
            {/*HOME PAGE MAIN CONTENT*/}
            <main className={styles.mainWrapper}>
                {/*ABOUT US SECTION*/}
                <section className={styles.aboutUsSection}>
                    <div className={styles.aboutUsContent}>
                        <div className={styles.aboutUsLeft}>
                        </div>
                        <div className={styles.aboutUsRight}>
                            <div className={styles.spinningCircle}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-3.svg"
                                    alt=""/>
                            </div>
                            {/*<div className={styles.floatingBurger}>*/}
                            {/*    <img*/}
                            {/*        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-5-copyright.png"*/}
                            {/*        alt=""/>*/}

                            {/*</div>*/}
                        </div>
                    </div>
                </section>
                {/*SUBSCRIBE SECTION*/}
                <section className={styles.subscribeSection}>
                    <div className={`${styles.subscribeRotateCircleLeft} ${styles.decoration}`}>
                        <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-2.svg" alt="decoration"/>
                    </div>
                    <div className={`${styles.subscribeSolidCircleLeft} ${styles.decoration}`}>
                        <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill.svg" alt="decoration"/>
                    </div>



                    <div className={styles.subscribeSectionContent}>
                    <div className={styles.subscribeTittle}>
                        <h2>Subscribe for exclusive</h2>
                        <h2>updates and hot offers!</h2>
                    </div>
                        <div className={styles.subscribeFormWrapper}>
                            <form action="#">
                                <div className={styles.subscribeFormTop}>
                                    <label htmlFor="subscribeInput">
                                        <input type="main" placeholder="Enter Your Email Address" required/>
                                    </label>
                                    <button type="submit">
                                        <TelegramLogo  />
                                        SUBSCRIBE
                                    </button>
                                </div>
                                <div className={styles.subscribeFormBottom}>
                                    <label htmlFor="subscribeAgreement">
                                        <input type="checkbox"/>
                                        I agree to the
                                        <a href="https://easyeat.ancorathemes.com/privacy-policy/" target="_blank">Privacy Policy</a>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            {/*FOOTER*/}
            <Footer />
            {/*COMMON COMPONENTS FOR UI */}
            <UiControl />
        </div>
    )
}
