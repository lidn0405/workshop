import "./card.css"

import type { Workshop } from "../../../types/workshop.types";
import { useNavigate } from "react-router-dom";

interface WorkshopCardProps {
    workshop: Workshop;
}

function WorkshopCard(props: WorkshopCardProps) {
    const navigate = useNavigate();

    function routeToWorkshop() {
        navigate(`/workshop/${props.workshop.id}`);
    }

    return (
        <button className="workshopCard" onClick={routeToWorkshop}>
            <h1 className="cardTitle">{props.workshop.name}</h1>
            <h3 className="cardSubject">{props.workshop.subject}</h3>
            <p className="cardDesc">{props.workshop.description}</p>
        </button>
    )
}

export {
    WorkshopCard
}