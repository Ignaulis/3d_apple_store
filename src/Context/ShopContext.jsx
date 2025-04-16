import { createContext, useEffect, useState } from "react";
import { fetchedIphones } from "../Api/Gist";

export const ShopContext = createContext()

export const ShopContextProvider = ({ children }) => {

    const [iphones, setIphones] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetchedIphones()
            setIphones(data)
        }
        getData()
    }, [])

    return (
        <ShopContext.Provider
            value={{
                iphones
            }}
        >
            {children}
        </ShopContext.Provider>
    );
}