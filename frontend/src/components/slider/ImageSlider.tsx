import { useState } from "react";
import "./slider.css"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type ImageSliderProps = {
    sliderImages: string[];
}

function ImageSlider({sliderImages}: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    function handleLeft() {
        setImageIndex(imageIndex == 0 ? sliderImages.length-1 : imageIndex-1)
    }
    function handleRight() {
        setImageIndex(imageIndex == sliderImages.length-1 ? 0 : imageIndex+1)
    }

    return (
        <div style={{ maxWidth: "500px", width: "100%", height: "400px", margin: "50px", position: "relative"}}>
            <img className="image" src={sliderImages[imageIndex]} /> 
            <button className="sliderButton" style={{left: 0}} onClick={handleLeft}>
                <SlArrowLeft />
            </button>
            <button className="sliderButton" style={{right: 0}} onClick={handleRight}>
                <SlArrowRight />
            </button>
        </div>
    )
}

export {
    ImageSlider
}