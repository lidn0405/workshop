import { ImageSlider } from "../components/Slider/ImageSlider";
import temp1 from ".././components/Slider/sliderImages/temp1.svg"
import temp2 from ".././components/Slider/sliderImages/temp2.svg"
import temp3 from ".././components/Slider/sliderImages/temp3.svg"

const images = [temp1, temp2, temp3]

export default function Home() {
    return (
        <div>
            <div>
                <ImageSlider sliderImages={images} />
            </div>
        </div>
    );
}