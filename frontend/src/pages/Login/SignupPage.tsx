import { Signup } from "./LoginComponents/Signup"
import "./login_page.css"

export default function SignupPage() {
    return (
        <div className="loginPage">
            <div style={{maxWidth: "600px", width: "100%", height: "400px"}}>
                <img src="LoginPicture.jpg" alt="" style={{width: "100%", borderRadius: "20px"}}/>
            </div>
            <Signup />
        </div>
    )
}