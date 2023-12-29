import React from 'react'
import styles from "./CouponBlock.module.scss";
import {Ticket} from "@phosphor-icons/react";

export const CouponBlock = () => {
    return (
        <div className={styles.couponBlock}>
                                <span>
                                    <Ticket weight="thin" style={{transform: "rotate(-45deg)"}}/>
                                    <input type="text" placeholder="Coupon Code"/>
                                </span>
            <button type="submit">Apply Coupon</button>
        </div>
    )
}
