export default function Cart() {

    return(
        <div className={`w-full h-max bg-gray-800 flex justify-center transition-all duration-400 ease-out transform ${searchVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>

        </div>
    );
}