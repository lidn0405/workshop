import "./workshop_page.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getWorkshop } from "../../api/workshopApi";
import { getUser } from "../../api/userApi";

import type { User, Workshop } from "../../types/workshop.types";


function WorkshopPage() {
    const params = useParams();
    const workshop_id = params.workshop_id;

    const [workshop, setWorkshop] = useState<Workshop>();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const getData = async () => {
            const workshopData = await getWorkshop(Number(workshop_id));
            setWorkshop(workshopData);

            if (workshopData?.leadId !== undefined) {
                const userData = await getUser(workshopData.leadId);
                setUser(userData);
            }
        }

        getData();
    }, [])

    return (
        <div>
            <div className="workshop_header">
                <div>
                    <p className="workshopName">{workshop?.name}</p>
                    <p className="workshopInfo">Created by {user?.name}</p>
                    <p className="workshopInfo">{workshop?.subject}</p>
                    <p className="workshopInfo">{workshop?.description}</p>
                    <button className="joinButton">Join Workshop</button>
                </div>
                <div className="rightHeader">
                    <img src="a" alt="IMAGE PLACEHOLDER" />
                </div>
            </div>

            <div className="contentBody">
                <h2>Content</h2>
            </div>
        </div>
    )   
}

export {
    WorkshopPage
}