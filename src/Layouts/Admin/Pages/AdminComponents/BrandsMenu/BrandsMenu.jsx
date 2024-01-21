import React, {useCallback, useEffect, useState} from 'react'
import styles from "./BrandsMenu.module.scss";
import {CircleDashed, Power} from "@phosphor-icons/react";
import useApi from "../../../../../Hooks/useApi.js";
import {Bounce, toast} from 'react-toastify';
import {getBase64} from "../ProductsMenu/ProductsMenu.jsx";

const initialState = {
    id: null,
    image: null,
    createdAt: '',
    updatedAt: '',
    name: '',
}

export const BrandsMenu = ({
                               brandsMenuOpen,
                               setBrandsMenuOpen,
                               editMode,
                               selectedItem,
                               update,
                           }) => {
    const [state, setState] = useState(selectedItem || initialState);
    const [loading, setLoading] = useState(false);
    const {
        POST: saveBrand,
        PUT: updateBrand,
    } = useApi('dashboard/brands');

    useEffect(() => {
        if (selectedItem) setState(selectedItem); else {
            setState(initialState);
        }
    }, [selectedItem, brandsMenuOpen]);

    const handleSave = useCallback(async () => {
        try {
            setLoading(true);
            const {
                id,
                ...reqData
            } = state;

            if (id === null) {
                const result = await saveBrand(null, reqData);
                if (result.status === 200) {
                    toast.success(`Brand Added`,
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

                    setBrandsMenuOpen(false);
                    setState(initialState);
                    update();
                } else {
                    toast.error(`Error Happened`,
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
            } else {
                if (typeof reqData.image === 'object') delete reqData.image;
                const result = await updateBrand(id, reqData);

                if (result.status === 200) {
                    toast.success(`Brand Updated`,
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
                    setBrandsMenuOpen(false);
                    setState(initialState);
                    update();
                } else {
                    toast.error(`Error Happened`,
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
            }
        } catch (e) {
            toast.error(`${e}`,
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


        } finally {
            setLoading(false);
        }

    }, [editMode, state]);

    const handleAcceptImage = useCallback(async (e) => {
        const file = e.target.files[0];
        if (file.size > 1000 * 1000 * 150) {
            toast.info('File is too big');
            e.target.value = '';
            return;
        }
        if (file.size < 1000 * 5) {
            toast.info('File is too small');
            e.target.value = '';
            return;
        }
        const result = await getBase64(file);
        setState((prev) => ({
            ...prev,
            image: result,
        }))

    }, [])


    return (
        <div className={`${styles.categoryMenuOverlay} ${brandsMenuOpen && styles.categoryVisible}`}>
            {
                loading &&
                <div className={styles.loader}>
                    <CircleDashed/>
                </div>
            }

            <div className={styles.categoryMenuContent}>
                <div className={styles.categoryHead}>
                    <div className={styles.categoryHeadTitle}>
                        <h2>{!!selectedItem ? "Edit Brand" : "Add Brand"}</h2>
                        <p>{!!selectedItem ? "Edit your Product brand" : "Add your Product brand"}</p>
                    </div>
                    <div className={styles.closeCategoryBlock} onClick={() => setBrandsMenuOpen(false)}>
                        <Power/>
                    </div>
                </div>
                <div className={styles.categoryMiddle}>
                    <div className={styles.middleItem}>
                        <p>Brand Name</p>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                value={state.name}
                                onChange={({target}) => setState(prev => ({...prev, name: target.value}))}
                            />
                        </div>
                    </div>
                    <div className={styles.middleItem}>
                        <p>Brand Image</p>
                        <div className={`${styles.inputWrapper} ${styles.imageWrapper}`}>
                            <input
                                type="file"
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                onChange={handleAcceptImage}
                            />
                        </div>
                    </div>
                    <div className={`${styles.middleItem} ${styles.publishedWrapper}`}>
                        <p>Image:</p>
                        <div className={styles.imgBlock}>
                            {
                                state.image && <img
                                    src={typeof state.image === 'string' ? state.image : state.image.url}
                                    alt="Image"/>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.categoryButtons}>
                    <div className={styles.button} onClick={() => setBrandsMenuOpen(false)}>Cancel</div>
                    <button
                        onClick={handleSave}
                        className={styles.button}
                        disabled={loading}
                    >
                        {!!selectedItem ? "Edit Brand" : "Add Brand"}
                    </button>
                </div>
            </div>
        </div>
    )
}
