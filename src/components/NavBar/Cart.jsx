import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export default function Cart({ cartVisible }) {

    const { orderTrue } = useContext(ShopContext)

    return (
        <div className={`w-full h-max absolute top-0 left-0 bg-gray-800 flex justify-center transition-all duration-400 ease-out transform ${cartVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-100'}`}>
            {
                orderTrue
                    ?
                    (
                        <div className="text-gray-200 py-3 w-200 mx-6 items-end mb-8 flex justify-between">
                            <div className="flex flex-col gap-8">
                                <span className="text-2xl">Bag</span>
                                <div className="flex gap-10">
                                    <img src="" alt="item image" />
                                    <span>item info</span>
                                </div>
                            </div>
                            <div className="w-max">
                                <Link
                                    to={`/cart`}
                                    className="bg-blue-700 p-3 rounded cursor-pointer transition-all 0.2s hover:bg-blue-600"
                                >View Order</Link>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="text-gray-200 py-3 w-200 flex justify-between mx-6">
                            <div className="">Your Bag Is Empty.</div>
                        </div>

                    )
            }
        </div>
    );
}