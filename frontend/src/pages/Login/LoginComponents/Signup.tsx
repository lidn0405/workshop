import { Link, useNavigate } from "react-router-dom"
import { useState, type FormEvent } from "react";
import { useAuth } from "../../../context/useAuth";

function Signup() {
    // use to navigate after handleSubmit logic
    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copy, setCopy] = useState("");
    const [hidePass, setHidePass] = useState(true);

    const { signup } = useAuth();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!username || !email || !password || !copy) {
            alert("Please Fill in All Information");
            return;
        }
        if (password !== copy) {
            alert("Passwords Do Not Match")
            return;
        }

        try {
            await signup({username, email, password});
            navigate("/login");
        } catch (error) {
            console.log("Error Signing Up");
            alert("Error Signing Up")
        }
    }

    function handleShowPassword() {
        setHidePass(!hidePass);
    }

    return (
        <div style={{width: "500px", height: "600px"}}>
            <form onSubmit={handleSubmit}>
                <div className="formContent" style={{height: "650px"}}>
                    <p className="formHeading">Sign Up</p>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="username">Username</label>
                        <input className="formText" id="username" onChange={(e) => {setUsername(e.target.value)}} />
                    </div>
                    <div className="formSection">
                        <label className="formLabel" htmlFor="email">Email</label>
                        <input className="formText" id="email" onChange={(e) => {setEmail(e.target.value)}} />
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
                    <button className="loginButton" type="submit">Create Account</button>
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