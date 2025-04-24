import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductList() {

    const {products} = useContext(ShopContext)
    const {categoryId} = useParams()
    
    const category = products.filter(c => c.category === categoryId)
    
    

    return(
        <div className="flex justify-center items-center mt-10 flex-col gap-10">
            <h3 className="text-5xl">Explore the lineup.</h3>
            <div className="flex w-4/5 justify-around flex-wrap">
                {
                    category.map((i, index) => (
                        <ProductCard key={index} id={i.id} title={i.title} img={i.image} price={i.price}/>
                    ))
                }
            </div>
        </div>
    );
}