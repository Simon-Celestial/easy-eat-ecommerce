import React, {useState} from 'react'
import styles from "../AdminPageStaff.module.scss";
import {PublishButton} from "../../../AdminComponents/PublishButton/PublishButton.jsx";
import {Trash} from "@phosphor-icons/react";
import moment from "moment";

export const StaffTableRow = ({
                                  item,
                                  onDelete,
                              }) => {
const [userActive,setUserActive] = useState(true);

    return (
        <div className={styles.tableRow}>
            <div className={`${styles.name} ${styles.tableCell}`}>
                <span>{item.name} {item.surname}</span>
            </div>
            <div className={`${styles.email} ${styles.tableCell}`}>
                <span>{item.email}</span>
            </div>
            <div className={`${styles.date} ${styles.tableCell}`}>
                <span>{moment(item.createdAt).format('YYYY.MM.DD HH:mm')}</span>
            </div>
            <div className={`${styles.date} ${styles.tableCell}`}>
                <span>{moment(item.updatedAt).format('YYYY.MM.DD HH:mm')}</span>
            </div>
            <div className={`${styles.role} ${styles.tableCell}`}>
                <span>{item.role}</span>
            </div>
            <div className={`${styles.status} ${styles.tableCell}`}>
                <span style={userActive? {background: "green"} : {background:"red"}}>{userActive? "Active" : "Disabled"}</span>
            </div>
            <div className={`${styles.publish} ${styles.tableCell}`}>
                <PublishButton userActive={userActive} setUserActive={setUserActive}/>
            </div>
            <div className={`${styles.action} ${styles.tableCell}`}>
                <span><Trash onClick={() => onDelete(item.id)}/></span>
            </div>
        </div>
    )
}
