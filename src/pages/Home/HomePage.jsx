import React from "react";
import WelcomeBanner from "./components/WelcomeBanner";
import AboutBanner from "./components/AboutBanner";
import ResourcesBanner from "./components/ResourcesBanner";
import ContactMeBanner from "./components/ContactMeBanner";


export default function HomePage() {


    return (
        <div>
            <WelcomeBanner />
            <AboutBanner />
            <ResourcesBanner />
            <ContactMeBanner />
            
            
        </div>
    )
}