import { ShopContextProvider } from "./Context/ShopContext";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";


export default function Apple() {

    return (
        <ShopContextProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/products/:categoryId" element={<Products />}/>
                    <Route path="/product/:productId" element={<Product />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="*" element={<Page404 />}/>
                </Routes>
            </BrowserRouter>
        </ShopContextProvider>

    );
}