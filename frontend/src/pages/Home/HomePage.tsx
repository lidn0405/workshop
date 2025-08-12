import { useNavigate } from "react-router-dom";
import { CardSection } from "./highlighted_workshops/cardSection";
import "./home.css"
import { useAuth } from "../../context/useAuth";

export default function HomePage() {
    const navigate = useNavigate();

    const auth = useAuth();

    return (
        <div className="homePage">
            <div className="homeSection" style={{backgroundColor: "#1f3850", flex: "row"}}>
                <div className="welcomeMessage">
                    <p className="catchPhrase">Knowledge Has No Barriers.</p>
                    <div className="smallMessageSection">
                        <p className="smallerMessage">Welcome to your learning space</p>
                        <p className="smallerMessage">Designed for everyone.</p>
                    </div>
                    <button className="learnNowButton" onClick={() => {
                        if (auth.token) {
                            navigate('/profile')
                        } else {
                            navigate('/login')
                        }
                    }}>
                        Start Learning Now</button>
                </div>
                <div className="welcomeImage">
                    <div style={{maxWidth: "500px", width: "100%", height: "400px"}}>
                        <img src="LoginPicture.jpg" alt="Image unavailable" style={{width: "100%", borderRadius: "20px"}}/>
                    </div>
                </div>
            </div>
            <div className="workshopSection">
                <h1>Check Out These Amazing Workshops!</h1>
                <CardSection/>
            </div>
        </div>
    );
}