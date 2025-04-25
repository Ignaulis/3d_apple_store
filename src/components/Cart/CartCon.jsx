import { useContext } from "react";
import CartCard from "./CartCard";
import { ShopContext } from "../../Context/ShopContext";

export default function CartCon() {

    const { order } = useContext(ShopContext)

    const total = order.reduce((sum, item) => sum + item.price, 0)



    return (
        <div className="my-10 h-[600px]">
            <div className="text-5xl text-center">Your Bag</div>
            <div className="flex flex-col h-1/2 justify-between mx-20 mt-10 ">
                <CartCard />
                <span className="text-2xl ml-10">Total: ${total}</span>
            </div>

        </div>
    );
}