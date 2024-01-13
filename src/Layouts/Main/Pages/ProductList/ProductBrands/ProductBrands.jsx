import React from 'react'
import styles from "../ProductList.module.scss";
import {DotOutline} from "@phosphor-icons/react";

export const ProductBrands = ({
                                      brand,
                                      onClick,
                                      active,
                                  }) => {
    return (
        <div className={`${styles.rightCategoriesItem} ${active && styles.active}`}>
            <span onClick={onClick}>
                <DotOutline weight="fill"/>
                {brand.name}
            </span>
        </div>
    )
}
