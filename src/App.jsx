import "./App.module.scss";
import {Header} from "./Components/Header/Header.jsx";
import {Main} from "./Components/Main/Main.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";
import ScrollToTop from "./Components/Сommon/ScrollToTop/ScrollToTop.jsx";
import React from "react";

const App = () => {
    return (
        <LayoutContextProvider>
            <div className="site-wrapper">
                {/*SITE MAIN COMPONENTS*/}
                <Header/>
                <Main/>
                <Footer/>
                <Footer/>
                {/*SCROLL TO HEADER */}
                <ScrollToTop />
            </div>
        </LayoutContextProvider>
    )
}
export default App;