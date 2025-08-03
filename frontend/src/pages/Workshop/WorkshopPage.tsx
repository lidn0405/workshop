import "./workshop_page.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getWorkshop } from "../../api/workshopApi";
import { getUser } from "../../api/userApi";

import type { Topic, User, Workshop } from "../../types/workshop.types";
import { WorkshopTopic } from "./Workshop_Topic/WorkshopTopic";
import { getTopicFromWorkshop } from "../../api/topicApi";


function WorkshopPage() {
    const navigate = useNavigate();
    const params = useParams();
    const workshop_id = Number(params.workshop_id);

    const [workshop, setWorkshop] = useState<Workshop>();
    const [user, setUser] = useState<User>();
    const [topics, setTopics] = useState<Topic[]>();

    useEffect(() => {
        const getData = async () => {
            console.log(workshop_id)
            const workshopData = await getWorkshop(workshop_id);
            setWorkshop(workshopData);

            if (workshopData?.leadId !== undefined) {
                const userData = await getUser(workshopData.leadId);
                // setUser(userData);
            }

            const topicsData = await getTopicFromWorkshop(workshop_id);
            setTopics(topicsData);
        }

        getData();
    }, [])

    function routeToContent() {
        navigate(`/${workshop_id}/temp`)
    }

    return (
        <div>
            <div className="workshop_top">
                <div>
                    <p className="workshopName">{workshop?.name}</p>
                    <p className="workshopInfo">Created by {user?.name}</p>
                    <p className="workshopInfo">{workshop?.subject}</p>
                    <p className="workshopInfo">{workshop?.description}</p>
                    <button className="joinButton">Join Workshop</button>
                </div>
                <div className="rightHeader">
                    <img src="a" alt="IMAGE PLACEHOLDER" />
                </div>
            </div>

            <div className="contentBody">
                <h2>Content</h2>
                <button onClick={routeToContent}>TEST</button>

                <div>
                    {topics?.map((topic, index) => {
                        return <WorkshopTopic topic={topic} key={index} />
                    })}
                </div>
            </div>
        </div>
    )   
}

export {
    WorkshopPage
}