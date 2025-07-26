import { CardSection } from "./highlighted_workshops/cardSection";
import "./home.css"

export default function HomePage() {
    return (
        <div className="homePage">
            <div className="homeSection" style={{backgroundColor: "#1f3850", flex: "row"}}>
                <h1 className="welcomeSection">Deep dive into courses with our workshop!</h1>
                <div style={{maxWidth: "300px", width: "100%", height: "400px"}}>
                    <img src="LoginPicture.jpg" alt="Image unavailable" style={{width: "100%", borderRadius: "20px"}}/>
                </div>
            </div>
            <div className="homeSection">
                <h1>Check Out These Amazing Workshops!</h1>
                <CardSection/>
            </div>
        </div>
    );
}