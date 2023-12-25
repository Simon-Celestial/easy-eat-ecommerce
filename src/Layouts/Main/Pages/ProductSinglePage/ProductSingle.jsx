import React, {useContext, useEffect, useState} from 'react'
import styles from "./ProductSingle.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import '@splidejs/react-splide/css';
import {ProductDetails} from "../../Common/ProductDetails/ProductDetails.jsx";
import {ArrowRight, Heart, ShoppingCart, Star} from "@phosphor-icons/react";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";


export const ProductSingle = () => {

    const {
        setHeaderColorChange,
    } = useContext(LayoutContext);


    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    const [reviewBlockOpen, setReviewBlockOpen] = useState(true);
    const [descriptionBlockOpen, setDescriptionBlockOpen] = useState(false);
    const descriptionOpener = () => {
        if (reviewBlockOpen) {
            setReviewBlockOpen(false);
            setDescriptionBlockOpen(true);
        }
    }
    const reviewOpener = () => {
        if (descriptionBlockOpen) {
            setDescriptionBlockOpen(false)
            setReviewBlockOpen(true);
        }
    }


    return (
        <div className={styles.productSingleWrapper}>
            {/*PAGE HEADER*/}
            <Header/>
            {/*PAGE CONTENT*/}
            <PageNameSection title="Shop"/>
            {/*PRODUCT DETAILS SECTION*/}
            <ProductDetails/>
            {/*REVIEW SECTION*/}
            <section className={styles.reviewSection}>
                <div className={styles.reviewSectionContent}>
                    <div className={styles.reviewHeader}>
                        <div className={`${styles.reviewHeaderBtn} ${descriptionBlockOpen && styles.btnActive}`}
                             onClick={descriptionOpener}>
                            <p>DESCRIPTION</p>
                        </div>
                        <div className={`${styles.reviewHeaderBtn} ${reviewBlockOpen && styles.btnActive}`}
                             onClick={reviewOpener}>
                            <p>REVIEWS (1)</p>
                        </div>
                    </div>
                    <div className={styles.productDescription}
                         style={{display: descriptionBlockOpen ? "flex" : "none"}}>
                        <p>Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia
                            consequuntur. Lorem ipsum dolor. Aquia sit amet, elitr, sed diam nonum eirmod tempor
                            invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo
                            duo dolores et ea rebum. Stet clitain vidunt ut labore eirmod tempor invidunt magna
                            aliquyam.</p>
                    </div>
                    <div className={styles.reviewContentMain} style={{display: reviewBlockOpen ? "flex" : "none"}}>
                        <div className={styles.reviewContentLeft}>
                            <div className={styles.reviewLeftHeading}>
                                <p>1 REVIEW FOR PRODUCTS</p>
                            </div>
                            <div className={styles.reviewLeftReviewBlock}>
                                <div className={styles.reviewerCard}>
                                    <div className={styles.reviewerImg}>
                                        <img
                                            src="https://secure.gravatar.com/avatar/d04d6ce6de65011a75f5b2edb0f0e982?s=60&d=mm&r=g"
                                            alt="Reviewer"/>
                                    </div>
                                    <div className={styles.reviewerTittle}>
                                        <span>Ashton Porter  <p>– May 26, 2020</p></span>
                                        <p>Excellent product! I will be shopping again soon</p>
                                        <div className={styles.reviewerProductRating}>
                                            <Star size={14} weight="fill"/>
                                            <Star size={14} weight="fill"/>
                                            <Star size={14} weight="fill"/>
                                            <Star size={14} weight="fill"/>
                                            <Star size={14} weight="fill"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.reviewerCard}>
                                    <div className={styles.reviewerImg}>
                                        <img
                                            src="https://secure.gravatar.com/avatar/d04d6ce6de65011a75f5b2edb0f0e982?s=60&d=mm&r=g"
                                            alt="Reviewer"/>
                                    </div>
                                    <div className={styles.reviewerTittle}>
                                        <span>Santa Clause<p>- May 26, 2020</p></span>
                                        <p>Nice product! I hope you all will love it!</p>
                                        <div className={styles.reviewerProductRating}>
                                            <Star size={14} weight="fill"/>
                                            <Star size={14} weight="fill"/>
                                            <Star size={14} weight="fill"/>
                                            <Star size={14} weight="fill"/>
                                            <Star size={14} weight="fill"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.reviewContentRight}>
                            <div className={styles.reviewRightHeading}>
                                <b>Add a review</b>
                                <p>Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <div className={styles.reviewPostingFormWrapper}>
                                <form action="#">
                                    <label htmlFor="reviewName">
                                        NAME *
                                        <input type="text" name="name" id="name" className={styles.borderInput}
                                               required/>
                                    </label>
                                    <label htmlFor="reviewName">
                                        EMAIL *
                                        <input type="email" name="name" id="name" className={styles.borderInput}
                                               required/>
                                    </label>
                                    <label htmlFor="rating">
                                        Your Rating *
                                        <div className={styles.productRating} id="rating">
                                            <Star size={16}/>
                                            <Star size={16}/>
                                            <Star size={16}/>
                                            <Star size={16}/>
                                            <Star size={16}/>
                                        </div>
                                    </label>
                                    <label htmlFor="reviewTextArea">
                                        Your review *
                                        <textarea name="reviewTextArea" id="reviewTextArea" required></textarea>
                                    </label>
                                    <label htmlFor="reviewAgreement">
                                        <div className={styles.reviewAgreement}>
                                            <input type="checkbox" id="reviewAgreement" required/>
                                            <p>I agree that my submitted data is being <a
                                                href="https://easyeat.ancorathemes.com/privacy-policy/" target="_blank">collected
                                                and stored</a>. *</p>
                                        </div>
                                    </label>
                                    <label htmlFor="reviewSendBtn">
                                        <div>
                                            <button id="reviewSendBtn" type="submit"
                                                    className={styles.reviewSendBtn}>SUBMIT
                                            </button>
                                        </div>
                                    </label>


                                </form>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/*RELATED PRODUCTS SECTION*/}
            <section className={styles.relatedProductsSection}>
                <div className={styles.relatedProductsContent}>
                    <div className={styles.relatedProductsHeading}>
                        <h1>Related Products</h1>
                    </div>
                    {/*ADD HAS SALE CLASS TO ACTIVATE SALE ON CARD*/}
                    <div className={styles.relatedProductsCards}>
                        <div className={styles.relatedProductsCard}>
                            <div className={styles.relatedProductImg}>
                                <div className={styles.relatedWithSale}>
                                    -10%
                                </div>
                                <div className={styles.relatedProductsManipulation}>
                                    <div className={styles.relatedManipulationItems}>
                                        <Heart weight="thin"/>
                                    </div>
                                    <div className={styles.relatedManipulationItems}>
                                        <ShoppingCart weight="thin"/>
                                    </div>
                                    <div className={styles.relatedManipulationItems}>
                                        <ArrowRight weight="thin"/>
                                    </div>
                                </div>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-2-copyright-480x480.png"
                                    alt="Product"/>
                            </div>
                            <div className={styles.relatedProductTittle}>
                                <b className={styles.relatedProductName}>Double Burger</b>
                                <span><p>$ 165.00</p> $ 125.00</span>
                                <div className={styles.relatedProductRating}>
                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                    <Star size={14} weight="fill" color="gray"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.relatedProductsCard}>
                            <div className={styles.relatedProductImg}>
                                <div className={styles.relatedWithSale}>
                                    -10%
                                </div>
                                <div className={styles.relatedProductsManipulation}>
                                    <div className={styles.relatedManipulationItems}>
                                        <Heart weight="thin"/>
                                    </div>
                                    <div className={styles.relatedManipulationItems}>
                                        <ShoppingCart weight="thin"/>
                                    </div>
                                    <div className={styles.relatedManipulationItems}>
                                        <ArrowRight weight="thin"/>
                                    </div>
                                </div>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-7-copyright-480x480.png"
                                    alt="Product"/>
                            </div>
                            <div className={styles.relatedProductTittle}>
                                <b className={styles.relatedProductName}>Porterhouse Steak</b>
                                <span>$ 256.00</span>
                            </div>

                        </div>
                        <div className={styles.relatedProductsCard}>
                            <div className={styles.relatedProductImg}>
                                <div className={styles.relatedProductsManipulation}>
                                    <div className={styles.relatedManipulationItems}>
                                        <Heart weight="thin"/>
                                    </div>
                                    <div className={styles.relatedManipulationItems}>
                                        <ShoppingCart weight="thin"/>
                                    </div>
                                    <div className={styles.relatedManipulationItems}>
                                        <ArrowRight weight="thin"/>
                                    </div>
                                </div>
                                <div className={`${styles.relatedWithSale} ${styles.hasSale}`}>
                                    -10%
                                </div>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"
                                    alt="Product"/>
                            </div>
                            <div className={styles.relatedProductTittle}>
                                <b className={styles.relatedProductName}>Black Burger</b>
                                <span><p>$ 99.00</p> $ 89.00</span>
                                <div className={styles.relatedProductRating}>
                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                    <Star size={14} weight="fill" color="gray"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*PAGE FOOTER*/}
            <ChangedFooter />
            {/*PAGE COMPONENTS*/}
            <UiControl/>
        </div>
    )
}
