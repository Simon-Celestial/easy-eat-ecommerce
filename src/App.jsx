import MainRouter from "./router.jsx";
import {LayoutContextProvider} from "./Context/LayoutContext/LayoutContext.jsx";
import AuthContextProvider from "./Context/AuthContext/AuthContext.jsx";
import {UserDataContextProvider} from "./Context/UserDataContext/UserDataContext.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';



const App = () => {

    return (
        <AuthContextProvider>
            <LayoutContextProvider>
                <UserDataContextProvider>
                    <MainRouter/>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                    />
                </UserDataContextProvider>
            </LayoutContextProvider>
        </AuthContextProvider>
    )
}
export default App;