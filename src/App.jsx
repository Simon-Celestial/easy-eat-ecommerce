import MainRouter from "./router.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";


const App = () => {
    return (
        <LayoutContextProvider>
            <MainRouter/>
        </LayoutContextProvider>
    )
}
export default App;