import Apple from '../../Assets/icons8-apple.svg';
import Cart from '../../Assets/cart-shopping-svgrepo-com (1).svg';
import SearchSvg from '../../Assets/icons8-search.svg';
import Search from './Search';
import { useState } from 'react';
import ProductsNav from './ProductsNav';
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function NavBar() {

    const { products } = useContext(ShopContext)
    const [searchVisible, setSearchVisible] = useState(false)
    const [iphonesVisible, setIphonesVisible] = useState(false)
    const [hoverTimeout, setHoverTimeout] = useState(null)
    const [macVisible, setMacVisible] = useState(false)
    const [visionVisible, setVisionVisible] = useState(false)

    const iphones = products.filter(i => i.category === 'smartphones')
    const macs = products.filter(i => i.category === 'laptops')
    const vision = products.filter(i => i.category === 'mixed reality')


    const onMouseEnter = (category) => {
        if (hoverTimeout) clearTimeout(hoverTimeout)
        setIphonesVisible(category === 'iphone')
        setMacVisible(category === 'mac')
        setVisionVisible(category === 'vision')
    }

    const onMouseLeave = () => {
        const time = setTimeout(() => {
            setIphonesVisible(false)
            setMacVisible(false)
            setVisionVisible(false)
        }, 500)
        setHoverTimeout(time)
    }

    return (
        <>
            <div className="w-full h-max bg-gray-900 z-20 overflow-hidden relative">
                <div className="py-3 flex justify-center mx-6">
                    <div className="w-200 text-gray-200 text-md flex justify-between items-center">
                        <div>
                            <img
                                src={Apple}
                                alt='apple'
                                className='w-6 cursor-pointer'
                            />
                        </div>
                        <div className='w-100 text-md flex justify-between hover:text-white [@media(max-width:640px)]:w-80 [@media(max-width:550px)]:justify-center gap-6'>
                            <span
                                onMouseEnter={() => onMouseEnter('iphone')}
                                onMouseLeave={onMouseLeave}
                                className=' cursor-pointer'
                            >iPhone</span>
                            <span
                                onMouseEnter={() => onMouseEnter('mac')}
                                onMouseLeave={onMouseLeave}
                                className=' cursor-pointer'
                            >Mac</span>
                            <span
                                onMouseEnter={() => onMouseEnter('vision')}
                                onMouseLeave={onMouseLeave}
                                className=' cursor-pointer'
                            >Vision</span>
                            <span
                                className=' cursor-pointer'
                            >Contact</span>
                        </div>
                        <div className='flex gap-5'>
                            <img
                                src={SearchSvg}
                                alt="search"
                                className='w-5 cursor-pointer'
                                onClick={() => setSearchVisible(prev => !prev)}
                            />
                            <img
                                src={Cart}
                                alt="cart"
                                className='w-5 cursor-pointer'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-max relative z-0">
                <Search searchVisible={searchVisible} />
                <ProductsNav visible={iphonesVisible} enter={() => onMouseEnter('iphone')} leave={onMouseLeave} data={iphones} />
                <ProductsNav visible={macVisible} enter={() => onMouseEnter('mac')} leave={onMouseLeave} data={macs} />
                <ProductsNav visible={visionVisible} enter={() => onMouseEnter('vision')} leave={onMouseLeave} data={vision} />
            </div>
        </>
    );
}