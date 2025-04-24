import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"

export default function ProductInfo({ data }) {

    const { setOrder } = useContext(ShopContext)

    const handleOrder = () => {
        setOrder(prev => [...prev, data])
    }

    if (!data) {
        return <div className="p-4">Loading product...</div>
    }

    return (
        <div className="flex flex-col w-1/2 h-full gap-8 justify-center">
            <span className="text-2xl font-bold">${data.price}</span>
            <span>{data.rating}</span>
            <p className="text-xl">{data.description}</p>
            <div className="flex gap-2 items-end">
                <button onClick={handleOrder} className="p-3 h-max w-max bg-green-600 text-white rounded-xl text-md cursor-pointer hover:bg-green-500 transition-all 0.2s">Add To Cart</button>
                <span className="text-md ml-1">In Stock <span className="font-bold">{data.stock}</span></span>
            </div>

        </div>
    )
}