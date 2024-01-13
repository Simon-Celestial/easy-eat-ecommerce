import styles from "./StaffAdd.module.scss";
import {Eye, EyeSlash, Power} from "@phosphor-icons/react";
import {useCallback, useContext, useState} from "react";
import useApi from "../../../../../Hooks/useApi.js";
import toast from "react-hot-toast";
import {LoadingWrapper} from "../../../../Main/Common/LoadingWrapper/LoadingWrapper.jsx";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";


export const StaffAdd = ({staffMenuOpen, setStaffMenuOpen, update}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {
        openHandler,
    } = useContext(LayoutContext);

    const [inputState, setInputState] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const {
        POST: createAdmin,
    } = useApi('dashboard/register')

    const editField = useCallback((fieldName, value) => {
        setInputState(prev => ({
            ...prev,
            [fieldName]: value,
        }))
    }, []);
    const handleRegister = useCallback(async () => {
        setLoading(true);
        try {
            const result = await createAdmin('', inputState);
            if (result.status === 200) {
                toast(`${inputState.name} ${inputState.surname} added successfully`, {
                    style: {
                        background: "green",
                        color: "white",
                    }
                });

                update();
                setStaffMenuOpen(false);
            } else {
                toast(JSON.parse(result.data).message, {
                    style: {
                        background: 'red',
                        color: 'white'
                    }
                })
            }

        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    }, [inputState])
    return (
        <div className={`${styles.staffEditOverlay} ${staffMenuOpen && styles.staffMenuActive}`}>
            <LoadingWrapper loading={loading}>
                <div
                    className={styles.staffEditWrapper}
                >
                    <div className={styles.staffHead}>
                        <div className={styles.headTitle}>
                            <h2>Add Staff</h2>
                            <p>Add new staff member</p>
                        </div>
                        <div className={styles.closeBtn} onClick={() => setStaffMenuOpen(false)}>
                            <Power/>
                        </div>
                    </div>
                    <div className={styles.staffContent}>
                        <div className={styles.contentItem}>
                            <p>Name:</p>
                            <label htmlFor="name">
                                <input type="text"
                                       id="name"
                                       name="name"
                                       required
                                       onChange={e => editField('name', e.target.value)}
                                       value={inputState.name}
                                />
                            </label>
                        </div>
                        <div className={styles.contentItem}>
                            <p>Surname:</p>
                            <label htmlFor="surname">
                                <input type="text"
                                       id=""
                                       name="surname"
                                       onChange={e => editField('surname', e.target.value)}
                                       value={inputState.surname}
                                       required/>
                            </label>
                        </div>
                        <div className={styles.contentItem}>
                            <p>Email:</p>
                            <label htmlFor="email">
                                <input type="email"
                                       id="email"
                                       name="email"
                                       onChange={e => editField('email', e.target.value)}
                                       value={inputState.email}
                                       required
                                />
                            </label>
                        </div>
                        <div className={styles.contentItem}>
                            <p>Password:</p>
                            <label htmlFor="password">
                                <div className={styles.showPass} onClick={openHandler(setPasswordVisible)}>
                                    {passwordVisible ? <Eye/> : <EyeSlash />}

                                </div>
                                <input type={passwordVisible ? "text" : "password"}
                                       id="password"
                                       name="password"
                                       onChange={e => editField('password', e.target.value)}
                                       value={inputState.password}
                                       required
                                       className={styles.passInput}
                                />
                            </label>
                        </div>
                        <div className={styles.contentItem}>
                            <p>Staff Role</p>
                            <label htmlFor="role">
                                <select name="role" id="role" disabled>
                                    <option value="admin">Admin</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className={styles.staffButtons}>
                        <div className={styles.button} onClick={() => setStaffMenuOpen(false)}>Cancel</div>
                        <button
                            className={styles.button}
                            type="submit"
                            onClick={handleRegister}
                            disabled={loading}
                        >Add Staff
                        </button>
                    </div>
                </div>
            </LoadingWrapper>
        </div>
    )
}
