import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react'
import useApi from "../../Hooks/useApi.js";
import {AuthContext} from "../AuthContext/AuthContext.jsx";


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
    cache: [],
    loading: false,

})
export const UserDataContextProvider = ({
                                            children,
                                        }) => {
    const [basket, setBasket] = useState([]);
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.wishlist || '{}'));
    const [cache, setCache] = useState(JSON.parse(localStorage.cache || '[]'));
    const [shouldUpdate, setShouldUpdate] = useState(Date.now());
    const [cacheLoading, setCacheLoading] = useState(false);
    const [basketOperationInProgress, setBasketOperationInProgress] = useState(false);


    const loading = useMemo(() => {
        return basketOperationInProgress || cacheLoading;
    }, [basketOperationInProgress, cacheLoading])
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
        if (!token)
            localStorage.basket = JSON.stringify(basket);
    }, [basket]);
    useEffect(() => {
        localStorage.cache = JSON.stringify(cache);
    }, [cache]);
    useEffect(() => {
        localStorage.wishlist = JSON.stringify(wishlist);
    }, [wishlist]);

    useEffect(() => {
        if (token) {
            GET().then(result => {
                if (result.status === 200) {
                    setBasket(JSON.parse(result.data).data)
                }
            })
        } else {
            setBasket(JSON.parse(localStorage.basket || '[]'))
        }
    }, [token, shouldUpdate]);


    const update = useCallback((id, count) => {
        if (token) {
            PUT(id, {productCount: count}).then(res => {
                if (res.status === 200) {
                    setShouldUpdate(Date.now());
                }
            })
        } else {
            setBasket(prev => ({
                ...prev,

            }));
        }
    }, [token]);
    const add = useCallback((...products) => {
                const basketItems = products.map(it => ({
                    productId: it._id,
                    productCount: it.count,
                }));
                if (token) {
                    POST(null, {
                        basket: basketItems,
                    }).then(res => {
                        if (res.status === 200) {
                            setShouldUpdate(Date.now());
                        }
                    })
                } else {
                    setBasket(prev => [...prev, ...basketItems]);
                }
            },
            [token]
        )
    ;
    const remove = useCallback((id) => {
        if (token) {
            DELETE(id).then(res => {
                if (res.status === 200) {
                    setShouldUpdate(Date.now());
                }
            })
        } else {
            setBasket(prev => {
                return prev.filter(it => it.productId !== id);
            });
        }

    }, []);
    console.log({cache})
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
            loading,
        }}>
            {children}
        </UserDataContext.Provider>
    )
}
