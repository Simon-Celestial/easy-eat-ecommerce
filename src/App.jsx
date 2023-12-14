import "./App.module.scss";
import {Header} from "./Components/Header/Header.jsx";
import {Main} from "./Components/Main/Main.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";
import ScrollToTop from "./Components/Сommon/ScrollToTop/ScrollToTop.jsx";
import React from "react";
import {MobileMenu} from "./Components/MobileMenu/MobileMenu.jsx";

const App = () => {
    return (
        <LayoutContextProvider>
            <div className="site-wrapper">
                {/*SITE MAIN COMPONENTS*/}
                <Header/>
                <Main/>
                <Footer/>
                {/*SCROLL TO HEADER */}
                <ScrollToTop />
                {/*MOBILE MENU*/}
                <MobileMenu />

            </div>
        </LayoutContextProvider>
    )
}
export default App;