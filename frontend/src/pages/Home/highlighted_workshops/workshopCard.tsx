
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
        <div>
            <h1>{props.workshop.name}</h1>
            <h3>{props.workshop.subject}</h3>
            <p>{props.workshop.description}</p>
        </div>
    )
}

export {
    WorkshopCard
}