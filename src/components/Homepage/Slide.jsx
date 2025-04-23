import { Link } from "react-router-dom";

export default function Slide({ title, price, img, des, id }) {

    return (
        <div className="h-max md:h-[300px] w-2/3 mx-2 md:w-1/2 bg-gray-200 p-4 rounded-2xl flex">
            <div className="flex flex-col justify-around h-full gap-5 w-1/2">
                <h3 className="text-2xl text-gray-800">The New {title}</h3>
                <p className="w-2/3 text-sm">{des}</p>
                <p className="text-xl">Only: ${price}</p>
                <Link to={`/product/${id}`} className="p-3 w-max bg-blue-600 text-white rounded-xl text-md cursor-pointer hover:bg-blue-500 transition-all 0.2s">Learn More</Link>
            </div>
            <div className="">
                <img src={img} alt={title} />
            </div>
        </div>
    );
}