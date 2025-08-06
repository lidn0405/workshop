import { Outlet, useParams } from "react-router-dom";
import { WorkshopHeader } from "./header/WorkshopHeader";
import { Footer } from "../Layout/footer/Footer";

function WorkshopLayout() {
    return (
        <div>
            <WorkshopHeader/>
            <main><Outlet/></main>
            <Footer/>
        </div>
    );
}

export {
    WorkshopLayout
}