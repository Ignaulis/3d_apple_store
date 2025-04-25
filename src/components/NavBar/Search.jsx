import { useState } from "react";
import SearchList from "./SearchList";

export default function Search({ searchVisible, setSearchVisible }) {

    const [text, setText] = useState('')

    const handleText = (e) => {
        setText(e.target.value)
    }
    

    return (
        <>
            <div className={`w-full h-max bg-gray-800 flex justify-center transition-all duration-400 ease-out transform ${searchVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <div className="py-3 text-gray-200 flex w-200 justify-end">
                    <input className="mx-6 outline-0" type={text} onChange={handleText} placeholder="Search" />
                </div>
            </div>
            <SearchList text={text} searchVisible={searchVisible} setSearchVisible={setSearchVisible} setText={setText} />
        </>

    );
}