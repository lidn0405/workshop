import { ImageSlider } from "../components/slider/ImageSlider";
import temp1 from ".././components/Slider/sliderImages/temp1.svg"
import temp2 from ".././components/Slider/sliderImages/temp2.svg"
import temp3 from ".././components/Slider/sliderImages/temp3.svg"

const images = [temp1, temp2, temp3]

export default function HomePage() {
    return (
        <div className="homePage">
            <div className="homeSection" style={{backgroundColor: "grey"}}>
                <ImageSlider sliderImages={images} />
                <br></br>
                
            </div>
            <div className="homeSection">
                <p>SECOND SECTION</p>
            </div>
        </div>
    );
}