import MainRouter from "./router.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";
import AuthContextProvider from "./Context/AuthContext/AuthContext.jsx";
import {Toaster} from "react-hot-toast";

const App = () => {
    return (
        <AuthContextProvider>
            <LayoutContextProvider>
                <Toaster />
                <MainRouter/>
            </LayoutContextProvider>
        </AuthContextProvider>
    )
}
export default App;