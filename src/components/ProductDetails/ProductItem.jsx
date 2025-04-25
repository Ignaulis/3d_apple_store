import { useContext } from "react";
import ProductInfo from "./ProductInfo";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Product3d from "../../threejs/Product3d";

export default function ProductItem() {

    const { products } = useContext(ShopContext)
    const { productId } = useParams()

    const data = products.find(p => p.id === parseInt(productId))

    if(!data) {
        return <div className="p-4">Loading product...</div>
    }

    return (
        <div className="w-full h-[700px] flex flex-col items-center mx-4">
                <h3 className="text-5xl text-gray-800">{data.title}</h3>
            <div className="flex w-full h-[500px] flex-wrap justify-center">
                <div className="md:w-1/2 w-[300px] h-full -z-10">
                    <Product3d data={data} />
                </div>
                <div className="md:w-1/2 w-[300px]">
                    <ProductInfo data={data} />
                </div>

            </div>
        </div>
    )
}