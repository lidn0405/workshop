import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

import "../stylesheets/pages.css"

export default function Layout() {
    return (
        <div>
            <Header />
            <main className="bodyElement"><Outlet /></main>
            <Footer />
        </div>
    )
}