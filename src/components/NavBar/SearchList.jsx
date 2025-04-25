import { useContext, useEffect, useState } from "react";
import { ShopContext } from '../../Context/ShopContext';
import { Link } from "react-router-dom";

export default function SearchList({ text, setText, searchVisible, setSearchVisible }) {

    const { products } = useContext(ShopContext)
    const [find, setFind] = useState([])

    const handleSearchClick = () => {
        setSearchVisible(false)
        setText('')
    }

    useEffect(() => {
        const match = products.filter(product => {
            return product.title.toLowerCase().includes(text.toLowerCase())
        })

        if (text === '') {
            setFind(null)
        } else {
            setFind(match)
        }
    }, [text, products])


    return (
        <div className={`absolute flex w-full items-center flex-col ${find !== null ? 'px-5 py-5' : null} gap-5 bg-gray-500 w-full transition-all duration-400 ease-out transform ${searchVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            {
                find !== null &&
                find.map((item, index) => (
                    <div key={index} className="w-2/3 flex gap-5 items-center">
                        <img className="w-8 h-8 rounded" src={item.image} alt={item.title} />
                        <Link to={`/product/${item.id}`} onClick={handleSearchClick} className="cursor-pointer text-gray-200 text-2xl hover:text-white">{item.title}</Link>
                    </div>
                ))
            }
        </div>
    );
}