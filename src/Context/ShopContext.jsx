import { createContext, useEffect, useState } from "react";
import { fetchedProducts } from "../Api/Gist";

export const ShopContext = createContext()

export const ShopContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetchedProducts()
            setProducts(data)
        }
        getData()
    }, [])

    return (
        <ShopContext.Provider
            value={{
                products
            }}
        >
            {children}
        </ShopContext.Provider>
    );
}