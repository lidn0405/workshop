import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

function Signup() {
    // use to navigate after handleSubmit logic
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copy, setCopy] = useState("");
    const [hidePass, setHidePass] = useState(true);

    function handleSubmit() {
        if (!email || !password || !copy) {
            alert("Please Fill in All Information");
        }
        if (password !== copy) {
            alert("Passwords Do Not Match")
        }
    }

    function handleShowPassword() {
        setHidePass(!hidePass);
    }

    return (
        <div style={{width: "500px", height: "600px"}}>
            <form>
                <div className="formContent" style={{height: "560px"}}>
                    <p className="formHeading">Sign Up</p>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="username">Email</label>
                        <input className="formText" id="username" onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="formSection">
                        <div className="passwordSection">
                            <label className="formLabel" htmlFor="password">Create Password</label>
                            <button className="showPasswordButton" type="button" onClick={handleShowPassword}>{hidePass ? "Show Password" : "Hide Password"}</button>
                        </div>
                        <input className="formText" id="password" type={hidePass ? "password" : "text"} onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="re-password">Re-Enter Password</label>
                        <input className="formText" type={hidePass ? "password" : "text"} id="re-password" onChange={(e) => {setCopy(e.target.value)}}/>
                    </div>
                    <button className="loginButton" type="button" onClick={handleSubmit}>Create Account</button>
                    <br />
                    <p className="linkText">Already have an account? <Link to="/login" className="linkText">Sign In</Link></p>
                </div>
            </form>
        </div>
    )
}

export {
    Signup,
}