import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Workshop_Header.css";
import { getWorkshop } from "../../../api/workshopApi";
import type { Workshop } from "../../../types/workshop.types";


function WorkshopHeader() {

    const params = useParams();
    const workshop_id = Number(params.workshop_id);

    const [workshop, setWorkshop] = useState<Workshop>();

    useEffect(() => {
        const getWorkshopData = async () => {
            console.log(workshop_id);
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