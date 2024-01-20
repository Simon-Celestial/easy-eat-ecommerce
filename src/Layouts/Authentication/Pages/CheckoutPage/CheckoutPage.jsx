import React, {useCallback, useContext, useEffect, useState} from 'react'
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {PageNameSection} from "../../../Main/Common/PageNameSection/PageNameSection.jsx";
import {Header} from "../../../Main/Components/Header/Header.jsx";
import styles from "./CheckoutPage.module.scss";
import {ChangedFooter} from "../../../Main/Components/ChangedFooter/ChangedFooter.jsx";
import {UiControl} from "../../../Main/Common/UiControl/UiControl.jsx";
import {EmptyCartInfo} from "../../../Main/Common/EmpyCartInfo/EmptyCartInfo.jsx";
import {CouponBlock} from "../../../Main/Common/CouponBlock/CouponBlock.jsx";
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";
import useApi from "../../../../Hooks/useApi.js";
import {useNavigate} from "react-router-dom";
import {StatusBar} from "../../../Main/Common/StatusBar/StatusBar.jsx";
import {CircleDashed} from "@phosphor-icons/react";
import {Bounce, toast} from "react-toastify";


export const resolveSequential = async (tasks) => {
    return tasks.reduce(async (accumulator, currentPromise,) => {
        const results = await accumulator;

        return [...results, await currentPromise()];
    }, Promise.resolve([]));
};


export const CheckoutPage = () => {

    const {
        setHeaderColorChange, setBasketVisible,
    } = useContext(LayoutContext);

    const {
        basket, cache: products, update, remove, refresh, loading,
    } = useContext(UserDataContext);

    const {
        POST: postOrder,
    } = useApi('site/orders')

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);


    const navigate = useNavigate();
    const [couponDropDownActive, setCouponDropDownActive] = useState(false);


    const couponBlockHandler = useCallback(() => {
        setCouponDropDownActive(prev => !prev);
    }, []);

    const [formFields, setFormFields] = useState({
        firstName: "", lastName: "", districtArea: "", streetAddress: "",
    });
    const [checkboxes, setCheckboxes] = useState({
        cashInPlace: true, cardInPlace: false,
    });

    const handleInputChange = (field, value) => {
        setFormFields(prev => ({
            ...prev, [field]: value,
        }));
    };
    const [orderLoading, setOrderLoading] = useState(false);


    return (<div className={styles.checkoutPageWrapper}>
        <Header/>
        <PageNameSection title="Checkout"/>
        <section className={styles.checkoutSection}>
            {!loading ? <div className={styles.checkoutContent}>
                {basket.length < 1 ? <div className={styles.emptyCart}>
                    <p>Checkout is not available</p>
                    <EmptyCartInfo/>
                </div> : <div className={styles.checkoutMain}>
                    <div className={styles.headingDropdown}>
                        <div className={styles.titleBlock}>
                            <p>Have a coupon? <span
                                onClick={couponBlockHandler}>Click here to enter your code</span>
                            </p>
                            <form action="#"
                                  className={`${styles.dropDownCoupon} ${couponDropDownActive && styles.dropDownActive}`}>
                                <CouponBlock/>
                                <p>If you have a coupon code, please apply it below.</p>
                            </form>
                        </div>
                    </div>
                    <StatusBar first="#EC3D08" second="#EC3D08" third="black"/>
                    <div className={styles.checkoutForm}>
                        {/*LEFT*/}
                        <div className={styles.checkoutLeft}>
                            <h3>Billing Details</h3>
                            <div className={styles.formRow}>
                                <div className={styles.formShortBlock}>
                                    <p>First Name<span>*</span></p>
                                    <input type="text"
                                           required
                                           value={formFields.firstName}
                                           onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    />
                                </div>
                                <div className={styles.formShortBlock}>
                                    <p>Last Name<span>*</span></p>
                                    <input type="text"
                                           required
                                           value={formFields.lastName}
                                           onChange={(e) => handleInputChange("lastName", e.target.value)}

                                    />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formLongBlock}>
                                    <p>Company name (Optional)</p>
                                    <input
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formLongBlock}>
                                    <p>District / Area<span>*</span></p>
                                    <select name="area"
                                            value={formFields.districtArea}
                                            onChange={(e) => handleInputChange("districtArea", e.target.value)}
                                    >
                                        <option value="">Select a district/area</option>
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
                                    <input type="text"
                                           required
                                           placeholder="Example (Dilara Aliyeva str.237 app.26)"
                                           value={formFields.streetAddress}
                                           onChange={(e) => handleInputChange("streetAddress", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formLongBlock}>
                                    <p>Post Code (Optional)</p>
                                    <input
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                            <div className={styles.additionalInfo}>
                                <h3>Additional information</h3>
                                <label htmlFor="info">
                                    Order Notes (Optional)
                                    <textarea name="info" id="info"
                                              placeholder="Notes about your order, e.g. special notes for delivery."
                                    ></textarea>
                                </label>
                            </div>
                        </div>
                        {/*RIGHT*/}
                        <div className={styles.checkoutRight}>
                            <h3>Your Order</h3>
                            <div className={styles.orderContainer}>
                                {/*PRODUCTS HERE*/}
                                {basket.map(bItem => {
                                    const product = products.find(it => it._id === bItem.productId);
                                    const price = product.salePrice || product.productPrice;

                                    return <div className={styles.orderRow}>
                                        <p>{product.title} <span> × {bItem.productCount}</span></p>
                                        <p>${price}</p>
                                    </div>
                                })}

                                {/*TOTAL AND SUBTOTAL PRICE HERE*/}
                                <div className={styles.orderRow}>
                                    <p>Subtotal</p>
                                    <p>${basket.map(bItem => {
                                        const product = products.find(it => it._id === bItem.productId);
                                        return (product.salePrice || product.productPrice) * bItem.productCount;
                                    }).reduce((a, b) => a + b, 0).toFixed(2)}</p>
                                </div>
                                <div className={styles.orderRow}
                                     style={{borderColor: "transparent", color: "#EC3D08"}}>
                                    <p>Total</p>
                                    <p>${basket.map(bItem => {
                                        const product = products.find(it => it._id === bItem.productId);
                                        return (product.salePrice || product.productPrice) * bItem.productCount;
                                    }).reduce((a, b) => a + b, 0).toFixed(2)}</p>
                                </div>
                            </div>
                            <h3 className={styles.payment}>Payment</h3>
                            <div className={styles.paymentContainer}>
                                <div className={styles.paymentTypeRow}>
                                    <div className={styles.paymentTypeItem}>
                                        <input
                                            checked={checkboxes.cashInPlace}
                                            onChange={() => setCheckboxes({
                                                cashInPlace: true, cardInPlace: false,
                                            })}
                                            type="checkbox"
                                        />
                                        <p>Pay with CASH upon delivery.</p>
                                    </div>
                                    <div className={styles.paymentTypeItem}>
                                        <input
                                            checked={checkboxes.cardInPlace}
                                            onChange={() => setCheckboxes({
                                                cardInPlace: true, cashInPlace: false,
                                            })}
                                            type="checkbox"
                                        />
                                        <p>Pay with CARD upon delivery.</p>
                                    </div>


                                </div>
                                <div className={styles.paymentPrivacyPolicy}>
                                    <p>Your personal data will be used to process your order, support your
                                        experience throughout this website, and for other purposes described
                                        in
                                        our <a href="https://easyeat.ancorathemes.com/privacy-policy/"
                                               className="woocommerce-privacy-policy-link" target="_blank">privacy
                                            policy</a>.</p>

                                    {/*PLACE ORDER BUTTON*/}
                                    <button
                                        style={{
                                            opacity: orderLoading ? 0.5 : 1
                                        }}
                                        disabled={orderLoading}
                                        onClick={async () => {
                                            if (!Object.values(formFields).every(it => !!it)) {
                                                toast.error(`Fill all required fields *`,
                                                    {
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: false,
                                                        draggable: true,
                                                        progress: undefined,
                                                        theme: "colored",
                                                        transition: Bounce,
                                                    }
                                                );
                                                return;
                                            }
                                            setOrderLoading(true);

                                            try {
                                                const result = await postOrder(null, {
                                                    products: basket.map(({productId, productCount}) => ({
                                                        productId, productCount,
                                                    })), method: checkboxes.cardInPlace ? 'card' : 'cash'
                                                });
                                                if (result.status === 200) {
                                                    // To make sure that an update will happen only if we've
                                                    // completed the removal
                                                    await resolveSequential(basket.map((bItem, i) => async () => remove(bItem._id, i === basket.length - 1)));
                                                    navigate('/order-completed');
                                                }
                                            } catch (error) {
                                                console.log(error)
                                            } finally {
                                                setOrderLoading(false);
                                            }

                                        }}>
                                        {
                                            orderLoading ?
                                                <CircleDashed />
                                                :
                                                "Place Order"

                                        }

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}

            </div> : <div className={styles.pageLoader}>
                <CircleDashed/>
            </div>}
        </section>
        {/*FOOTER*/}
        <ChangedFooter/>
        {/*COMMON COMPONENTS FOR UI */}
        <UiControl/>

    </div>)
}
