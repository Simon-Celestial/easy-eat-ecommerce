import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from "./AdminProductsPage.module.scss";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {CircleDashed, Plus, Trash} from "@phosphor-icons/react";
import {AdminPagination} from "../../AdminComponents/AdminPagination/AdminPagination.jsx";
import {ProductsMenu} from "../../AdminComponents/ProductsMenu/ProductsMenu.jsx";
import {ProductRow} from "./ProductRow/ProductRow.jsx";
import useApi from "../../../../../Hooks/useApi.js";
import { toast } from 'react-toastify';
import {AdminPageProduct} from "../AdminPageProduct/AdminPageProduct.jsx";

const mapData = ({
                     _id,
                     title,
                     description,
                     productPrice,
                     salePrice,
                     brandId,
                     stock,
                     isPublish,
                     isDeal,
                     images,
                     createdAt,
                     updatedAt,
                     totalCount,


                 }) => ({
    id: _id,
    title,
    description,
    productPrice,
    brandId,
    stock,
    isPublish,
    salePrice: salePrice || productPrice,
    isDeal,
    images,
    createdAt,
    updatedAt,
    totalCount,
});
const PAGE_SIZE = 10;

export const AdminProductsPage = () => {

    const [productsMenuOpen, setProductsMenuOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [shouldUpdate, setShouldUpdate] = useState(Date.now());
    const [brands, setBrands] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchSample, setSearchSample] = useState('');
    const [sorter, setSorter] = useState('');
    const [productToReview, setProductToReview] = useState(null);


    const update = useCallback(() => {
        setShouldUpdate(Date.now());
    }, []);

    // ALIASES FOR API METHODS
    const {
        // GET ALIAS
        GET: getAllProducts,
        // DELETE ALIAS
        DELETE: deleteProduct,
    } = useApi('/dashboard/products');
    const {
        GET: getAllBrands,
    } = useApi('/dashboard/brands');

    useEffect(() => {
        (async () => {
            const result = await getAllBrands(null, {
                perPage: 9999999,
                page: 1,
            });
            const brandsRaw = JSON.parse(result.data);
            setBrands(
                brandsRaw?.data?.map(it => ({
                    value: it._id,
                    label: it.name
                }))
            )
        })();
    }, []);

    useEffect(() => {
        if (loading) return;
        (async () => {
            setLoading(true);
            try {
                const result = await getAllProducts(null, {
                    page: 1,
                    perPage: 999999,
                });
                if (result.status === 200) {
                    const dataRaw = JSON.parse(result.data).data.product;
                    setData(dataRaw.map(it => mapData(it)));
                    setLoading(false);
                }
                else {
                    console.log(result)
                }
            } catch (e) {
                setLoading(false);
            }

        })();
    }, [shouldUpdate]);

// OPEN EDIT MENU
    const handleOpenEditMenu = (id) => {
        setEditMode(true);
        setProductsMenuOpen(true);
        const initialOjb = data.find(it => it.id === id);
        setSelectedItem({
            ...initialOjb,
        });
    }
    const handleOpenMenu = () => {
        setEditMode(false);
        setProductsMenuOpen(true);
        setSelectedItem(null);
    }


    // SORTING
    const dataSorted = useMemo(() => {
        if (!sorter || sorter === '_') return data || [];
        const [sortField, sortOrder] = sorter.split('_');
        const isDesc = sortOrder !== 'asc' ? -1 : 1;
        const sorted = [...data];
        return sorted.sort((a, b) => a[sortField] > b[sortField] ? (1 * isDesc) : (-1 * isDesc)) || [];
    }, [data, sorter])

    // FILTERING
    const dataFiltered = useMemo(() => {
        return dataSorted?.filter((it) => {
            return it.title?.toLowerCase().includes(searchSample?.toLowerCase());
        }) || [];
    }, [dataSorted, sorter, searchSample, brands]);


    // PAGINATION
    const dataPaginated = useMemo(() => {
        const newArr = [...dataFiltered];
        return newArr.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
    }, [dataFiltered, sorter, currentPage]);

    // DELETE PRODUCT
    const handleDelete = useCallback(async (id) => {
        try {
            setLoading(true)
            const result = await deleteProduct(id);
            if (result.status === 200) {
                toast('Product Deleted', {
                    style: {
                        background: "red",
                        color: "white",
                    }
                });
                if (((dataFiltered.length - 1) / PAGE_SIZE) < (currentPage + 1)) {
                    setCurrentPage(prev => Math.max(prev - 1, 0));
                }
                update();
            }
        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }

    }, [dataFiltered, currentPage])

    return (
        <div className={styles.adminProductPageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <ProductsMenu
                productsMenuOpen={productsMenuOpen}
                setProductsMenuOpen={setProductsMenuOpen}
                editMode={editMode}
                brands={brands}
                update={update}
                selectedItem={selectedItem}
            />
            {
                productToReview ? <AdminPageProduct
                        brands={brands}
                        data={productToReview}
                        onReturn={() => setProductToReview(null)}/>
                    : <div className={styles.adminProductPageContent}>
                        <BlockTitle title="Products"/>
                        <div className={styles.productsManipulation}>
                            <div className={styles.filterBlocks}>
                                <div className={styles.inputBlocks}>
                                    <label htmlFor="">
                                        <input
                                            type="text"
                                            placeholder="Search Product"
                                            value={searchSample}
                                            onChange={(e) => setSearchSample(e.target.value)}
                                        />
                                    </label>
                                    <label htmlFor="">
                                        <select value={sorter} onChange={e => setSorter(e.target.value)}>
                                            <option value="_">Without sort</option>
                                            <option value="salePrice_asc">Price: Low to High</option>
                                            <option value="salePrice_desc">Price: High to Low</option>
                                            <option value="stock_asc">Stock: Low to High</option>
                                            <option value="stock_desc">Stock: High to Low</option>
                                        </select>
                                    </label>
                                </div>
                                <div className={styles.filterButtons}>
                                    <button onClick={() => setSearchSample("")}>Clear</button>
                                </div>
                            </div>
                            <div className={styles.addButtons}>
                                <div className={styles.button} onClick={handleOpenMenu}>
                                    <p>Add Product</p>
                                    <Plus/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productsTableBlock}>
                            {loading
                                &&
                                <div className={styles.loadingBox}>
                                    <CircleDashed/>
                                </div>
                            }
                            <div className={styles.overflow}>
                                <div className={styles.table}>
                                    <div className={`${styles.tableRow} ${styles.headRow}`}>
                                        <div className={`${styles.tableCell} ${styles.name}`}>
                                            <p>Product Name</p>
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.category}`}>
                                            <p>Category</p>
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.price}`}>
                                            <p>Price</p>
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.sale}`}>
                                            <p>Sale Price</p>
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.stock}`}>
                                            <p>Stock</p>
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.status}`}>
                                            <p>Status</p>
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.view}`}>
                                            <p>View</p>
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.publish}`}>
                                            <p>Published</p>
                                        </div>
                                        <div className={`${styles.tableCell} ${styles.actions}`}>
                                            <p>Actions</p>
                                        </div>
                                    </div>
                                    {!loading &&
                                        dataPaginated.map((item) => (
                                            <ProductRow
                                                key={item.id}
                                                data={item}
                                                brands={brands}
                                                handleOpenEditMenu={handleOpenEditMenu}
                                                handleDelete={handleDelete}
                                                update={update}
                                                onReview={() => setProductToReview(item)}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <AdminPagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                pageSize={PAGE_SIZE}
                                totalElements={dataFiltered.length}
                            />
                        </div>
                    </div>
            }
        </div>
    )
}
