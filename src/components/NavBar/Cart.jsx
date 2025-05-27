import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export default function Cart({ cartVisible, setCartVisible }) {
    const { order, setOrder, setOrderTrue } = useContext(ShopContext);
    const [stackedOrder, setStackedOrder] = useState([]);

    useEffect(() => {
        const stackedItems = {};
        const updatedStackedOrder = [];
        order.forEach((item, index) => {
            if (stackedItems[item.id]) {
                stackedItems[item.id].quantity++;
                stackedItems[item.id].indices.push(index);
            } else {
                stackedItems[item.id] = { ...item, quantity: 1, indices: [index] };
                updatedStackedOrder.push(stackedItems[item.id]);
            }
        });
        setStackedOrder(updatedStackedOrder);
        setOrderTrue(order.length > 0);
    }, [order, setOrderTrue]);

    const total = stackedOrder.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleDeleteOne = (id) => {
        const indexToDelete = order.findIndex(item => item.id === id);
        if (indexToDelete !== -1) {
            const updatedOrder = order.filter((_, index) => index !== indexToDelete);
            setOrder(updatedOrder);
        }
    };

    return (
        <div className={`w-full h-max absolute top-0 left-0 bg-gray-800 flex justify-center transition-all duration-400 ease-out transform ${cartVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-100'}`}>
            {
                stackedOrder.length > 0
                    ?
                    (
                        <div className="text-gray-200 py-3 gap-10 w-200 mx-6 items-end mb-8 flex justify-between flex-wrap">
                            <div className="flex flex-col w-full gap-8">
                                <span className="text-2xl">Bag</span>
                                {
                                    stackedOrder.map((item) => (
                                        <div key={item.id} className="flex gap-5 items-center">
                                            <div onClick={() => handleDeleteOne(item.id)} className="text-xl cursor-pointer">X</div>
                                            <img className="w-16 h-auto rounded" src={item.image} alt={item.title} />
                                            <div className="flex flex-col">
                                                <span className="text-xl">{item.title}</span>
                                                <span>${item.price}</span>
                                                {item.quantity > 1 && <span className="text-sm text-gray-400">Quantity: {item.quantity}</span>}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="w-full flex justify-between h-max">
                                <div className="text-2xl">Your Total: ${total}</div>
                                <Link
                                    onClick={() => setCartVisible(false)}
                                    to={`/3d_apple_store/cart`}
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