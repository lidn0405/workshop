import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Workshop_Header.css";
import { getWorkshop } from "../../../api/workshopApi";
import type { Workshop } from "../../../types/workshop.types";

interface WorkshopHeaderProps {
    workshop_id: number;
}

function WorkshopHeader({workshop_id}:WorkshopHeaderProps) {

    const [workshop, setWorkshop] = useState<Workshop>();

    useEffect(() => {
        const getWorkshopData = async () => {
             const res = await getWorkshop(workshop_id);
             setWorkshop(res);
        }

        getWorkshopData();
    }, []);

    return (
        <div className="workshop_header">
            <div className="top_left">
                <Link to={"/"} className="logo_link">
                    <img src="/YPStem Logo.png" alt="Logo"  className="workshop_logo"/>
                </Link>
                <Link to={`/workshop/${workshop_id}`} className="link_style">
                    {workshop?.name}
                </Link>
            </div>
        </div>
    )
}

export {
    WorkshopHeader
}