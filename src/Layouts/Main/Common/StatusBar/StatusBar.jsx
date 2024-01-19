import React from 'react'
import styles from "./StatusBar.module.scss";
import {ArrowRight} from "@phosphor-icons/react";

export const StatusBar = ({first, second, third, thirdArrowColor}) => {

    const statusBarData = [
        {
            id: 1,
            content: "Shopping Cart",
            number: 1,
            colorCount: first,
        },
        {
            id: 2,
            content: "Payment & Delivery Options",
            number: 2,
            colorCount: second,

        },
        {
            id: 3,
            number: 3,
            colorCount: third,
            content: "Order Received",
            arrowColor: thirdArrowColor,

        }
    ];

    return (
        <div className={styles.statusBar}>
            {statusBarData.map((item) => (
                <div key={item.id} className={styles.statusBarItem}>
                    <span style={{background: `${item.colorCount}`}}>{item.number}</span>
                    <p>{item.content}
                        <ArrowRight
                            style={{color: item.arrowColor}}
                        />
                    </p>
                </div>
            ))}
        </div>
    )
}
