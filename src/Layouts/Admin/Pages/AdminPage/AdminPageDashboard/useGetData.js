import useApi from "../../../../../Hooks/useApi.js";
import {useEffect, useState} from "react";

export const useGetData = (url, {
    postProcess,
    id = null,
    query = {},
    shouldUpdate,
    defaultValue = null,
}) => {
    const [data, setData] = useState(defaultValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {
        GET: getData,
    } = useApi(url);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const result = await getData(id, query);
            if(result.status === 200) {
                const data = JSON.parse(result.data);
                setData((postProcess? postProcess(data): data) || defaultValue);
            } else {
                setError(JSON.parse(result.data))
            }
            setLoading(false);
        })()
    }, [id, shouldUpdate]);


    return {
        data,
        loading,
        error,
    }

}