import React from "react";
import GiveawayHero from "../../components/GiveawayHero/GiveawayHero";
import GiveawayForm from "../../components/GiveawayForm/GiveawayForm";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function Giveaway() {
    return (
        <>
            <GiveawayHero />
            <GiveawayForm />
            <ContactForm />
            <Footer />
        </>
    )
}