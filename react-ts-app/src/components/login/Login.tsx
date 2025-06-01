import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import { useState } from "react"

function Login() {
    // use to navigate after handleLogin logic
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (!email || !password) {
            alert("Please Fill Out All Information")
        }
    }

    return (
        <div style={{width: "500px", height: "800px"}}>
            <form>
                <div className="formContent">
                    <p className="formHeading">Log In</p>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="email">Email</label>
                        <input className="formText" type="text" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="password">Password</label>
                        <input className="formText" type="password" onChange={(e) => {
                            setPassword(e.target.value);
                        }}/>
                    </div>
                    <button className="loginButton" type="button" onClick={handleLogin}>Login</button>
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