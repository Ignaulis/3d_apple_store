import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function Contact({ contactVisible, enter, leave }) {

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
            className={`w-full h-max absolute top-0 z-10 flex justify-center left-0 bg-gray-800 transition-all duration-400 ease-in-out transform ${contactVisible ? 'translate-y-0' : '-translate-y-100'} `}
        >
            <div className="w-200 text-gray-200 py-4 flex flex-col gap-4 mb-5 mx-6">
                <div className="text-gray-400 text-xl">My contacts</div>
                <div className="flex flex-col gap-2">
                    <div className="hover:text-white">
                        <a
                            href="https://www.linkedin.com/in/ignas-naulis-537025293/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >LinkedIn</a>
                    </div>
                    <div className="hover:text-white">
                        <a
                            href="https://github.com/Ignaulis"
                            target="_blank"
                            rel='noopener noreferrer'
                        >GitHub</a>
                    </div>
                </div>

            </div>
        </div>
    );
}