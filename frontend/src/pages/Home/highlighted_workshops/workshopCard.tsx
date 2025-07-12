import "./card.css"

interface Workshop {
    id: number;
    name: string;
    subject: string;
    description: string;
}

interface WorkshopCardProps {
    workshop: Workshop;
}

function WorkshopCard(props: WorkshopCardProps) {

    return (
        <button className="workshopCard">
            <h1 className="cardTitle">{props.workshop.name}</h1>
            <h3 className="cardSubject">{props.workshop.subject}</h3>
            <p className="cardDesc">{props.workshop.description}</p>
        </button>
    )
}

export {
    WorkshopCard
}