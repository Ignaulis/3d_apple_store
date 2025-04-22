import { ShopContextProvider } from "./Context/ShopContext";
import Main from "./Pages/Main";
import Router from "./Router/Router";
import NavBar from "./components/NavBar/NavBar";


export default function Apple() {

    return (
        <Router>
            <ShopContextProvider>
                <NavBar />
                <Main />
            </ShopContextProvider>
        </Router>
    );
}