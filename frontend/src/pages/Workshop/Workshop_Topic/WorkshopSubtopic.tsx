import { useNavigate } from "react-router-dom"
import type { Topic } from "../../../types/workshop.types"
import "./workshop_topic.css"

function WorkshopSubtopic({topic, subtopic}: {topic: Topic; subtopic: Topic}) {
    const navigate = useNavigate();

    // Error getting workshop_id from topic
    function routeToContent() {
        navigate(`/content/${topic.workshopId}/${subtopic.id}/`)
    }

    return (
        <div className="subtopicSection" onClick={() => routeToContent()}>
            <p>{subtopic.name}</p>
        </div>
    )
}

export {
    WorkshopSubtopic
}