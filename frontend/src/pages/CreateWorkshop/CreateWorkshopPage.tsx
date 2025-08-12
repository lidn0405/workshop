import { useState } from "react"
import "./create_workshop.css"
import { useNavigate } from "react-router-dom";

function CreateWorkshopPage() {
    const navigate = useNavigate();

    const [workshopName, setWorkshopName] = useState<string>("");
    const [whyWorkshop, setWhyWorkshop] = useState<string>("");

    function submitCreation(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (workshopName == "" || whyWorkshop == "") {
            alert("Not all fields are filled out")
            return
        }

        console.log("Submitting workshop info")
        // Make an api call to send an email with submission details
        navigate('/');
    }

    return (
        <div className="workshop_creation">
            <p className="createTitle">Create A Workshop</p>
            <p>To create a workshop, please fill in the form detailing what your workshop is about.</p>

            <form onSubmit={submitCreation} className="workshop_form">
                <div className="createFormSection">
                    <label htmlFor="workshop_name">Workshop Name</label>
                    <input type="text" id="workshop_name" value={workshopName} onChange={(e) => setWorkshopName(e.target.value)} />
                </div>
                <div className="createFormSection">
                    <label htmlFor="why_workshop">Why do you want to create this workshop?</label>
                    <input type="text" id="why_workshop" className="longer_response" value={whyWorkshop} onChange={(e) => setWhyWorkshop(e.target.value)} />
                </div>
                <button className="createWorkshopButton" type="submit">Create Workshop</button>
            </form>
        </div>
    )
}

export {
    CreateWorkshopPage
}