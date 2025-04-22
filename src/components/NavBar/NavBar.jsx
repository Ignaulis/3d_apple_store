import Apple from '../../Assets/icons8-apple.svg';
import CartSvg from '../../Assets/cart-shopping-svgrepo-com (1).svg';
import SearchSvg from '../../Assets/icons8-search.svg';
import Search from './Search';
import { useState } from 'react';
import ProductsNav from './ProductsNav';
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Cart from './Cart';
import Contact from './Contact';

export default function NavBar() {

    const { products, isMobile } = useContext(ShopContext)
    const [searchVisible, setSearchVisible] = useState(false)
    const [iphonesVisible, setIphonesVisible] = useState(false)
    const [hoverTimeout, setHoverTimeout] = useState(null)
    const [macVisible, setMacVisible] = useState(false)
    const [visionVisible, setVisionVisible] = useState(false)
    const [cartVisible, setCartVisible] = useState(false)
    const [contactVisible, setContactVisible] = useState(false)

    const iphones = products.filter(i => i.category === 'smartphones')
    const macs = products.filter(i => i.category === 'laptops')
    const vision = products.filter(i => i.category === 'mixed reality')

    const handleVisibleSearchCart = (type) => {

        setContactVisible(false)
        setIphonesVisible(false)
        setMacVisible(false)
        setVisionVisible(false)

        if (type === 'search') {
            setSearchVisible(prev => !prev)
            setCartVisible(false)
        }
        if (type === 'cart') {
            setCartVisible(prev => !prev)
            setSearchVisible(false)
        }
    }

    const onMobileClick = (category) => {

        setCartVisible(false)
        setSearchVisible(false)

        setIphonesVisible(prev => category === 'iphone' ? !prev : false)
        setMacVisible(prev => category === 'mac' ? !prev : false)
        setVisionVisible(prev => category === 'vision' ? !prev : false)
        setContactVisible(prev => category === 'contact' ? !prev : false)
    }

    const onMouseEnter = (category) => {
        if (hoverTimeout) clearTimeout(hoverTimeout)
        setIphonesVisible(category === 'iphone')
        setMacVisible(category === 'mac')
        setVisionVisible(category === 'vision')
        setContactVisible(category === 'contact')
    }

    const onMouseLeave = () => {
        const time = setTimeout(() => {
            setIphonesVisible(false)
            setMacVisible(false)
            setVisionVisible(false)
            setContactVisible(false)
        }, 500)
        setHoverTimeout(time)
    }


    return (
        <>
            <div className="w-full h-max bg-gray-900 z-20 overflow-hidden relative">
                <div className="py-3 flex justify-center mx-6">
                    <div className="w-200 text-gray-200 text-md flex justify-between items-center">
                        <div>
                            <a href="#"><img
                                src={Apple}
                                alt='apple'
                                className='w-6 cursor-pointer'
                            /></a>
                        </div>
                        <div className={`w-100 text-md flex justify-between hover:text-white ${isMobile && 'w-80 justify-center gap-6'} [@media(max-width:640px)]:w-80 [@media(max-width:550px)]:justify-center gap-6`}>
                            <span
                                {...(isMobile ?
                                    { onClick: () => onMobileClick('iphone') }
                                    :
                                    {
                                        onMouseEnter: () => onMouseEnter('iphone'),
                                        onMouseLeave: onMouseLeave
                                    }
                                )}
                                className=' cursor-pointer'
                            >iPhone</span>
                            <span
                                {
                                ...(isMobile
                                    ?
                                    { onClick: () => onMobileClick('mac') }
                                    :
                                    {
                                        onMouseEnter: () => onMouseEnter('mac'),
                                        onMouseLeave: onMouseLeave
                                    }
                                )
                                }

                                className=' cursor-pointer'
                            >Mac</span>
                            <span
                                {
                                ...(isMobile
                                    ?
                                    {
                                        onClick: () => onMobileClick('vision')
                                    }
                                    :
                                    {
                                        onMouseEnter: () => onMouseEnter('vision'),
                                        onMouseLeave: onMouseLeave
                                    }
                                )
                                }

                                className=' cursor-pointer'
                            >Vision</span>
                            <span
                                {
                                ...(isMobile
                                    ?
                                    { onClick: () => onMobileClick('contact') }
                                    :
                                    {
                                        onMouseEnter: () => onMouseEnter('contact'),
                                        onMouseLeave: onMouseLeave
                                    }
                                )
                                }

                                className=' cursor-pointer'
                            >Contact</span>
                        </div>
                        <div className='flex gap-5'>
                            <img
                                src={SearchSvg}
                                alt="search"
                                className='w-5 cursor-pointer'
                                onClick={() => handleVisibleSearchCart('search')}
                            />
                            <img
                                src={CartSvg}
                                alt="cart"
                                className='w-5 cursor-pointer'
                                onClick={() => handleVisibleSearchCart('cart')}
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
                <Contact contactVisible={contactVisible} enter={() => onMouseEnter('contact')} leave={onMouseLeave} />
                <Cart cartVisible={cartVisible} />
            </div>
        </>
    );
}