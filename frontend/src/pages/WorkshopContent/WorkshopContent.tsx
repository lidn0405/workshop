import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { Workshop } from "../../types/workshop.types";
import { getWorkshop } from "../../api/workshopApi";

import "./workshop_content.css";

function WorkshopContent() {
    const {id} = useParams();
    const workshop_id: number = Number(id);

    const [workshop, setWorkshop] = useState<Workshop>();

    useEffect(() => {
        const getWorkshopData = async () => {
            const res = await getWorkshop(workshop_id);
            setWorkshop(res);
        }

        getWorkshopData();
    }, [])

    return (
        <div className="content_section">
            <p>{workshop?.subject}</p>    
        </div>
    )
}

export {
    WorkshopContent
}