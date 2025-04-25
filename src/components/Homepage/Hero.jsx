import Vision from "../../threejs/Vision";
import HeroParagraph from "./HeroParagraph";

export default function Hero() {
    return (
        <div className="w-full overflow-hidden flex justify-center mb-12">
            <div className="flex w-10/12 flex-wrap">
                <div className="w-full md:w-7/12 h-[400px] md:h-[500px] relative -z-10">
                    <Vision />
                </div>
                <HeroParagraph />
            </div>
        </div>
    );
}
