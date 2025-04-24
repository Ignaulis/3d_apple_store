import { createContext, useEffect, useState } from "react";
import { fetchedProducts } from "../Api/Gist";

export const ShopContext = createContext()

export const ShopContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [orderTrue, setOrderTrue] = useState(false)
    const [order, setOrder] = useState([])
    const isMobile = innerWidth <= 550

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
                products,
                orderTrue,
                setOrderTrue,
                isMobile,
                order,
                setOrder
            }}
        >
            {children}
        </ShopContext.Provider>
    );
}