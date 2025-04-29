import { useContext } from "react";
import CartCard from "./CartCard";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export default function CartCon() {

    const { order } = useContext(ShopContext)

    const total = order.reduce((sum, item) => sum + item.price, 0)



    return (
        <div className="my-10 h-[600px] flex flex-col gap-20">
            <div className="text-5xl text-center">Your Bag</div>
            <div className="flex flex-col h-1/2 w-full gap-20 justify-between items-center">
                <div className="w-full">
                    {
                        order.length > 0
                            ?
                            (
                                <div className="flex flex-col gap-20">
                                    <CartCard />
                                    <div className="flex flex-col items-center">
                                        <div className="md:w-1/2 w-full px-5 flex justify-between">
                                            <Link to={'/checkout'} className="text-2xl font-extralight text-white border-2 hover:border-gray-800 hover:bg-white bg-gray-800 hover:text-gray-800 transition-all duration-100 cursor-pointer py-1 px-10 rounded-xl">Checkout</Link>
                                            <span className="text-3xl">Total: ${total}</span>
                                        </div>
                                    </div></div>
                            )
                            :
                            <div className="flex flex-col gap-10 items-center">
                                <div className="text-2xl text-center">Bag Is Empty, Fill It Up!</div>
                                <Link className="cursor-pointer text-2xl bg-green-500 text-white p-3 rounded hover:bg-green-600" to={'/'}>Home</Link>
                            </div>
                    }
                </div>

            </div>

        </div>
    );
}