import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductCard({ img, title, price, id }) {

    const { setOrder, products } = useContext(ShopContext)


    const handleOrder = (id) => {
        const filtered = products.find(p => p.id === id)
        if (filtered) {
            setOrder(prev => [
                ...prev,
                filtered
            ])
        }
    }

    return (
        <div className="flex h-[500px] flex-col gap-15 items-center m-5">
            <div className="w-[250px] h-auto overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <span className="text-2xl font-bold">{title}</span>
                <span className="text-xl">From ${price}</span>
                <div className="flex gap-2">
                    <div className="flex flex-col justify-center items-center">
                        <Link className="p-3 h-max w-max bg-blue-600 text-white rounded-xl text-md cursor-pointer hover:bg-blue-500 transition-all 0.2s" to={`/product/${id}`}>Learn More</Link>
                        <span className="text-sm">Preview 3D</span>
                    </div>
                    <button onClick={() => handleOrder(id)} className="p-3 h-max w-max bg-green-600 text-white rounded-xl text-md cursor-pointer hover:bg-green-500 transition-all 0.2s" to={`/product/${id}`}>Add To Cart</button>
                </div>

            </div>
        </div>
    );
}