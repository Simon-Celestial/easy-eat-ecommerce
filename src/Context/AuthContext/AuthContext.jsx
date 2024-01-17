import React, {useCallback, useMemo, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";


export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API_KEY = import.meta.env.VITE_API_KEY;
export const AuthContext = React.createContext({
    token: null,
    login: () => {
    },
    logout: () => {
    },
    userData: null,
    loading: false,
    isAdmin: false,
})
const AuthContextProvider = ({
                                 children
                             }) => {
    const [token, setToken] = useState(localStorage.token);
    const [userData, setUserData] = useState(localStorage.userData? JSON.parse(localStorage.userData): undefined);

    const isAdmin = useMemo(() => userData?.roles?.includes('admin'), [userData])
    // Login Loading State
    const [loading, setLoading] = useState(false);


    // LOGIN FUNC
    const login = useCallback(async (logIn, password, setErrorMessage, onFinish = () => {}) => {
        const url = `${BASE_URL}/${API_KEY}/login`;

        const raw = JSON.stringify({
            "email": logIn,
            "password": password
        });

        let result;
        setLoading(true);
        try {
            result = await axios.post(url, raw, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        } catch (e) {
            console.log({
                e,

            })
            setLoading(false);
            setErrorMessage(e.response.data.message);
            return;
        }
        if (result) {
            const tkn = result.data.data.token;
            const uDataRaw = result.data.data.user;
            const rolesArray = ['user', 'admin', 'superadmin'];
            const uData = {
                ...uDataRaw,
                roles: rolesArray.slice(0, rolesArray.indexOf(uDataRaw.role) + 1),
            }

            localStorage.token = tkn;
            localStorage.userData = JSON.stringify(uData);
            setLoading(false);
            setToken(tkn);
            setUserData(uData);
            toast(`Successfully login as ${result?.data?.data?.user?.name + " " + result?.data?.data?.user?.surname || 'N/A'}`,
                {
                    position: "top-center",
                    style: {
                        background: "green",
                        color: "white",
                    }
                });
            onFinish();
        }
    }, [])

    // LOGOUT FUNC
    const logout = useCallback((navigator, callback) => {
        delete localStorage.token;
        delete localStorage.userData;
        setToken(undefined);
        setUserData(undefined);
        navigator('/home');
        toast('You have logged out',
            {
                position: "top-center",
                style: {
                    background: "red",
                    color: "white",
                }
            }
        )
        callback();
    }, [])


    return <AuthContext.Provider value={{
        login,
        token,
        logout,
        userData,
        loading,
        isAdmin,
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
