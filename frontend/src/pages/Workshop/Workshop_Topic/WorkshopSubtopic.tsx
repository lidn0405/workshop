import type { Topic } from "../../../types/workshop.types"
import "./workshop_topic.css"

function WorkshopSubtopic({subtopic}: {subtopic: Topic}) {
    return (
        <div className="subtopicSection">
            <p>{subtopic.name}</p>
        </div>
    )
}

export {
    WorkshopSubtopic
}