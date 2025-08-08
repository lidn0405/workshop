import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useEffect, useState } from "react";
import { getUserFromEmail } from "../../api/userApi";
import type { User } from "../../types/workshop.types";

export default function ProfilePage() {
    const navigate = useNavigate();
    const auth = useAuth();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getData = async () => {
            if (auth.username) {
                const res = await getUserFromEmail(auth.username);
                setUser(res);
            }
        }

        getData();
    }, [])

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
        <div>
            <button onClick={logout}>LOGOUT</button>
        </div>
    )
}