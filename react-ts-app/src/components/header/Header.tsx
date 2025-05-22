// import { useState, useEffect} from "react"
import './header.css'

function Header() {
    return (
        <div className="header">
                <a href="">
                    <div className="logo">
                        <img id="ypstemLogo" src="../../../YPStem Logo.png" />
                        <p id="logoName">Youth Pioneers in STEM</p>
                    </div>
                </a>
            <input id="searchBar" type="text" placeholder="Search"/>
            <div className="topButtons">
                <button className="loginButton">Login</button>
                <button className="loginButton">Signup</button>
            </div>
        </div>
    )
}

export {
    Header,
}