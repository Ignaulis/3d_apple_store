import Vision from "../../threejs/Vision";
import HeroParagraph from "./HeroParagraph";

export default function Hero() {
    return (
        <div className="w-full overflow-hidden flex justify-center mb-12">
            <div className="flex w-10/12 flex-wrap">
                <Vision />
                <HeroParagraph />
            </div>
        </div>
    );
}
