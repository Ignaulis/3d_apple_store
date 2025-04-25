import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export default function Cart({ cartVisible, setCartVisible }) {

    const { orderTrue, setOrderTrue, order, setOrder } = useContext(ShopContext)

    const total = order.reduce((sum, item) => sum + item.price, 0)

    const handleDelete = (id) => {
        const item = order.filter(i => i.id !== id)
        setOrder(item)
    }

    useEffect(() => {
        setOrderTrue(order.length > 0)
    }, [order])

    return (
        <div className={`w-full h-max absolute top-0 left-0 bg-gray-800 flex justify-center transition-all duration-400 ease-out transform ${cartVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-100'}`}>
            {
                orderTrue
                    ?
                    (
                        <div className="text-gray-200 py-3 w-200 mx-6 items-end mb-8 flex justify-between">
                            <div className="flex flex-col gap-8">
                                <span className="text-2xl">Bag</span>
                                {
                                    order.map((p, i) => (
                                        <div key={i} className="flex gap-5 items-center">
                                            <div onClick={() => handleDelete(p.id)} className="text-xl cursor-pointer">X</div>
                                            <img className="w-16 h-auto rounded" src={p.image} alt={p.title} />
                                            <div className="flex flex-col">
                                                <span className="text-xl">{p.title}</span>
                                                <span>${p.price}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className="text-2xl">Your Total: ${total}</div>

                            </div>
                            <div className="w-max h-max">
                                <Link
                                    onClick={() => setCartVisible(false)}
                                    to={`/cart`}
                                    className="bg-blue-700 p-3 h-max rounded cursor-pointer transition-all 0.2s hover:bg-blue-600"
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