import { useContext } from "react"
import { ShopContext } from "../../Context/ShopContext"
import star from '../../Assets/star-svgrepo-com (1).svg'
import starHalf from '../../Assets/star-half-svgrepo-com (1).svg'

export default function ProductInfo({ data }) {

    const { setOrder } = useContext(ShopContext)

    const handleOrder = () => {
        setOrder(prev => [...prev, data])
    }

    if (!data) {
        return <div className="p-4">Loading product...</div>
    }

    return (
        <div className="flex flex-col w-full md:w-1/2 h-full gap-8 justify-center">
            <span className="text-2xl font-bold">${data.price}</span>
            <div className="flex">
                {
                    Array.from({ length: 5 }).map((_, i) => {
                        const full = i + 1 <= Math.floor(data.rating)
                        const half = data.rating - i > 0 && data.rating - i < 1
                        return (
                            <img key={i} src={full ? star : half ? starHalf : star} alt={data.rating} className="w-5 h-5 mx-1" />
                        )
                    })
                }
            </div>
            <p className="text-xl">{data.description}</p>
            <div className="flex gap-2 items-end">
                <button onClick={handleOrder} className="p-3 h-max w-max bg-green-600 text-white rounded-xl text-md cursor-pointer hover:bg-green-500 transition-all 0.2s">Add To Cart</button>
                <span className="text-md ml-1">In Stock <span className="font-bold">{data.stock}</span></span>
            </div>

        </div>
    )
}