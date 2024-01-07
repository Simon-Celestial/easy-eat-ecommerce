import MainRouter from "./router.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";
import AuthContextProvider from "./Context/AuthContext/AuthContext.jsx";

const App = () => {
    return (
        <AuthContextProvider>
            <LayoutContextProvider>
                <MainRouter/>
            </LayoutContextProvider>
        </AuthContextProvider>
    )
}
export default App;