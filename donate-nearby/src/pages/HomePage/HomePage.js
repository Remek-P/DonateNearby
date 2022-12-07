import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Statistics } from "../../components/Statistics/Statistics";
import { CTA } from "../../components/CTA/CTA";
import { About } from "../../components/About/About";
import { Partners } from "../../components/Partners/Partners";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Footer } from "../../components/Footer/Footer";

export function HomePage() {

    return(
        <main className="main-container">
            <Hero />
            <Statistics />
            <CTA />
            <About />
            <Partners />
            <ContactForm />
            <Footer />
        </main>
    )
}