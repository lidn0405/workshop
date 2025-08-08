import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/useAuth';

import './header.css'

function Header() {
    let navigate = useNavigate();
    const auth = useAuth();
    console.log(auth.token);
    var loggedIn = (auth.token != null);

    return (
        <div className="header">
            <Link style={{textDecoration: "none"}} to={"/"}>
                <div className="logo">
                    <img id="ypstemLogo" src="/YPStem Logo.png" />
                    <p id="logoName">YPStem Workshop</p>
                </div>
            </Link>
            <input id="searchBar" type="text" placeholder="Search For a Workshop"/>
            <div className="topButtons">
                {
                    loggedIn ? (
                        <div>
                            <button className='headerButton' onClick={() => navigate("/profile")}>Profile</button>
                        </div>
                    )
                    : (
                        <div>
                            <button className="headerButton" onClick={() => navigate("/login")}>Login</button>
                            <button className="headerButton" onClick={() => navigate("/signup")}>Signup</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export {
    Header,
}