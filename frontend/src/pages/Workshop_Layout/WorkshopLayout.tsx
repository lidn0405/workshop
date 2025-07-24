import { Outlet, useParams } from "react-router-dom";
import { WorkshopHeader } from "./header/WorkshopHeader";
import { Footer } from "../Layout/footer/Footer";

function WorkshopLayout() {
    const {id} = useParams();

    const id_number: number = Number(id);

    return (
        <div>
            <WorkshopHeader workshop_id={id_number}/>
            <main><Outlet/></main>
            <Footer/>
        </div>
    );
}

export {
    WorkshopLayout
}