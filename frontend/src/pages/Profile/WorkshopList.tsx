import { useEffect, useState } from "react"
import type { Workshop } from "../../types/workshop.types";
import { getWorkshopsFromUser } from "../../api/userApi";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

function WorkshopList() {
    const navigate = useNavigate();

    const [workshops, setWorkshops] = useState<Workshop[]>([]);
    const username = useAuth().username;

    useEffect(() => {
        const getWorkshops = async () => {
            // getWorkshopsFromUser();
        }
    }, [])

    return (
        <div>
            {workshops.map((workshop) => {
                return <button onClick={() => navigate('/')}>{workshop.name}</button>
            })}
        </div>
    )
}

export {
    WorkshopList
}