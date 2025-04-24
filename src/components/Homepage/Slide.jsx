import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Slide({ title, price, img, des, id }) {

    const {setOrder, products} = useContext(ShopContext)

    const handleOrder = (id) => {
        const product = products.find(p => p.id === id)
        if(product) {
            setOrder(prev => [
                ...prev,
                product
            ])
        }
    }

    return (
        <div className="h-max md:h-[300px] w-2/3 mx-2 md:w-1/2 bg-gray-700 p-5 rounded-xl text-gray-200 flex justify-center gap-2 md:justify-between items-center md:flex-nowrap flex-wrap-reverse">
            <div className="flex flex-col justify-around h-full gap-5 w-full md:w-2/3">
                <h3 className="text-2xl text-gray-200">The New {title}</h3>
                <p className="w-2/3 text-sm">{des}</p>
                <p className="text-xl">Only: ${price}</p>
                <div className="flex gap-2">
                    <div className="flex flex-col justify-center items-center">
                        <Link className="p-3 h-max w-max bg-blue-600 text-white rounded-xl text-md cursor-pointer hover:bg-blue-500 transition-all 0.2s" to={`/product/${id}`}>Learn More</Link>
                    </div>
                    <button onClick={() => handleOrder(id)} className="p-3 h-max w-max bg-green-600 text-white rounded-xl text-md cursor-pointer hover:bg-green-500 transition-all 0.2s" to={`/product/${id}`}>Add To Cart</button>
                </div>
                
            </div>
            <div className="w-[250px] h-[250px] flex justify-center items-center">
                <img src={img} className="rounded-xl items-center w-auto h-auto" alt={title} />
            </div>
        </div>
    );
}