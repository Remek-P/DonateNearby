import React from "react";
import HomeHero from "../../components/Home/HomeHero/HomeHero";
import HomeStatistics from "../../components/Home/HomeStatistics/HomeStatistics";
import HomeCTA from "../../components/Home/HomeCTA/HomeCTA";
import HomeAbout from "../../components/Home/HomeAbout/HomeAbout";
import HomePartners from "../../components/Home/HomePartners/HomePartners";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {

    return(
        <main className="main-container">
            <HomeHero />
            <HomeStatistics />
            <HomeCTA />
            <HomeAbout />
            {/*<HomePartners />*/}
            <ContactForm />
            <Footer />
        </main>
    )
}