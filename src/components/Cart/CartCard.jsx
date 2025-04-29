import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function CartCard() {
    const { order, setOrder } = useContext(ShopContext);
    const [stackedOrder, setStackedOrder] = useState([]);
    const [delId, setDelId] = useState(null);
    const [delAllId, setDelAllId] = useState(null);

    useEffect(() => {
        const stackedItems = {};
        order.forEach((item) => {
            if (stackedItems[item.id]) {
                stackedItems[item.id].quantity++;
                stackedItems[item.id].indices.push(item.index);
            } else {
                stackedItems[item.id] = { ...item, quantity: 1, indices: [item.index] };
            }
        });
        setStackedOrder(Object.values(stackedItems));
    }, [order]);

    const handleDeleteOne = (id) => {
        setDelId(id);
        setTimeout(() => {
            const indexToDelete = order.findIndex(item => item.id === id);
            if (indexToDelete !== -1) {
                const newOrder = order.filter((_, index) => index !== indexToDelete);
                setOrder(newOrder);
            }
            setDelId(null);
        }, 1000);
    };

    const handleDeleteAll = (id) => {
        setDelAllId(id);
        setTimeout(() => {
            const newOrder = order.filter(item => item.id !== id);
            setOrder(newOrder);
            setDelAllId(null);
        }, 1000);
    };

    return (
        <div className="flex flex-col justify-center items-center gap-10">
            {
                stackedOrder.map((item) => (
                    <div
                        className="flex justify-between w-full md:w-2/3 transition-all duration-100 hover:bg-amber-100 p-5"
                        style={{ background: delId === item.id || delAllId === item.id ? 'crimson' : '' }}
                        key={item.id}
                    >
                        <div className="flex gap-4 items-center justify-between w-2/3">
                            <span onClick={() => handleDeleteOne(item.id)} className="text-2xl text-red-600 cursor-pointer">x</span>
                            {
                                item.quantity > 1 && <span onClick={() => handleDeleteAll(item.id)} className="text-sm text-red-700 cursor-pointer hover:underline">Delete All</span>
                        
                            }
                            <img className="w-22 h-22 rounded" src={item.image} alt={item.title} />
                            <div className="flex flex-wrap md:gap-4">
                                <span className="text-2xl">{item.title}</span>
                            {item.quantity > 1 && <span className="text-lg text-gray-600">x {item.quantity}</span>}
                            </div>
                            
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-xl">${item.price * item.quantity}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}