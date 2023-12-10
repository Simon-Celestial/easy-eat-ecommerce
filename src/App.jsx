import "./App.module.scss";
import {Header} from "./Components/Header/Header.jsx";
import {Main} from "./Components/Main/Main.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";

const App = () => {
    return (
        <div className="site-wrapper">
            <Header/>
            <Main />
            <Footer />
        </div>
    )
}
export default App;