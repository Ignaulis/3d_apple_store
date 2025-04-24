import Slide from "./Slide";
import { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function Slider() {

    const { products } = useContext(ShopContext)

    const categories = [...new Set(products.map(p => p.category))]

    const newProduct = categories.map(category => {
        const productCategory = products.filter(c => c.category === category)
        const lastProduct = productCategory.slice(-1)[0]
        return lastProduct
    })

    const slides = newProduct.map((el, i) => (
        <div key={i} className="snap-start flex-shrink-0 w-full flex justify-center">
            <Slide title={el.title} id={el.id} img={el.image} des={el.description} price={el.price} />
        </div>
    ))

    const [slideIndex, setSlideIndex] = useState(0)
    const containerRef = useRef(null)
    const [pause, setPause] = useState(false)

    useEffect(() => {
        if (pause) return
        const interval = setInterval(() => {
            setSlideIndex(prev => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [slides.length, pause])

    useEffect(() => {
        if (!containerRef.current) return
        containerRef.current.scrollTo({
            left: slideIndex * containerRef.current.clientWidth,
            behavior: 'smooth'
        })
    }, [slideIndex])


    return (
        <div className="flex flex-col w-full items-center mb-20">
            <h3 className="mb-20 text-5xl text-gray-600 text-center">Browse Our Newest Models</h3>
            <div
                ref={containerRef}
                className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}>
                <div className="flex">
                    {slides}
                </div>
            </div>
        </div>
    );
}