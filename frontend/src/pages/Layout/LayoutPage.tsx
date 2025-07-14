import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { useState } from "react";

export default function LayoutPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (
        <div>
            <Header isLoggedIn={isLoggedIn}/>
            <main><Outlet /></main>
            <Footer />
        </div>
    )
}