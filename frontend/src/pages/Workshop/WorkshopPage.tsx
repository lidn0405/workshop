import { useEffect } from "react";
import { useParams } from "react-router-dom"

function WorkshopPage() {
    let workshopId = useParams();

    useEffect(() => {
        console.log(workshopId);
    }, [])

    return (
        <div>
            <p>HELLO</p>
        </div>
    )   
}

export {
    WorkshopPage
}