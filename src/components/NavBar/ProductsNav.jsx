import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductsNav({ visible, data, enter, leave }) {

    const category = data[0]?.category || ''

    const { isMobile } = useContext(ShopContext)

    return (
        <div
            {...(!isMobile
                &&
            {
                onMouseEnter: enter,
                onMouseLeave: leave
            }
            )}
            className={`w-full h-max absolute top-0 z-10 flex justify-center left-0 bg-gray-800 transition-all duration-600 ease-in-out transform ${visible ? 'translate-y-0' : '-translate-y-100'} `}
        >
            <div className="w-200 mx-6">
                <div className="flex flex-col gap-5 pb-10 pt-5">
                    <span className="text-gray-400">Explore {category}</span>
                    <div className="flex flex-col gap-4">
                        {
                            data.map((n, i) => (
                                <div className="text-gray-200 text-xl cursor-pointer w-max hover:text-white" key={i} >{n.title}</div>
                            ))
                        }
                        <a href={'#' + category} className="cursor-pointer text-gray-200 mt-3 hover:text-white">
                            View All
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}