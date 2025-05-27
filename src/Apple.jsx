import { ShopContextProvider } from "./Context/ShopContext";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Checkout from "./components/Cart/Checkout/Checkout";
import Modal from "./components/Modal";


export default function Apple() {

    return (
        <ShopContextProvider>
            <BrowserRouter>
                <NavBar />
                <Modal />
                <Routes>
                    <Route path="/3d_apple_store/" element={<Home />}/>
                    <Route path="/3d_apple_store/products/:categoryId" element={<Products />}/>
                    <Route path="/3d_apple_store/product/:productId" element={<Product />}/>
                    <Route path="/3d_apple_store/cart" element={<Cart />}/>
                    <Route path="/3d_apple_store/checkout" element={<Checkout />}/>
                    <Route path="*" element={<Page404 />}/>
                </Routes>
            </BrowserRouter>
        </ShopContextProvider>

    );
}