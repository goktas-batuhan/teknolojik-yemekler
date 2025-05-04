import React from "react";
import HomeHeader from "../Components/HomeHeader";
import HomeMainSection from "../Components/HomeMainSection";
import Footer from "../Components/Footer";
import "./Home.css"


export default function Home() {
    return (
        <>  
            <div className="all">
            <HomeHeader></HomeHeader>
            <HomeMainSection></HomeMainSection>
            <Footer></Footer>
            </div>
        </>
    )
}

