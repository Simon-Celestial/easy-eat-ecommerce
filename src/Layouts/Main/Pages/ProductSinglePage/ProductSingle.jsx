import React, {useContext, useEffect, useState} from 'react'
import styles from "./ProductSingle.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import '@splidejs/react-splide/css';
import {ProductDetails} from "../../Common/ProductDetails/ProductDetails.jsx";
import {ArrowRight, CircleDashed, Heart, NumberCircleEight, ShoppingCart, Star} from "@phosphor-icons/react";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";
import {Link, useParams} from "react-router-dom";
import useApi from "../../../../Hooks/useApi.js";
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";

export const ProductSingle = () => {

    const {
        setBasketVisible,
        setHeaderColorChange,
    } = useContext(LayoutContext);

    const {} = useContext(UserDataContext);
    const [product, setProduct] = useState(null);
    const [brands, setBrands] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const {
        id,
    } = useParams();
    const {
        GET: getSingleProduct,
    } = useApi('site/products');
    const {
        GET: getAllBrands,
    } = useApi('site/brands');

    useEffect(() => {
        setLoading(true);
        (async () => {
            const result = await getSingleProduct(id);
            if (result.status === 200) {
                const obj = JSON.parse(result.data);
                setProduct(obj.data);
            } else {

            }
            setLoading(false);
        })()
    }, [id]);
    useEffect(() => {
        setLoading(true);
        (async () => {
            const result = await getAllBrands();
            if (result.status === 200) {
                const obj = JSON.parse(result.data);
                setBrands(obj.data);
            } else {

            }
            setLoading(false);
        })()
    }, []);
    useEffect(() => {
        if (!product) return;
        setLoading(true);
        (async () => {
            const result = await getSingleProduct(null, {
                perPage: 4,
                page: 1,
                brandId: product.brandId,
            });
            if (result.status === 200) {
                const obj = JSON.parse(result.data);
                setRelatedProducts(obj.data.product.filter(it => it._id !== product._id).slice(-3));
            } else {

            }
            setLoading(false);
        })();

    }, [product])

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

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);
    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);
    return (
        <div className={styles.productSingleWrapper}>
            {/*PAGE HEADER*/}
            <Header/>
            {/*PAGE CONTENT*/}
            <PageNameSection title="Shop"/>
            {/*PRODUCT DETAILS SECTION*/}
            {/*REVIEW SECTION*/}
            {(!product || !brands) ? (<div className={styles.pageLoader}>
                <CircleDashed/>
            </div>) : <>
                <ProductDetails product={product} brands={brands}/>
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
                            <p>{product?.description}</p>
                        </div>
                        <div className={styles.reviewContentMain} style={{display: reviewBlockOpen ? "flex" : "none"}}>
                            <div className={styles.reviewContentLeft}>
                                <div className={styles.reviewLeftHeading}>
                                    <p>2 REVIEWS FOR THIS PRODUCTS</p>
                                </div>
                                <div className={styles.reviewLeftReviewBlock}>
                                    <div className={styles.reviewerCard}>
                                        <div className={styles.reviewerImg}>
                                            <img
                                                src="https://media-sof1-2.cdn.whatsapp.net/v/t61.24694-24/369551572_2144320669238776_3474047027888388529_n.jpg?ccb=11-4&oh=01_AdQAAFnfEoJDdSRy0tKkQbf8-wInPI_lonNOTW00eJjMTw&oe=65AFA1F2&_nc_sid=e6ed6c&_nc_cat=106"
                                                alt="Reviewer"/>
                                        </div>
                                        <div className={styles.reviewerTittle}>
                                            <span>Murad Tate <p>– May 26, 2020</p></span>
                                            <p>Gozel bir mehsuldu, yene sifarish edecem!</p>
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
                                                src="https://lumiere-a.akamaihd.net/v1/images/eu_capt-marvel_article_hero_m_73e28747.jpeg?region=0,0,750,663"
                                                alt="Reviewer"/>
                                        </div>
                                        <div className={styles.reviewerTittle}>
                                            <span>Captain Marvel<p>- May 27, 2020</p></span>
                                            <p>Nice product! I highly recommend it!</p>
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
                                                    href="https://easyeat.ancorathemes.com/privacy-policy/"
                                                    target="_blank">collected
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
            </>}
            {/*RELATED PRODUCTS SECTION*/}
            <section className={styles.relatedProductsSection}>
                <div className={styles.relatedProductsContent}>
                    <div className={styles.relatedProductsHeading}>
                        <h1>Related Products</h1>
                    </div>
                    {
                        relatedProducts ?
                            <div className={styles.relatedProductsCards}>

                            {
                                !loading?
                                relatedProducts.map(related => {
                                    const salePercent = (100 - (((related?.salePrice) / related?.productPrice) * 100));

                                    return (
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
                                                        <Link to={`/product/${related._id}`} target={'_blank'}>
                                                            <ArrowRight weight="thin"/>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {
                                                    Math.round(salePercent) !== 100 ?
                                                        <div className={`${styles.relatedWithSale} ${styles.hasSale}`}>
                                                            -{salePercent.toFixed(2)} %
                                                        </div> : ''
                                                }
                                                {
                                                    related.stock < 1 ?
                                                        <div className={styles.outOfStock}>
                                                            Out Of Stock
                                                        </div> : null
                                                }
                                                <img
                                                    src={related.images?.[0]?.url}
                                                    alt="Product"/>
                                            </div>
                                            <div className={styles.relatedProductTittle}>
                                                <Link className={styles.relatedProductName}
                                                      to={`/product/${related._id}`} target={'_blank'}>
                                                    {related.title}
                                                </Link>
                                                <span><p style={{
                                                    textDecoration: related.salePrice? 'line-through': 'unset'
                                                }}>${related.productPrice.toFixed(2)}</p> {
                                                    related.salePrice && `$${related.salePrice.toFixed(2)}`
                                                }</span>
                                                {/*NO RATING IN API, SO I MADE IT STATIC*/}
                                                <div className={styles.relatedProductRating}>
                                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                                    <Star size={14} weight="fill" color="#EC3D08"/>
                                                    <Star size={14} weight="fill" color="gray"/>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                                    : <div className={styles.relatedLoading}>
                                    <CircleDashed />
                                    </div>
                            }
                        </div> : <p className={styles.noRelated}>There is no related products.</p>
                    }
                </div>
            </section>
            {/*PAGE FOOTER*/}
            <ChangedFooter/>
            {/*PAGE COMPONENTS*/}
            <UiControl/>
        </div>
    )
}
