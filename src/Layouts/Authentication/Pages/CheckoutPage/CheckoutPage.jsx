import React, {useContext, useEffect, useState} from 'react'
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {PageNameSection} from "../../../Main/Common/PageNameSection/PageNameSection.jsx";
import {Header} from "../../../Main/Components/Header/Header.jsx";
import styles from "./CheckoutPage.module.scss";
import {ChangedFooter} from "../../../Main/Components/ChangedFooter/ChangedFooter.jsx";
import {UiControl} from "../../../Main/Common/UiControl/UiControl.jsx";
import {EmptyCartInfo} from "../../../Main/Common/EmpyCartInfo/EmptyCartInfo.jsx";
import {StatusBar} from "../../../Main/Common/StatusBar/StatusBar.jsx";
import {CouponBlock} from "../../../Main/Common/CouponBlock/CouponBlock.jsx";
import {Eye, EyeSlash} from "@phosphor-icons/react";

export const CheckoutPage = () => {

    const {
        setHeaderColorChange,
        setBasketVisible,
        openHandler,
    } = useContext(LayoutContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);

    const [couponDropDownActive, setCouponDropDownActive] = useState(false);
    const [LoginDropDownActive, setLoginDropDownActive] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);


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
                        <div className={styles.headingDropdown}>
                            <div className={styles.titleBlock}>
                                <p>Returning customer? <span onClick={openHandler(setLoginDropDownActive)}>Click here to login</span></p>
                                <form action="#" className={`${styles.dropDownLogin} ${LoginDropDownActive && styles.loginDropdownActive}`}>
                                    <p>If you have shopped with us before, please enter your details below. If you are a
                                        new customer, please proceed to the Billing section.</p>
                                    <div className={styles.dropDownLoginRow}>
                                        <div className={styles.dropDownLoginColumn}>
                                            <label htmlFor="username">Username or email&nbsp;<span>*</span></label>
                                            <input type="text" name="username" id="username" required
                                                   autoComplete="username"/>
                                            <div className={styles.rememberBlock}>
                                                <input type="checkbox"/>
                                                Remember me
                                            </div>
                                            <button type="submit">Login</button>
                                            <a href="https://easyeat.ancorathemes.com/my-account/lost-password/">Lost
                                                your password?</a>
                                        </div>
                                        <div className={styles.dropDownLoginColumn}>
                                            <label htmlFor="password">Password&nbsp;<span>*</span>
                                                <div className={styles.passwordVisible}
                                                     onClick={openHandler(setPasswordVisible)}>
                                                    {!passwordVisible ? <Eye/> : <EyeSlash/>}
                                                </div>
                                            </label>
                                            <input type={`${passwordVisible? "text" : "password"}`} name="password" id="password" required
                                                   autoComplete="password"/>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={styles.titleBlock}>
                                <p>Have a coupon? <span onClick={openHandler(setCouponDropDownActive)}>Click here to enter your code</span>
                                </p>
                                <form action="#"
                                      className={`${styles.dropDownCoupon} ${couponDropDownActive && styles.dropDownActive}`}>
                                    <CouponBlock/>
                                    <p>If you have a coupon code, please apply it below.</p>
                                </form>
                            </div>
                        </div>
                        <StatusBar first="#EC3D08" second="#EC3D08" third="black"/>
                        <form action="#" method="post" className={styles.checkoutForm}>
                            {/*LEFT*/}
                            <div className={styles.checkoutLeft}>
                                <h3>Billing Details</h3>
                                <div className={styles.formRow}>
                                    <div className={styles.formShortBlock}>
                                        <p>First Name<span>*</span></p>
                                        <input type="text" required/>
                                    </div>
                                    <div className={styles.formShortBlock}>
                                        <p>Last Name<span>*</span></p>
                                        <input type="text" required/>
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formLongBlock}>
                                        <p>Company name (Optional)</p>
                                        <input type="text"/>
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formLongBlock}>
                                        <p>District / Area<span>*</span></p>
                                        <select name="area">
                                            <option value="Binagadi">Binagadi</option>
                                            <option value="Yasamal">Yasamal</option>
                                            <option value="Khatai">Khatai</option>
                                            <option value="Nasimi">Nasimi</option>
                                            <option value="Narimanov">Narimanov</option>
                                            <option value="Nizami">Nizami</option>
                                            <option value="Khazar">Khazar</option>
                                            <option value="Sabayel">Sabayel</option>
                                            <option value="Sabunchu">Sabunchu</option>
                                            <option value="Surakhny">Surakhny</option>
                                            <option value="Garadagh ">Garadagh</option>
                                            <option value="Pirallahi">Pirallahi</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formLongBlock}>
                                        <p>Street Address<span>*</span></p>
                                        <input type="text" required
                                               placeholder="Example (Dilara Aliyeva str.237 app.26)"/>
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formLongBlock}>
                                        <p>Post Code (Optional)</p>
                                        <input type="text" required/>
                                    </div>
                                </div>
                                <div className={styles.additionalInfo}>
                                    <h3>Additional information</h3>
                                    <label htmlFor="info">
                                        Order Notes (Optional)
                                        <textarea name="info" id="info"
                                                  placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </label>
                                </div>
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
