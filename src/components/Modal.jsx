import { useContext, useState, useEffect, useRef } from "react";
import { ShopContext } from "../Context/ShopContext";

export default function Modal() {
    const { showModal, setShowModal, modalText } = useContext(ShopContext);
    const [progressBarActive, setProgressBarActive] = useState(false);
    const progressBarRef = useRef(null);

    useEffect(() => {
        if (showModal) {
            setProgressBarActive(true);
            const timer = setTimeout(() => {
                setShowModal(false);
                setProgressBarActive(false);
            }, 4000);

            return () => clearTimeout(timer);
        } else {
            setProgressBarActive(false);
        }
    }, [showModal, setShowModal]);

    return (
        <div
            className={`fixed z-50 w-50 h-auto p-4 bg-gray-800 flex flex-col justify-center text-white rounded text-sm items-center transition-all duration-500 ease-in-out ${showModal ? ' top-10 right-10' : '-top-full right-10'
                }`}
        >
            <div className="flex w-full justify-between">
                <span className="mb-2">{modalText}</span>
                <div
                    className=" cursor-pointer w-max h-max px-1 text-[10px] rounded-[50%] bg-gray-200 text-black"
                    onClick={() => setShowModal(false)}
                >X</div>
            </div>

            <div
                ref={progressBarRef}
                className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-400 ease-linear ${progressBarActive ? 'w-modal0' : 'w-modalF'
                    }`}
                style={{ width: progressBarActive ? '0%' : '100%' }}
            ></div>
        </div>
    );
}