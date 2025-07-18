import { useEffect, useState } from "react"
import { getWorkshop } from "../../../api/workshopApi";
import { WorkshopCard } from "./workshopCard";
import "./card.css"

import type { Workshop } from "../../../types/workshop.types";

function CardSection() {
    const [workshops, setWorkshops] = useState<Workshop[]>([]);

    useEffect(() => {
        const loadWorkshops = async () => {
          const temp: Workshop[] = [];
          temp.push(await getWorkshop(1));
          temp.push(await getWorkshop(2));
          temp.push(await getWorkshop(3));

          setWorkshops(temp);
        }

        loadWorkshops();
    }, []);

    return (
        <div className="cardSection">
            {workshops.map((workshop) => (
                <WorkshopCard workshop={workshop} key={workshop.id}/>
            ))}
        </div>
    )
}

export {
    CardSection
}