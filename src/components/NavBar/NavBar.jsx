import Apple from '../../Assets/icons8-apple.svg';
import Cart from '../../Assets/cart-shopping-svgrepo-com (1).svg';
import SearchSvg from '../../Assets/icons8-search.svg';
import Search from './Search';
import { useState } from 'react';

export default function NavBar() {

    const [searchVisible, setSearchVisible] = useState(false)

    return (
        <>
            <div className="w-full h-max bg-gray-900">
                <div className="py-3 flex justify-center mx-4">
                    <div className="w-180 text-gray-200 text-md cursor-pointer flex justify-between items-center">
                        <div>
                            <img
                                src={Apple}
                                alt='apple'
                                className='w-6'
                            />
                        </div>
                        <div className='w-80 text-md flex justify-between'>
                            <span

                            >iPhone</span>
                            <span

                            >Mac</span>
                            <span

                            >Contact</span>
                        </div>
                        <div className='flex gap-5'>
                            <img
                                src={SearchSvg}
                                alt="search"
                                className='w-5'
                                onClick={() => setSearchVisible(prev => !prev)}
                            />
                            <img
                                src={Cart}
                                alt="cart"
                                className='w-5'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Search searchVisible={searchVisible} />
        </>
    );
}