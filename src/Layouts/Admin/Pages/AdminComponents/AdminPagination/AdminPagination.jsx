import React, {useMemo} from 'react'
import styles from "./AdminPagination.module.scss";
import {CaretDown, CaretUp} from "@phosphor-icons/react";

export const AdminPagination = ({
                                    pageSize,
                                    totalElements,
                                    currentPage,
                                    setCurrentPage,
                                    theme = 'dark',
                                }) => {

    const totalPages = useMemo(() => {
        return Math.ceil(totalElements / pageSize);
    }, [pageSize, totalElements])
    return (
        <div className={`${styles.paginationBlock} ${theme === 'dark'? styles.paginationDark: styles.paginationLight}`}>
            <div className={`${styles.paginationItem} ${styles.leftArrow}`}>
                <CaretUp
                    onClick={() => setCurrentPage(Math.max(currentPage - 1, 0))}
                    weight="regular"
                />
            </div>
            {
                new Array(totalPages || 0).fill(0).map((it, i) => {
                    const isActive = currentPage === i;
                    return (<div
                        key={i}
                        className={styles.paginationItem}
                        onClick={() => setCurrentPage(i)}
                        style={isActive ? {
                            background: theme === "dark" ?'#EC3D08' : "#0C0F26",
                            color: theme === "dark" ? "white" : "white",
                        } : {}}
                    >{i + 1}</div>);
                })
            }
            <div className={`${styles.paginationItem} ${styles.rightArrow}`}>
                <CaretDown
                    onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages - 1))}
                    weight="regular"
                />
            </div>
        </div>

    )
}
