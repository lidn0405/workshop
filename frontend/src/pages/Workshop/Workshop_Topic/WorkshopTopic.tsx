import { useEffect, useState } from "react"
import "./workshop_topic.css"
import type { Topic } from "../../../types/workshop.types";
import { getTopicFromWorkshop } from "../../../api/topicApi";

function WorkshopTopic() {

    const [topics, setTopics] = useState<Topic[]>();

    useEffect(() => {
        const getData = async () => {
            await getTopicFromWorkshop(1);
        }

        getData();
    }, [])

    return (
        <div className="firstSection">
            <p>Section Name</p>
            
        </div>
    )
}

export {
    WorkshopTopic
}