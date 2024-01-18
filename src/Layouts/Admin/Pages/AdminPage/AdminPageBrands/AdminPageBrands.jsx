import React, {useCallback, useEffect, useMemo, useState} from 'react'
import styles from "./AdminPageBrands.module.scss";
import {AdminSideMenu} from "../../AdminComponents/AdminSideMenu/AdminSideMenu.jsx";
import {AdminHeader} from "../../AdminComponents/AdminHeader/AdminHeader.jsx";
import {BlockTitle} from "../../AdminComponents/BlockTitle/BlockTitle.jsx";
import {AdminPagination} from "../../AdminComponents/AdminPagination/AdminPagination.jsx";
import {BrandsMenu} from "../../AdminComponents/BrandsMenu/BrandsMenu.jsx";
import {AdminBrandsRow} from "./AdminBrandsRow/AdminBrandsRow.jsx";
import useApi from "../../../../../Hooks/useApi.js";
import {Bounce, toast} from 'react-toastify';
import {CircleDashed} from "@phosphor-icons/react";

// FOR PAGINATION
const PAGE_SIZE = 10;
const mapData = ({
                     _id,
                     name,
                     createdAt,
                     updatedAt,
                     image,
                 }) => ({
    id: _id,
    image,
    createdAt,
    updatedAt,
    name,
});

export const AdminPageBrands = () => {
    const [brandsMenuOpen, setBrandsMenuOpen] = useState(false);
    const [brands, setBrands] = useState([]);
    const [searchSample, setSearchSample] = useState('');
    const [sorter, setSorter] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(Date.now());

    // UPDATE FUNC
    const update = useCallback(() => {
        setShouldUpdate(Date.now());
    }, []);

    // ADDING ALIASES
    const {
        GET: getAllBrands,
        DELETE: deleteBrand,
    } = useApi('dashboard/brands')

    // OPEN EDIT MENU
    const handleOpenEditMenu = (item) => {
        setSelectedItem(item);
        setBrandsMenuOpen(true);
    }

    // GET BRANDS DATA
    useEffect(() => {
        if (loading) return;
        (async () => {
            setLoading(true);
            try {
                const result = await getAllBrands(null, {
                    perPage: 9999999,
                    page: 1,
                });
                const brandsRaw = JSON.parse(result.data);
                setBrands(
                    brandsRaw?.data?.map(it => mapData(it)));
                setLoading(false);
            } catch (e) {
                setLoading(false)
            }
        })();

    }, [shouldUpdate]);

    // DELETE
    const handleDelete = useCallback(async (id) => {
        try {
            setLoading(true)
            const result = await deleteBrand(id);
            if (result.status === 200) {
                toast.error(`Brand Deleted`,
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
                update();
            }
        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }

    }, [])

    // BRANDS FILTER
    const dataFiltered = useMemo(() => {
        return brands?.filter((it) => {
            return it.name.toLowerCase().includes(searchSample.toLowerCase());
        }) || [];
    }, [searchSample, brands])



    const dataPaginated = useMemo(() => {
        const newArr = [...dataFiltered];
        return newArr.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);
    }, [dataFiltered, sorter, currentPage]);

    return (
        <div className={styles.categoriesPageWrapper}>
            <AdminHeader/>
            <AdminSideMenu/>
            <BrandsMenu
                brandsMenuOpen={brandsMenuOpen}
                setBrandsMenuOpen={setBrandsMenuOpen}
                selectedItem={selectedItem}
                update={update}
            />
            <div className={styles.categoriesPageContent}>
                <BlockTitle title="Brands"/>
                <div className={styles.categoryManipulation}>
                    <div className={styles.searchBlock}>
                        <label htmlFor="">
                            <input
                                type="text"
                                placeholder="Enter brand name..."
                                value={searchSample}
                                onChange={({target: {value}}) => setSearchSample(value)}
                            />
                        </label>
                        <div className={styles.searchButtons}>
                            <button onClick={() => setSearchSample("")}>Clear</button>
                        </div>
                    </div>
                    <div className={styles.addCategory}>
                        <button onClick={() => handleOpenEditMenu(null)}>Add Brand</button>
                    </div>
                </div>
                <div className={styles.categoryTableWrapper}>
                    {loading
                        &&
                        <div className={styles.loadingCircle}>
                            <CircleDashed />
                        </div>
                    }
                    <div className={styles.categoryOverflow}>
                        <div className={styles.categoryTable}>
                            <div className={`${styles.tableRow} ${styles.headRow}`}>
                                <div className={`${styles.id} ${styles.box}`}>
                                    <p>Id</p>
                                </div>
                                <div className={`${styles.icon} ${styles.box}`}>
                                    <p>Icon</p>
                                </div>
                                <div className={`${styles.name} ${styles.box}`}>
                                    <p>Name</p>
                                </div>
                                <div className={`${styles.date} ${styles.box}`}>
                                    <p>Date Created</p>
                                </div>
                                <div className={`${styles.date} ${styles.box}`}>
                                    <p>Date Updated</p>
                                </div>
                                <div className={`${styles.action} ${styles.box}`}>
                                    <p>Actions</p>
                                </div>
                            </div>
                            {
                                !loading &&
                                dataPaginated.map(brand => (
                                    <AdminBrandsRow
                                        brand={brand}
                                        handleOpenEditMenu={() => handleOpenEditMenu(brand)}
                                        handleDelete={handleDelete}
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
                        handleDelete={handleDelete}
                    />
                </div>

            </div>
        </div>
    )
}
