// import { useState, useEffect} from "react"
import { Link, useNavigate } from 'react-router-dom'

import './header.css'
import { useState } from 'react';

function Header() {
    let navigate = useNavigate();
    const [signedIn, setSignedIn] = useState(true);

    return (
        <div className="header">
            <Link style={{textDecoration: "none"}} to={"/"}>
                <div className="logo">
                    <img id="ypstemLogo" src="../../../YPStem Logo.png" />
                    <p id="logoName">YPStem Workshop</p>
                </div>
            </Link>
            <input id="searchBar" type="text" placeholder="Search For a Workshop"/>
            <div className="topButtons">
                {
                    !signedIn ? (
                        <div>
                            <button className="headerButton" onClick={() => navigate("/login")}>Login</button>
                            <button className="headerButton" onClick={() => navigate("/signup")}>Signup</button>
                        </div>
                    )
                    : (
                        <button className='headerButton' onClick={() => navigate("/profile")}>Profile</button>
                    )
                }
            </div>
        </div>
    )
}

export {
    Header,
}