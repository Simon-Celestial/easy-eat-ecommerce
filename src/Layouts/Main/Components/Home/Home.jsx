import React from 'react'
import styles from "./Home.module.scss";

export const Home = () => {
    return (
        <main className={styles.mainWrapper}>
            {/*ABOUT US SECTION*/}
            <section className={styles.aboutUsSection}>
                <div className={styles.aboutUsContent}>
                    <div className={styles.aboutUsLeft}>
                    </div>
                    <div className={styles.aboutUsRight}>
                        <div className={styles.spinningCircle}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-3.svg" alt=""/>
                        </div>
                        {/*<div className={styles.floatingBurger}>*/}
                        {/*    <img*/}
                        {/*        src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-5-copyright.png"*/}
                        {/*        alt=""/>*/}

                        {/*</div>*/}
                    </div>
                </div>

            </section>
        </main>
    )
}
