// import { useState, useEffect} from "react"
import { Link, useNavigate } from 'react-router-dom'

import './header.css'

function Header() {
    let navigate = useNavigate();

    return (
        <div className="header">
                <Link to={"/"}>
                    <div className="logo">
                        <img id="ypstemLogo" src="../../../YPStem Logo.png" />
                        <p id="logoName">Youth Pioneers in STEM</p>
                    </div>
                </Link>
            <input id="searchBar" type="text" placeholder="Search"/>
            <div className="topButtons">
                <button className="loginButton" onClick={() => navigate("/profile")}>Login</button>
                <button className="loginButton" onClick={() => navigate("/profile")}>Signup</button>
            </div>
        </div>
    )
}

export {
    Header,
}