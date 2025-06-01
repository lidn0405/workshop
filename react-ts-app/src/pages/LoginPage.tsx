import { Login } from "../components/login/Login"
import "../stylesheets/pages.css"

export default function LoginPage() {
    return (
        <div className="loginPage">
            <div style={{maxWidth: "600px", width: "100%", height: "400px", border: "none",}}>
                <img style={{width: "100%", overflow: "hidden", borderRadius: "20px"}} src="LoginPicture.jpg" alt="" />
            </div>
            <Login />
        </div>
    )
}