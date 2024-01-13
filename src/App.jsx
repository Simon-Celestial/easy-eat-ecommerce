import MainRouter from "./router.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";
import AuthContextProvider from "./Context/AuthContext/AuthContext.jsx";
import {Toaster} from "react-hot-toast";
import {UserDataContextProvider} from "./Context/UserDataContext/UserDataContext.jsx";

const App = () => {
    return (
        <AuthContextProvider>
            <LayoutContextProvider>
                <UserDataContextProvider>
                    <Toaster/>
                    <MainRouter/>
                </UserDataContextProvider>
            </LayoutContextProvider>
        </AuthContextProvider>
    )
}
export default App;