import { Link } from "react-router-dom"
import "./login.css"
import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {

    }

    return (
        <div style={{height: "400px", width: "600px"}}>
            <form>
                <div className="formContent">
                    <p className="formHeading">Log in to keep learning!</p>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="email">Email</label>
                        <input className="formText" type="text" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="password">Password</label>
                        <input className="formText" type="text" onChange={(e) => {
                            setPassword(e.target.value);
                        }}/>
                    </div>
                    <button className="loginButton">Login</button>
                     <div>
                        <p className="formLabel">Don't have an account? <Link className="linkText" to={"/signup"}>Sign Up</Link></p>
                     </div>
                </div>
            </form>
        </div>
    )
}

export {
    Login
}