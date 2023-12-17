import React, {useCallback, useEffect, useState} from 'react'


const defaults = {
    headerTransform: false,
    setHeaderTransform: () => {
    },
    handleWidgetOpen: () => {
    },
    handleWidgetClose: () => {
    },
    openHandler: () => {
    },
    mobileMenuOpen: false,
    setMobileMenuOpen: () => {
    },
    searchOpen: false,
    setSearchOpen: () => {
    },
    basketOpen: false,
    setBasketOpen: () => {
    },
    sideMenuOpen: false,
    setSideMenuOpen: () => {
    },
    dropDownAccountOpen: false,
    setDropDownAccountOpen: () => {
    },
    headerColorChange: false,
    setHeaderColorChange: () => {
    },


}
export const LayoutContext = React.createContext(defaults);


export const LayoutContextProvider = ({
                                          children
                                      }) => {
    // HEADER TRANSFORMATION STATE
    const [headerTransform, setHeaderTransform] = useState(false);

    // HEADER STATE FOR HEADER CONTENT COLOR ON DIFFERENT PAGES
    const [headerColorChange, setHeaderColorChange] = useState(false);

    // HEADER SEARCH OPEN AND CLOSE STATE
    const [searchOpen, setSearchOpen] = useState(false);

    // MOBILE MENU OPEN AND CLOSE STATE
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // HEADER BASKET OPEN AND CLOSE STATE
    const [basketOpen, setBasketOpen] = useState(false);

    // SIDE MENU OPEN AND CLOSE STATE
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    // ACCOUNT ICON DROPDOWN STATE, TO ENTER LOGIN OR REGISTER PAGE
    const [dropDownAccountOpen, setDropDownAccountOpen] = useState(false);


    // FUNCTION TO OPEN WIDGETS WITH CLICK

    const handleWidgetOpen = useCallback((setIsOpen) => (event) => {
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

    // useEffect CLOSE WIDGETS WHEN CLICKING OUTSIDE THE WIDGET AREA
    useEffect(() => {
        const action = () => {
            handleWidgetClose(setBasketOpen);
            handleWidgetClose(setSearchOpen);
            handleWidgetClose(setSideMenuOpen);
            handleWidgetClose(setDropDownAccountOpen);

        }
        document.addEventListener("click", action);
        return () => {
            document.removeEventListener("click", action);
        };
    }, []);


    return <LayoutContext.Provider value={{
        headerTransform,
        setHeaderTransform,
        handleWidgetOpen,
        handleWidgetClose,
        openHandler,
        mobileMenuOpen,
        setMobileMenuOpen,
        searchOpen,
        setSearchOpen,
        basketOpen,
        setBasketOpen,
        sideMenuOpen,
        setSideMenuOpen,
        dropDownAccountOpen,
        setDropDownAccountOpen,
        headerColorChange,
        setHeaderColorChange,
    }}>
        {children}
    </LayoutContext.Provider>
}
