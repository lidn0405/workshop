import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useEffect, useState } from "react";
import { getUserFromEmail } from "../../api/userApi";
import type { User } from "../../types/workshop.types";
import "./profile_page.css";

export default function ProfilePage() {
    const navigate = useNavigate();
    const auth = useAuth();

    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("")

    useEffect(() => {
        const getData = async () => {
            if (auth.username) {
                const res = await getUserFromEmail(auth.username);
                try {
                    setUser(res);
                    setUsername(res.username.toString());
                    setEmail(res.email.toString())
                } catch (error) {
                    console.log("Error fetching user");
                    throw error;
                }
            }
        }

        getData();
    }, [auth.username])

    function updateSettings() {

    }

    function logout() {
        try {
            auth.logout();
            navigate("/");
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return (
        <div className="profilePage">
            <div className="aboutSection">
                <img src="default_picture.jpg" alt="Profile Picture" className="profilePicture"/>
                <p>{user?.username}</p>
                <button onClick={logout}>LOGOUT</button>
            </div>
            <div className="userSettings">
                <p>Profile Settings</p>
                <form className="formClass" action={updateSettings}>
                    <div className="formSection">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} className="formInput" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="formSection">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={email} className="formInput" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <button className="" type="submit">Update Settings</button>
                </form>
            </div>
        </div>
    )
}