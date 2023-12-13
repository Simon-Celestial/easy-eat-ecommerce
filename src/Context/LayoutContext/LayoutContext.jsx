import React, {useState} from 'react'


const defaults = {
    headerTransform: false,
    setHeaderTransform: () => {},
}
export const LayoutContext = React.createContext(defaults);


export const LayoutContextProvider = ({
    children
                               }) => {
    const [headerTransform, setHeaderTransform] = useState(false);



    return <LayoutContext.Provider value={{
        headerTransform,
        setHeaderTransform,
    }}>
        {children}
    </LayoutContext.Provider>
}
