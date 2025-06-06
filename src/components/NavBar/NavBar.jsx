import Apple from '../../Assets/icons8-apple.svg';
import CartSvg from '../../Assets/cart-shopping-svgrepo-com (1).svg';
import SearchSvg from '../../Assets/icons8-search.svg';
import Search from './Search';
import { useEffect, useState } from 'react';
import ProductsNav from './ProductsNav';
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Cart from './Cart';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import hamburg from '../../Assets/menu-symbol-of-three-parallel-lines-svgrepo-com.svg'

export default function NavBar() {

    const { products, order, orderTrue } = useContext(ShopContext);
    const [searchVisible, setSearchVisible] = useState(false);
    const [iphonesVisible, setIphonesVisible] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [macVisible, setMacVisible] = useState(false);
    const [visionVisible, setVisionVisible] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);
    const [hamburgMenu, setHamburgMenu] = useState(false);
    const [isMobileLocal, setIsMobileLocal] = useState(window.innerWidth < 640); // Pradinė būsena

    const iphones = products.filter(i => i.category === 'smartphones');
    const macs = products.filter(i => i.category === 'laptops');
    const vision = products.filter(i => i.category === 'mixed reality');

    useEffect(() => {
        const handleResize = () => {
            setIsMobileLocal(window.innerWidth < 640);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleVisibleSearchCart = (type) => {
        setContactVisible(false);
        setIphonesVisible(false);
        setMacVisible(false);
        setVisionVisible(false);

        if (type === 'search') {
            setSearchVisible(prev => !prev);
            setCartVisible(false);
        }
        if (type === 'cart') {
            setCartVisible(prev => !prev);
            setSearchVisible(false);
        }
    };

    const handleHamburgClick = () => {
        setHamburgMenu(prev => !prev);
        setIphonesVisible(false);
        setContactVisible(false);
        setMacVisible(false);
        setVisionVisible(false);
    };

    const onMobileClick = (category) => {
        if (hamburgMenu) {
            setHamburgMenu(false);
        }
        setCartVisible(false);
        setSearchVisible(false);
        setIphonesVisible(prev => category === 'iphone' ? !prev : false);
        setMacVisible(prev => category === 'mac' ? !prev : false);
        setVisionVisible(prev => category === 'vision' ? !prev : false);
        setContactVisible(prev => category === 'contact' ? !prev : false);
    };

    const onMouseEnter = (category) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setIphonesVisible(category === 'iphone');
        setMacVisible(category === 'mac');
        setVisionVisible(category === 'vision');
        setContactVisible(category === 'contact');
    };

    const onMouseLeave = () => {
        const time = setTimeout(() => {
            setIphonesVisible(false);
            setMacVisible(false);
            setVisionVisible(false);
            setContactVisible(false);
        }, 500);
        setHoverTimeout(time);
    };

    return (
        <>
            <div className="w-full h-max bg-gray-900 z-20 overflow-hidden relative">
                <div className="py-3 flex justify-center mx-6">
                    <div className="w-200 text-gray-200 text-md flex justify-between items-center">
                        <div>
                            <Link to={'/3d_apple_store/'}><img
                                src={Apple}
                                alt='apple'
                                className='w-6 cursor-pointer'
                            /></Link>
                        </div>
                        {
                            !isMobileLocal &&
                            (
                                <div className={`w-100 text-md flex justify-between hover:text-white ${isMobileLocal && 'w-80 justify-center gap-6'} [@media(max-width:640px)]:w-80 [@media(max-width:550px)]:justify-center gap-6`}>
                                    <span
                                        {...(isMobileLocal ?
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
                                        {...(isMobileLocal
                                            ?
                                            { onClick: () => onMobileClick('mac') }
                                            :
                                            {
                                                onMouseEnter: () => onMouseEnter('mac'),
                                                onMouseLeave: onMouseLeave
                                            }
                                        )}
                                        className=' cursor-pointer'
                                    >Mac</span>
                                    <span
                                        {...(isMobileLocal
                                            ?
                                            {
                                                onClick: () => onMobileClick('vision')
                                            }
                                            :
                                            {
                                                onMouseEnter: () => onMouseEnter('vision'),
                                                onMouseLeave: onMouseLeave
                                            }
                                        )}
                                        className=' cursor-pointer'
                                    >Vision</span>
                                    <span
                                        {...(isMobileLocal
                                            ?
                                            { onClick: () => onMobileClick('contact') }
                                            :
                                            {
                                                onMouseEnter: () => onMouseEnter('contact'),
                                                onMouseLeave: onMouseLeave
                                            }
                                        )}
                                        className=' cursor-pointer'
                                    >Contact</span>
                                </div>
                            )
                        }
                        <div className='flex gap-5'>
                            <img
                                src={SearchSvg}
                                alt="search"
                                className='w-5 cursor-pointer'
                                onClick={() => handleVisibleSearchCart('search')}
                            />
                            <div className="relative w-5 h-5">
                                <img
                                    src={CartSvg}
                                    alt="cart"
                                    className='w-5 h-5 cursor-pointer'
                                    onClick={() => handleVisibleSearchCart('cart')}
                                />
                                <div
                                    className={`absolute top-0 -right-2 bg-green-300 rounded-full text-black text-xs w-4 h-4 cursor-pointer flex items-center justify-center ${orderTrue ? 'opacity-100' : 'opacity-0'}`}
                                    onClick={() => handleVisibleSearchCart('cart')}>
                                    {
                                        order.length
                                    }
                                </div>
                            </div>
                            {
                                isMobileLocal &&
                                (
                                    <div className="w-5 h-5 cursor-pointer" onClick={handleHamburgClick}>
                                        <img src={hamburg} alt="menu" />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-max relative z-0">
                {
                    hamburgMenu &&
                    (
                        <div className={`w-full p-4 text-xl gap-5 flex flex-col absolute text-gray-200 bg-gray-800 items-end hover:text-white z-50`}
                        >
                            <span
                                {...(isMobileLocal ?
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
                                {...(isMobileLocal
                                    ?
                                    { onClick: () => onMobileClick('mac') }
                                    :
                                    {
                                        onMouseEnter: () => onMouseEnter('mac'),
                                        onMouseLeave: onMouseLeave
                                    }
                                )}
                                className=' cursor-pointer'
                            >Mac</span>
                            <span
                                {...(isMobileLocal
                                    ?
                                    {
                                        onClick: () => onMobileClick('vision')
                                    }
                                    :
                                    {
                                        onMouseEnter: () => onMouseEnter('vision'),
                                        onMouseLeave: onMouseLeave
                                    }
                                )}
                                className=' cursor-pointer'
                            >Vision</span>
                            <span
                                {...(isMobileLocal
                                    ?
                                    { onClick: () => onMobileClick('contact') }
                                    :
                                    {
                                        onMouseEnter: () => onMouseEnter('contact'),
                                        onMouseLeave: onMouseLeave
                                    }
                                )}
                                className=' cursor-pointer'
                            >Contact</span>
                        </div>
                    )
                }
                <Search setSearchVisible={setSearchVisible} searchVisible={searchVisible} />
                <ProductsNav setV={setIphonesVisible} visible={iphonesVisible} enter={() => onMouseEnter('iphone')} leave={onMouseLeave} data={iphones} />
                <ProductsNav setV={setMacVisible} visible={macVisible} enter={() => onMouseEnter('mac')} leave={onMouseLeave} data={macs} />
                <ProductsNav setV={setVisionVisible} visible={visionVisible} enter={() => onMouseEnter('vision')} leave={onMouseLeave} data={vision} />
                <Contact contactVisible={contactVisible} enter={() => onMouseEnter('contact')} leave={onMouseLeave} />
                <Cart setCartVisible={setCartVisible} cartVisible={cartVisible} />
            </div>
        </>
    );
}