import {Axios} from "axios";
import {useCallback, useContext, useMemo} from "react";
import {AuthContext} from "../Context/AuthContext/AuthContext.jsx";


const instance = new Axios({
    baseURL: `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_API_KEY}`,
});


const useApi = (url) => {
    const {
        token,
    } = useContext(AuthContext);

    const baseConfig = useMemo(() => ({
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    }), [token])
    const GET = useCallback(async (id = '') => {

        return instance.get(`${url}/${id !== null ? id : ''}`, {
            ...baseConfig,
        })
    }, [url, baseConfig]);
    const POST = useCallback(async (id = null, data = {}) => {

        return instance.post(`${url}/${id !== null ? id : ''}`, JSON.stringify(data), {
            ...baseConfig,
        })
    }, [url, baseConfig]);
    const PUT = useCallback(async (id = null, data = {}) => {

        return instance.put(`${url}/${id !== null ? id : ''}`, JSON.stringify(data), {
            ...baseConfig,
        })
    }, [url, baseConfig]);
    const DELETE = useCallback(async (id = null) => {

        return instance.delete(`${url}/${id !== null ? id : ''}`, {
            ...baseConfig,
        })
    }, [url, baseConfig]);


    return {
        GET, POST, PUT, DELETE
    }
}

export default useApi;