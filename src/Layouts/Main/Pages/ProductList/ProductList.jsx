import styles from "./ProductList.module.scss";
import React, {useCallback, useContext, useEffect, useState} from 'react'
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Header} from "../../Components/Header/Header.jsx";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {ArrowRight, CircleDashed, MagnifyingGlass} from "@phosphor-icons/react";
import RangeSlider from "../../Common/RangeSlider/RangeSlider.jsx";
import {ProductCard} from "./ProductCard/ProductCard.jsx";
import {BasketProductCard} from "./BasketProductCard/BasketProductCard.jsx";
import {ProductStock} from "./ProductsStock/ProductStock.jsx";
import {ProductBrands} from "./ProductBrands/ProductBrands.jsx";
import useApi from "../../../../Hooks/useApi.js";
import {AdminPagination} from "../../../Admin/Pages/AdminComponents/AdminPagination/AdminPagination.jsx";
import {UserDataContext} from "../../../../Context/UserDataContext/UserDataContext.jsx";
import {Link} from "react-router-dom";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";
import tagsData from "../../../../../public/ShopPageData/tags.json"


const PER_PAGE = 6;
const defaultFilters = {
    isPublish: true,
}
export const ProductList = () => {
    // LAYOUT CONTEXT
    const {
        setHeaderColorChange,
        setBasketVisible,
    } = useContext(LayoutContext);

    // USER DATA CONTEXT
    const {
        basket,
        cache,
        loading: basketLoading,
    } = useContext(UserDataContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON ON
    useEffect(() => {
        setBasketVisible(true);
    }, []);

    // PAGE STATES
    const [searchSample, setSearchSample] = useState('')
    const [page, setPage] = useState(0);
    const [productsResponse, setProductsResponse] = useState(null);
    const [priceBounds, setPriceBounds] = useState([0, 500]);
    const [brands, setBrands] = useState([]);
    const [filters, setFilters] = useState(defaultFilters);

    // PAGE LOADING STATES
    const [brandsLoading, setBrandsLoading] = useState(true);
    const [loading, setLoading] = useState(true);

    const {
        GET: getAllProducts,
    } = useApi('/site/products');
    const {
        GET: getAllBrands,
    } = useApi('/site/brands');

    // DATA LOAD FUNC
    const loadData = useCallback((pageOverride = null) => {
        setLoading(true);
        (async () => {
            const result = await getAllProducts(null, {
                page: pageOverride !== null ? pageOverride : (page + 1),
                perPage: PER_PAGE,
                ...filters,
            });
            if (result.status === 200) {
                const data = JSON.parse(result.data);
                setProductsResponse(data.data)
            }
            setLoading(false);
        })()
    }, [page, filters])

    useEffect(() => {
        loadData();
    }, [page]);


    useEffect(() => {
        if (page === 0) {
            loadData();
        }
        else setPage(0);
    }, [filters]);


    useEffect(() => {
        setBrandsLoading(true);
        (async () => {
            const result = await getAllBrands();
            if (result.status === 200) {
                const data = JSON.parse(result.data);
                setBrands(data.data)
                setBrandsLoading(false);
            }
        })()
    }, []);
    return (
        <div className={styles.productListWrapper}>
            {/*HEADER*/}
            <Header/>
            <main className={styles.productListMain}>
                <PageNameSection title="Shop"/>
                {/*ALL PRODUCTS SECTION*/}
                <section className={styles.allProductsSection}>
                    <div className={styles.allProductsContent}>
                        <div className={styles.leftBlockProducts}>
                            <div className={styles.leftBlockSorting}>
                                {
                                    (productsResponse && productsResponse?.product?.length > 0) ?
                                        <p>Showing {
                                            page * PER_PAGE + 1
                                        }–{
                                            Math.min((page + 1) * PER_PAGE, productsResponse?.totalCount || "")
                                        } of {productsResponse?.totalCount || ""} results</p>
                                        :
                                        null
                                }
                                {
                                    productsResponse?.product?.length === 0?
                                    <div className={styles.noResults}>
                                        Unfortunately, we did not find anything matching your request.
                                    </div>
                                    :
                                    null
                                }
                            </div>
                            {
                                productsResponse ?
                                    <div className={styles.leftAllProducts}>
                                        {
                                            productsResponse.product.map(product =>
                                                <ProductCard
                                                    product={product}
                                                    loading={loading}
                                                />)

                                        }
                                    </div>
                                    :
                                    <div className={styles.productsLoading}>
                                        <CircleDashed/>
                                    </div>
                            }
                            {
                                (productsResponse && productsResponse?.product?.length > 0) ?
                                    <AdminPagination
                                        currentPage={page}
                                        setCurrentPage={setPage}
                                        totalElements={productsResponse?.totalCount}
                                        pageSize={PER_PAGE}
                                        theme="light"
                                    />
                                    :
                                    null
                            }
                        </div>
                        <div className={styles.rightBlockFilter}>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Cart</p>
                                </div>
                                <div className={styles.rightBasketContent}>
                                    {basket.length < 1 ?
                                        <div className={styles.emptyBasket}>
                                            <p>No products in the cart.</p>
                                        </div>
                                        :
                                        <div className={styles.rightBasketProducts}>
                                            <div className={styles.productsCards}>
                                                {basketLoading && basket.length > 0 ?
                                                    <div className={styles.basketProductLoader}>
                                                        <CircleDashed/>
                                                    </div>
                                                    :
                                                    basket.map(bItem => <BasketProductCard
                                                        key={bItem._id}
                                                        item={bItem}
                                                        data={(cache || []).find(it => it._id === bItem.productId)}
                                                    />)
                                                }
                                            </div>
                                            <div className={styles.productSubtotal}>
                                                <span>Subtotal:<p>${basket.map(it => {
                                                    const item = cache.find(cached => cached._id === it.productId);
                                                    return (item.salePrice ? item.salePrice : item.productPrice) * it.productCount
                                                }).reduce((a, b) => a + b, 0).toFixed(2)}</p></span>
                                            </div>
                                            <div className={styles.cartOperations}>
                                                <Link to="/cart">View Cart</Link>
                                                <Link to="/auth/checkout">Checkout</Link>
                                            </div>

                                        </div>

                                    }

                                </div>
                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Search</p>
                                </div>
                                <div className={styles.rightSearchContent}>
                                    <button
                                        onClick={() => {
                                            setFilters(prev => ({
                                                ...prev,
                                                search: searchSample,
                                            }))
                                        }}
                                    ><MagnifyingGlass weight="light"/></button>
                                    <input
                                        type="text"
                                        placeholder="Search for products ..."
                                        value={searchSample}
                                        onKeyDown={({key}) => {
                                            if (key === 'Enter') setFilters(prev => ({
                                                ...prev,
                                                search: searchSample,
                                            }))
                                        }}
                                        onChange={({target}) => {
                                            setSearchSample(target.value)

                                            if (target.value === '') {
                                                setFilters(prev => {
                                                    const {search, ...newval} = prev;
                                                    return newval;
                                                })
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Availability</p>
                                </div>
                                <div className={styles.availabilityContent}>
                                    {
                                        ['inStock', 'outOfStock'].map((stockState, i) => (
                                            <ProductStock
                                                key={i}
                                                label={stockState}
                                                active={stockState === filters.stock}
                                                onClick={() => setFilters(prev => {
                                                    if (prev.stock === stockState) {
                                                        const {stock, ...rest} = prev;
                                                        return rest;
                                                    }
                                                    else {
                                                        return {
                                                            ...prev,
                                                            stock: stockState,
                                                        }
                                                    }
                                                })}/>
                                        ))
                                    }

                                </div>
                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Categories</p>
                                </div>
                                {
                                    brands ?
                                        <div className={styles.rightCategoriesContent}>
                                            {
                                                !brandsLoading ?
                                                    brands.map(brand => <ProductBrands
                                                        id={brand._id}
                                                        brand={brand}
                                                        onClick={() => setFilters(prev => {
                                                            if (prev.brandId === brand._id) {
                                                                const {brandId, ...rest} = prev;
                                                                return rest;
                                                            }
                                                            return ({
                                                                ...prev,
                                                                brandId: brand._id,
                                                            });
                                                        })}
                                                        active={brand._id === filters.brandId}
                                                    />)
                                                    : <div className={styles.brandsLoading}>
                                                        <CircleDashed/>
                                                    </div>
                                            }
                                        </div> : <p className={styles.noBrands}>There is no brands.</p>
                                }


                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Filter</p>
                                </div>
                                <div className={styles.rightFilterContent}>
                                    <RangeSlider
                                        min={0}
                                        max={500}
                                        bounds={priceBounds}
                                        setBounds={setPriceBounds}
                                    />
                                    <div className={styles.filterPrice}>
                                        Price:
                                        <p>${priceBounds[0]}</p>
                                        <p>-</p>
                                        <p>${priceBounds[1]}</p>
                                    </div>
                                    <button
                                        style={{
                                            opacity: loading ? 0.5 : 1,
                                            boxShadow: loading ? '0 0 5px black' : 'unset'
                                        }}
                                        type="submit"
                                        disabled={loading}
                                        onClick={() => {
                                            setFilters(prev => ({
                                                ...prev,
                                                maxPrice: priceBounds[1],
                                                minPrice: priceBounds[0],
                                            }))
                                        }}
                                    >
                                        Filter
                                        <ArrowRight/>
                                    </button>
                                </div>
                            </div>
                            <div className={styles.rightBlockContainer}>
                                <div className={styles.containerHeading}>
                                    <p>Tags</p>
                                </div>
                                <div className={styles.rightTagsContent}>
                                    {tagsData.map(tag => (
                                        <div className={styles.tagItem} key={tag.id}>
                                            <p>
                                                {tag.title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            {/*FOOTER*/}
            <ChangedFooter/>
            {/*COMMON COMPONENTS FOR UI */}
            <UiControl/>
        </div>
    )
}
