import { useContext } from "react";
import CartCard from "./CartCard";
import { ShopContext } from "../../Context/ShopContext";

export default function CartCon() {

    const { order } = useContext(ShopContext)

    const total = order.reduce((sum, item) => sum + item.price, 0)



    return (
        <div className="my-10 h-[600px] flex flex-col gap-20">
            <div className="text-5xl text-center">Your Bag</div>
            <div className="flex flex-col h-1/2 w-full gap-20 justify-between items-center">
                <div className="w-full"><CartCard /></div>
                <div className="w-1/2 flex justify-between">
                    <button className="text-2xl font-extralight text-white border-2 hover:border-gray-800 hover:bg-white bg-gray-800 hover:text-gray-800 transition-all duration-100 cursor-pointer py-1 px-10 rounded-xl">Checkout</button>
                    <span className="text-3xl">Total: ${total}</span>
                </div>
            </div>

        </div>
    );
}