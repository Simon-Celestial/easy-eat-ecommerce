import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles.siteHeader}>
            <section className={styles.headerContent}>
                <div className={styles.headerLeft}>
                    <div className={styles.HeaderBox}>
                        <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/logo-inverse.png"
                             alt="Header Logo"/>
                    </div>
                    <div className={styles.headerNavigation}>
                        <div className={styles.navigationItems}>
                            <a href="#">Home</a>
                        </div>
                        <div className={styles.navigationItems}>
                            <a href="#">Pages</a>
                        </div>
                        <div className={styles.navigationItems}>
                            <a href="#">Blog</a>

                        </div>
                        <div className={styles.navigationItems}>
                            <a>Shop</a>
                        </div>

                        <a className={styles.navigationItems}>
                            <a href="#">Contacts</a>

                        </a>

                    </div>
                </div>
                <div className={styles.headerRight}>

                </div>

            </section>
        </header>
    );
};
