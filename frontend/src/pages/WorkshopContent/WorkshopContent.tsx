import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type { Topic, Workshop } from "../../types/workshop.types";
import { getWorkshop } from "../../api/workshopApi";

import "./workshop_content.css";
import { getTopic } from "../../api/topicApi";

function WorkshopContent() {
    const params = useParams();
    const workshopId: number = Number(params.workshop_id);
    const topicId: number = Number(params.topic_id)

    const [workshop, setWorkshop] = useState<Workshop>();
    const [topic, setTopic] = useState<Topic>();

    useEffect(() => {
        const getContentData = async () => {
            const workshopData = await getWorkshop(workshopId);
            setWorkshop(workshopData);
            if (isNaN(topicId)) {
                console.log("TOPIC ID ERROR")
            } else {
                const topicData = await getTopic(topicId);
                setTopic(topicData);
            }
        }

        getContentData();
    }, [workshopId, topicId])

    return (
        <div className="content_section">
            <p>{workshop?.subject}</p>
            <p>{topic?.name}</p>
        </div>
    )
}

export {
    WorkshopContent
}