import React, {useCallback, useState} from "react";
import axios from "axios";


const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
export const AuthContext = React.createContext({
    token: null,
    login: () => {
    },
    logout: () => {
    }
})
const AuthContextProvider = ({
                                 children
                             }) => {
    const [token, setToken] = useState(localStorage.token);

    const login = useCallback(async (logIn, password, setErrorMessage) => {
        const url = `${BASE_URL}/${API_KEY}/login`;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": logIn,
            "password": password
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        console.log({url})
        let result;
        try {
            result = await axios.post(url, raw);
        } catch (e) {
            console.log({
                e,
            })
            setErrorMessage(e.response.data.message);
            return;
        }
        if (result) {
            console.log(result);
            const tkn = result.data.token;

            localStorage.token = tkn;
            setToken(tkn);
        }
    }, [])
    const logout = useCallback((navigator) => {
        localStorage.token = null;
        setToken(null);
        navigator('/home');
    }, [])


    return <AuthContext.Provider value={{
        login,
        token,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
