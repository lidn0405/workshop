import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

function Signup() {
    // use to navigate after handleSubmit logic
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copy, setCopy] = useState("");

    function handleSubmit() {
        if (!email || !password || !copy) {
            alert("Please Fill in All Information");
        }
        if (password !== copy) {
            alert("Passwords Do Not Match")
        }
    }

    return (
        <div style={{width: "500px", height: "800px"}}>
            <form>
                <div className="formContent" style={{height: "560px"}}>
                    <p className="formHeading">Sign Up</p>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="username">Email</label>
                        <input type="text" className="formText" onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="password">Create Password</label>
                        <input type="password" className="formText" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="password">Re-Enter Password</label>
                        <input type="password" className="formText" onChange={(e) => {setCopy(e.target.value)}}/>
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