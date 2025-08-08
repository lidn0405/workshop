import { Link, useNavigate } from "react-router-dom"
import "./login.css"
import { useState, type FormEvent } from "react"
import { useAuth } from "../../../context/useAuth";

function Login() {
    // use to navigate after handleLogin logic
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePass, setHidePass] = useState(true);

    const { login } = useAuth();

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!email || !password) {
            alert("Please Fill Out All Information")
            return;
        }
        try {
            const res = await login({email, password})
            navigate("/")
        } catch (error) {
            console.log(error);
            alert("Invalid Username or Password")
            throw error;
        }
    }

    function handleShowPassword() {
        setHidePass(!hidePass);
    }

    return (
        <div style={{width: "500px", height: "600px"}}>
            <form onSubmit={handleLogin}>
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
                    <button className="loginButton" type="submit">Login</button>
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