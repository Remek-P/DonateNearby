import React from "react";
import HomeHero from "../../components/HomeHero/HomeHero";
import HomeStatistics from "../../components/HomeStatistics/HomeStatistics";
import HomeCTA from "../../components/HomeCTA/HomeCTA";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomePartners from "../../components/HomePartners/HomePartners";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {

    return(
        <main className="main-container">
            <HomeHero />
            <HomeStatistics />
            <HomeCTA />
            <HomeAbout />
            <HomePartners />
            <ContactForm />
            <Footer />
        </main>
    )
}