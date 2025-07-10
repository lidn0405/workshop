import { useEffect, useState } from "react"
import { getWorkshop } from "../../../api/workshopApi";
import { WorkshopCard } from "./workshopCard";

interface Workshop {
    id: number;
    name: string;
    subject: string;
    description: string;
}

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
    }), [];

    return (
        <div>
            {workshops.map((workshop) => (
                <WorkshopCard workshop={workshop} key={workshop.id}/>
            ))}
        </div>
    )
}

export {
    CardSection
}