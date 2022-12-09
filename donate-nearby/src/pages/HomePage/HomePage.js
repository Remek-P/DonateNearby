import React from "react";
import { HomeHero } from "../../components/HomeHero/HomeHero";
import { HomeStatistics } from "../../components/HomeStatistics/HomeStatistics";
import { HomeCTA } from "../../components/HomeCTA/HomeCTA";
import { HomeAbout } from "../../components/HomeAbout/HomeAbout";
import { HomePartners } from "../../components/HomePartners/HomePartners";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { HomeFooter } from "../../components/HomeFooter/HomeFooter";

export function HomePage() {

    return(
        <main className="main-container">
            <HomeHero />
            <HomeStatistics />
            <HomeCTA />
            <HomeAbout />
            <HomePartners />
            <ContactForm />
            <HomeFooter />
        </main>
    )
}