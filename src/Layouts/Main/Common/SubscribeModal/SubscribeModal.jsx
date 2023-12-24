import React, {useContext, useEffect, useState} from 'react'
import styles from "./SubscribeModal.module.scss";
import {Envelope, X} from "@phosphor-icons/react";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
export const SubscribeModal = () => {
    const [subscribeModalOpen,setSubscribeModalOpen] = useState(false);
    const {
        handleWidgetClose,
    } = useContext(LayoutContext);

    useEffect(() => {
        const action = () => {
            handleWidgetClose(setSubscribeModalOpen);
        }
        document.addEventListener("click", action);
        return () => {
            document.removeEventListener("click", action);
        };
    }, []);
    useEffect(() => {
        setTimeout(()=> {
            setSubscribeModalOpen(true)
        },3000)
    }, []);

    return (
        <section className={`${styles.subscribeModalSection} ${!subscribeModalOpen && styles.modalDisabled}`} onClick={ev=>{ev.stopPropagation()}}>
            <div className={styles.modalContent}>
                <div className={styles.modalLeft}>
                    <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/01/img-114-copyright.jpg" alt="Food"/>
                </div>
                <div className={styles.modalRight}>
                    <div className={styles.closeModal} onClick={() => handleWidgetClose(setSubscribeModalOpen)}>
                        <X />
                    </div>
                    <h2>Subscribe for the updates!</h2>
                    <form action="#" className={styles.formWrapper}>
                        <label htmlFor="userMail" className={styles.mailInputWrapper}>
                            <Envelope  />
                            <input required type="email" id="userName" name="userName" placeholder="Enter Your Email Address" tabIndex={1}/>
                        </label>
                        <label htmlFor="agreementWrapper" className={styles.agreementWrapper}>
                            <input required type="checkbox" tabIndex={2}/>
                            I agree to the
                            <a href="https://easyeat.ancorathemes.com/privacy-policy/" target="_blank">
                                Privacy Policy
                            </a>
                        </label>
                        <button type="submit" tabIndex={3}>Subscribe</button>
                    </form>
                </div>
            </div>

        </section>
    )
}
