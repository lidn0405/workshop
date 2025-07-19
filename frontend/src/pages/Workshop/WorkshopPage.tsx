import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getWorkshop } from "../../api/workshopApi";

import type { Workshop } from "../../types/workshop.types";

import "./workshop_page.css";

function WorkshopPage() {
    const params = useParams();
    const workshop_id = params.workshop_id;

    const [workshop, setWorkshop] = useState<Workshop>();

    useEffect(() => {
        const getData = async () => {
            const data = await getWorkshop(Number(workshop_id));
            setWorkshop(data);
        }

        getData();
    }, [])

    return (
        <div>
            <div className="workshop_header">
                <h1>{workshop?.name}</h1>
                <p>{workshop?.subject}</p>
                <p>{workshop?.description}</p>
            </div>
            <hr />


        </div>
    )   
}

export {
    WorkshopPage
}