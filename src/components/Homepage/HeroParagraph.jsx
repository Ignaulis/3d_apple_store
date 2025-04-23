import { Link } from "react-router-dom";

export default function HeroParagraph() {

    return (
        <div className="w-full md:w-5/12 h-full flex flex-col gap-16">
            <h2 className="text-5xl text-center leading-[70px] text-gray-600 select-none">Welcome to the Era of Spatial Computing</h2>
            <p className="text-xl leading-[40px] select-none">Experience the future with Apple Vision Pro — where digital meets reality.</p>
            <Link
            to={'/product/8'}
                className="bg-blue-700 p-3 rounded cursor-pointer transition-all 0.2s hover:bg-blue-600 text-center text-white"
            >Learn More</Link>
        </div>
    );
}