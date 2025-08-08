import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import { useState } from "react"

function Login() {
    // use to navigate after handleLogin logic
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePass, setHidePass] = useState(true);

    function handleLogin() {
        if (!email || !password) {
            alert("Please Fill Out All Information")
        }
    }

    function handleShowPassword() {
        setHidePass(!hidePass);
    }

    return (
        <div style={{width: "500px", height: "600px"}}>
            <form>
                <div className="formContent">
                    <p className="formHeading">Log In</p>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="email">Email</label>
                        <input className="formText" id="email" type="text" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    <div className="formSection">
                        <div className="passwordSection">
                            <label className="formLabel" htmlFor="password">Password</label>
                            <button className="showPasswordButton" type="button" onClick={handleShowPassword}>{hidePass ? "Show Password" : "Hide Password"}</button>
                        </div>
                        <input className="formText" id="password" type={hidePass ? "password" : "text"} onChange={(e) => {
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