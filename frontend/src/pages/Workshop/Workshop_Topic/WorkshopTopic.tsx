import { useEffect, useState } from "react"
import type { Topic } from "../../../types/workshop.types"
import "./workshop_topic.css"
import { getSubtopics } from "../../../api/topicApi";
import { WorkshopSubtopic } from "./WorkshopSubtopic";


function WorkshopTopic({topic} : {topic: Topic}) {

    const [displayData, setDisplayData] = useState(false)
    const [firstClick, setFirstClick] = useState(false);
    const [subtopics, setSubtopics] = useState<Topic[]>()

    useEffect(() => {
        const getData = async () => {
            const res = await getSubtopics(topic.id);
            setSubtopics(res);
            console.log(res);
        }

        getData();
    }, [firstClick]);

    function topicClick() {
        // Check if data already received
        if (firstClick == false) {
            setFirstClick(true);
        }
        setDisplayData(!displayData);
    }

    return (
        <div>
            <button className="firstSection" onClick={topicClick}>
                <p className="topicName">{topic.name}</p>
            </button>
            {displayData && subtopics && subtopics.length > 0 ? subtopics.map(subtopic => {
                return (<WorkshopSubtopic topic={topic} subtopic={subtopic} key={subtopic.id}/>);
            }) : null}
        </div>
    )
}

export {
    WorkshopTopic
}