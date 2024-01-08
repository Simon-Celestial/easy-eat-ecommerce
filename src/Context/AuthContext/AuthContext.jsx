import React, {useCallback, useState} from "react";
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
})
const AuthContextProvider = ({
                                 children
                             }) => {
    const [token, setToken] = useState(localStorage.token);
    const [userData, setUserData] = useState(localStorage.userData? JSON.parse(localStorage.userData): undefined);

    // LOGIN FUNC
    const login = useCallback(async (logIn, password, setErrorMessage, navigator = () => {
    }) => {
        const url = `${BASE_URL}/${API_KEY}/login`;

        const raw = JSON.stringify({
            "email": logIn,
            "password": password
        });

        let result;
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
            setErrorMessage(e.response.data.message);
            return;
        }
        if (result) {
            console.log(result);
            const tkn = result.data.data.token;
            const uData = result.data.data.user;

            localStorage.token = tkn;
            localStorage.userData = JSON.stringify(uData);
            setToken(tkn);
            setUserData(uData);
            navigator('/home');
            toast(`Successfully login as ${result?.data?.data?.user?.name + " " + result?.data?.data?.user?.surname || 'N/A'}`,
                {
                    position: "top-center",
                    style: {
                        background: "green",
                        color: "white",
                    }
                })
        }
    }, [])

    // LOGOUT FUNC
    const logout = useCallback((navigator) => {
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
    }, [])


    console.log(userData, token);
    return <AuthContext.Provider value={{
        login,
        token,
        logout,
        userData,
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
