import React, {useContext, useEffect} from 'react'
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {Header} from "../../Components/Header/Header.jsx";
import styles from "./CheckoutPage.module.scss";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {EmptyCartInfo} from "../../Common/EmpyCartInfo/EmptyCartInfo.jsx";
import {StatusBar} from "../../Common/StatusBar/StatusBar.jsx";

export const CheckoutPage = () => {

    const {
        setHeaderColorChange,
        setBasketVisible,
    } = useContext(LayoutContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);


    return (
        <div className={styles.checkoutPageWrapper}>
            <Header/>
            <PageNameSection title="Checkout"/>
            <section className={styles.checkoutSection}>
                <div className={styles.checkoutContent}>

                    {/*TURN OFF THIS BLOCK WHEN CHECKOUT PRODUCTS IS EMPTY*/}
                    {/*<div className={styles.emptyCart}>*/}
                    {/*    <p>Checkout is not available whilst your cart is empty.</p>*/}
                    {/*    <EmptyCartInfo/>*/}
                    {/*</div>*/}

                    <div className={styles.checkoutMain}>
                        <StatusBar first="#EC3D08" second="#EC3D08" third="black"/>
                        <form action="#" method="post" className={styles.checkoutForm}>
                            {/*LEFT*/}
                            <div className={styles.checkoutLeft}>
                                <h3>Billing Details</h3>

                            </div>
                            {/*RIGHT*/}
                            <div className={styles.checkoutRight}>
                                <h3>Your Order</h3>
                                <div className={styles.orderContainer}>
                                    {/*PRODUCTS HERE*/}
                                    <div className={styles.orderRow}>
                                        <p>Margherita Pizza <span>× 1</span></p>
                                        <p>$14.00</p>
                                    </div>
                                    <div className={styles.orderRow}>
                                        <p>Classic Hamburger<span>× 1</span></p>
                                        <p>$10.00</p>
                                    </div>
                                    {/*TOTAL AND SUBTOTAL PRICE HERE*/}
                                    <div className={styles.orderRow}>
                                        <p>Subtotal</p>
                                        <p>$24.00</p>
                                    </div>
                                    <div className={styles.orderRow}
                                         style={{borderColor: "transparent", color: "#EC3D08"}}>
                                        <p>Total</p>
                                        <p>$24.00</p>
                                    </div>
                                </div>
                                <h3 className={styles.payment}>Payment</h3>
                                <div className={styles.paymentContainer}>
                                    <div className={styles.paymentTypeRow}>
                                        <div className={styles.paymentTypeItem}>
                                            <input type="checkbox"/>
                                            Cash on Delivery
                                        </div>
                                        <p>Pay with cash upon delivery.</p>
                                    </div>
                                    <div className={styles.paymentPrivacyPolicy}>
                                        <p>Your personal data will be used to process your order, support your
                                            experience throughout this website, and for other purposes described in
                                            our <a href="https://easyeat.ancorathemes.com/privacy-policy/"
                                                   className="woocommerce-privacy-policy-link" target="_blank">privacy
                                                policy</a>.</p>
                                        <button type="submit">
                                            Place Order
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/*FOOTER*/}
            <ChangedFooter/>
            {/*COMMON COMPONENTS FOR UI */}
            <UiControl/>

        </div>
    )
}
