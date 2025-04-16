import { ShopContextProvider } from "./Context/ShopContext";
import NavBar from "./components/NavBar/NavBar";


export default function Apple() {

    return (
        <ShopContextProvider>
            <NavBar />
        </ShopContextProvider>
    );
}