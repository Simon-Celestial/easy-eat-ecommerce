import React, {useCallback, useState} from 'react'
import styles from "../AdminProductsPage.module.scss";
import {LinkSimple, Eye, Trash, Wrench} from "@phosphor-icons/react";
import {PublishButton} from "../../../AdminComponents/PublishButton/PublishButton.jsx";
import useApi from "../../../../../../Hooks/useApi.js";
import {Bounce, toast} from 'react-toastify';
import {Link} from "react-router-dom";

export const ProductRow = ({
                               handleOpenEditMenu,
                               data,
                               brands,
                               handleDelete,
                               update,
                               onReview,
                           }) => {
    const [loading, setLoading] = useState(false);
    const {
        PUT: updateProduct,
    } = useApi('dashboard/products')
    const handlePublish = useCallback(async () => {
        const {
            id, ...rest
        } = data;
        rest.isPublish = !rest.isPublish;
        setLoading(true);
        const result = await updateProduct(id, rest)
        if (result.status === 200) {
            update();
            toast.success(rest.isPublish ? 'Product is now published' : 'Product publish stopped',
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
        }

        setLoading(false);

    }, [data]);
    return (
        <div className={`${styles.tableRow}`} style={{
            filter: loading ? 'blur(2px)' : 'none',
            transition: 'blur 200ms ease',
        }}>
            <div className={`${styles.tableCell} ${styles.name}`}>
                <div className={styles.imgBox}>
                    <img
                        src={data?.images?.[0]?.url || `/public/images/noImg.png`}
                        alt="Product"/>
                </div>
                <p>{data.title}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.category}`}>
                <p>{brands.find(it => it.value === data.brandId)?.label}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.price}`}>
                <p>${data.productPrice.toFixed(2)}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.sale}`}>
                <p>{data.salePrice === data.productPrice ? 'No Sale'
                    : `$${data.salePrice?.toFixed(2)}`}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.stock}`}>
                <p>{data.stock}</p>
            </div>
            <div className={`${styles.tableCell} ${styles.status}`}>
                <span style={{
                    background: data.stock > 0 ? "green" : "red"
                }}>
                    {data.stock > 0 ? "In stock" : "Out of Stock"}</span>
            </div>
            <div className={`${styles.tableCell} ${styles.view}`}>
                <span onClick={onReview} style={{
                    cursor: 'pointer'
                }}><Eye/></span>
                <Link to={`/product/${data.id}`} style={{
                    cursor: 'pointer'
                }} target={'_blank'}><LinkSimple/></Link>
            </div>
            <div className={`${styles.tableCell} ${styles.publish}`}>
                <div onClick={handlePublish}>
                    <PublishButton userActive={data.isPublish}/>
                </div>
            </div>
            <div className={`${styles.tableCell} ${styles.actions}`}>
                <span onClick={() => handleOpenEditMenu(data.id)}><Wrench/></span>
                <span><Trash onClick={() => handleDelete(data.id)}/></span>
            </div>
        </div>

    )
}
