import React, {useCallback, useState} from 'react'


const defaults = {
    headerTransform: false,
    setHeaderTransform: () => {},
    handleWidgetOpen: () => {},
    handleWidgetClose: () => {},
    openHandler: () => {},
    mobileMenuOpen: false,
    setMobileMenuOpen: () => {},
}
export const LayoutContext = React.createContext(defaults);


export const LayoutContextProvider = ({
    children
                               }) => {
    // HEADER TRANSFORMATION STATE
    const [headerTransform, setHeaderTransform] = useState(false);

    // MOBILE MENU OPEN AND CLOSE STATE
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false);

    // FUNCTION TO OPEN WIDGETS WITH CLICK
    const handleWidgetOpen = (setIsOpen) => useCallback((event) => {
        event.stopPropagation();
        setIsOpen(true);
    }, []);

    // FUNCTION TO CLOSE WIDGETS WITH CLICK
    const handleWidgetClose = (setIsOpen) => {
        setIsOpen(false);
    }

    // FUNCTION TO OPEN AND CLOSE WIDGETS WITH MOUSEENTER
    const openHandler = (setIsOpen) => useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);



    return <LayoutContext.Provider value={{
        headerTransform,
        setHeaderTransform,
        handleWidgetOpen,
        handleWidgetClose,
        openHandler,
        mobileMenuOpen,
        setMobileMenuOpen,
    }}>
        {children}
    </LayoutContext.Provider>
}
