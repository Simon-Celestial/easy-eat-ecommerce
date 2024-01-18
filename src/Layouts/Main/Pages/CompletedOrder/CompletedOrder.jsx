import React, {useState} from 'react'
import styles from "./CompletedOrder.module.scss";
import {CheckCircle} from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import {StatusBar} from "../../Common/StatusBar/StatusBar.jsx";

export const CompletedOrder = () => {

    return (
        <div className={styles.completedOrderWrapper}>
            <StatusBar first="#EC3D08" second="#EC3D08" third="#EC3D08"/>

            <div className={styles.pageContent}>
                <h2>Your order has been received</h2>
                <CheckCircle weight="fill"/>
                <h3>Thank you for your purchase!</h3>
                <p>You will receive an order confirmation email with details of your order.</p>
                <Link to="/home">Return home</Link>
            </div>

        </div>
    )
}
