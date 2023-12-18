import React, {useContext, useEffect} from 'react'
import styles from "./ProductSingle.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import '@splidejs/react-splide/css';
import {ProductDetails} from "../../Common/ProductDetails/ProductDetails.jsx";


export const ProductSingle = () => {

    const {
        setHeaderColorChange,
    } = useContext(LayoutContext);


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
            <ProductDetails />
            {/*PAGE FOOTER*/}
            <Footer/>
            {/*PAGE COMPONENTS*/}
            <UiControl/>

        </div>
    )
}
