import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getWorkshop } from "../../api/workshopApi";

import type { Workshop } from "../../types/workshop.types";

function WorkshopPage() {
    const params = useParams();
    const workshop_id = params.workshop_id;

    const [workshop, setWorkshop] = useState<Workshop>();

    useEffect(() => {
        const getData = async () => {
            const data = await getWorkshop(1);
            setWorkshop(data);
        }

        getData();
    }, [])

    return (
        <div>
            <h1>{}</h1>
            <p>{}</p>
        </div>
    )   
}

export {
    WorkshopPage
}