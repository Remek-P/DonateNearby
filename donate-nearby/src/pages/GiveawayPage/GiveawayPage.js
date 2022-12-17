import React from "react";
import GiveawayHero from "../../components/Giveaway/GiveawayHero/GiveawayHero";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import CarouselForm from "../../components/Giveaway/GiveawayCarouselForm/CarouselForm";

export default function Giveaway() {
    return (
        <>
            <GiveawayHero />
            <CarouselForm />
            <ContactForm />
            <Footer />
        </>
    )
}