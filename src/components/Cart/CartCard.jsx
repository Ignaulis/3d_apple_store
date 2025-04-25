import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function CartCard() {

    const { order, setOrder } = useContext(ShopContext)
    const [delId, setDelId] = useState(null)

    const handleDelete = (id) => {
        setDelId(id)
        setTimeout(() => {
        const deleted = order.filter(i => i.id !== id)
            setOrder(deleted)
            setDelId(null)
        }, 1000)
    }


    return (
        <div className="flex flex-col justify-center items-center gap-10">
            {
                order.map((e, i) => (
                    <div className="flex justify-between w-full md:w-2/3 transition-all duration-100 hover:bg-amber-100 p-5" style={{
                        background: delId === e.id ? 'crimson' : ''
                    }} key={i}>
                        <div className="flex gap-4 items-center justify-between w-2/3">
                            <span onClick={() => handleDelete(e.id)} className="text-2xl text-red-600 cursor-pointer">x</span>
                            <img className="w-22 h-22 rounded" src={e.image} alt={e.title} />
                            <span className="text-2xl">{e.title}</span>
                        </div>
                        <span className="text-xl">${e.price}</span>
                    </div>
                ))
            }
        </div>
    );
}