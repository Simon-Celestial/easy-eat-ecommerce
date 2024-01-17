import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react'
import useApi from "../../Hooks/useApi.js";
import {AuthContext} from "../AuthContext/AuthContext.jsx";
import toast from "react-hot-toast";


export const UserDataContext = React.createContext({
    basket: {},
    setBasket: () => {
    },
    wishlist: {},
    setWishlist: () => {
    },
    add: () => {

    },
    remove: (id) => {
    },
    update: () => {
    },
    refresh: () => {},
    cache: [],
    cacheLoading: false,
    loading: false,
    basketOperationInProgress: false,
    basketFetching: false,

})
export const UserDataContextProvider = ({
                                            children,
                                        }) => {
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.wishlist || '{}'));
    const [cache, setCache] = useState(JSON.parse(localStorage.cache || '[]'));
    const [shouldUpdate, setShouldUpdate] = useState(Date.now());
    const [cacheLoading, setCacheLoading] = useState(false);
    const [basketOperationInProgress, setBasketOperationInProgress] = useState(false);
    const [basketFetching, setBasketFetching] = useState(false);


    const loading = useMemo(() => {
        return basketOperationInProgress || cacheLoading || basketFetching;
    }, [basketOperationInProgress, cacheLoading, basketFetching])
    const {
        GET,
        DELETE,
        PUT,
        POST,
    } = useApi('site/basket');
    const {
        GET: getProducts,
    } = useApi('site/products');
    const {
        token,
    } = useContext(AuthContext);
    const [basket, setBasket] = useState(token? []: JSON.parse(localStorage.basket || '[]'));

    useEffect(() => {
        (async () => {
            setCacheLoading(true);
            const result = await getProducts(null, {
                page: 1,
                perPage: 99999,
            });
            if (result.status === 200) {
                const data = JSON.parse(result.data);
                setCache(data.data.product || []);
            }

            setCacheLoading(false);

        })()

    }, []);
    useEffect(() => {
        if (!token) localStorage.basket = JSON.stringify(basket);
    }, [basket, token]);
    useEffect(() => {
        localStorage.cache = JSON.stringify(cache);
    }, [cache]);
    useEffect(() => {
        localStorage.wishlist = JSON.stringify(wishlist);
    }, [wishlist]);

    useEffect(() => {
        if (token) {
            setBasketFetching(true);
            GET().then(result => {
                if (result.status === 200) {
                    setBasket(JSON.parse(result.data).data)
                }
                setBasketFetching(false);
            })
        }
    }, [token, shouldUpdate]);


    // BASKET UPDATE
    const update = useCallback((id, count, shouldUpdate = true) => {
        if (token) {
            setBasketOperationInProgress(true);
            PUT(id, {productCount: count}).then(res => {
                if (res.status === 200 && shouldUpdate) {
                    setShouldUpdate(Date.now());
                }
            })
                .finally(() => {
                    setBasketOperationInProgress(false);
                });
        }
        else {
            setBasket((prev) => {
                const prevData = [...prev];
                prevData.find(it => it._id === id).productCount = count;
                return prevData;
            });
        }
    }, [token, basket]);

    // BASKET ADD
    const add = useCallback((...products) => {
                const basketItems = products.map(it => ({
                    productId: it._id,
                    productCount: it.count,
                    _id: Date.now().toString(),
                }));
                if (token) {
                    setBasketOperationInProgress(true);
                    POST(null, {
                        basket: basketItems,
                    }).then(res => {
                        if (res.status === 200) {
                            setShouldUpdate(Date.now());
                        }
                    })
                        .finally(() => {
                            setBasketOperationInProgress(false);
                        });
                }
                else {
                    setBasket(prev => [...prev, ...basketItems]);
                }
            },
            [token]
        )
    ;

    // BASKET REMOVE
    const remove = useCallback((id, shouldUpdate = true) => {
        if (token) {
            setBasketOperationInProgress(true);
            DELETE(id).then(res => {
                if (res.status === 200 && shouldUpdate) {
                    setShouldUpdate(Date.now());
                }
            })
                .finally(() => {
                    setBasketOperationInProgress(false);
                });
        }
        else {
            setBasket(prev => prev.filter(it => it._id !== id));
        }

    }, [token, setShouldUpdate, setBasket]);
    return (
        <UserDataContext.Provider value={{
            basket,
            setBasket,
            wishlist,
            setWishlist,
            remove,
            update,
            add,
            cache,
            cacheLoading,
            loading,
            basketFetching,
            basketOperationInProgress,
            refresh: () => setShouldUpdate(Date.now()),
        }}>
            {children}
        </UserDataContext.Provider>
    )
}
