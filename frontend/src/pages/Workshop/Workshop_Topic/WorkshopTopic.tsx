import { useEffect, useState } from "react"
import type { Topic } from "../../../types/workshop.types"
import "./workshop_topic.css"


function WorkshopTopic({topic} : {topic: Topic}) {

    useEffect(() => {
        
    }, []);

    return (
        <div className="firstSection">
            <p>{topic.name}</p>
        </div>
    )
}

export {
    WorkshopTopic
}