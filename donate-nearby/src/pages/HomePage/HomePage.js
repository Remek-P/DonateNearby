import React, {useContext} from "react";
import { Hero } from "../../components/Hero/Hero";
import { Statistics } from "../../components/Statistics/Statistics";
import {CTA} from "../../components/CTA/CTA";
import {About} from "../../components/About/About";
import {Partners} from "../../components/Partners/Partners";
import {ContactForm} from "../../components/ContactForm/ContactForm";
import {GlobalContext} from "../../context/GlobalContext";

export function HomePage() {
    const { loginDatabase, loggedUser } = useContext(GlobalContext);
    console.log(loginDatabase);
    console.log(loggedUser);
    return(
        <main className="main-container">
            <Hero />
            <Statistics />
            <CTA />
            <About />
            <Partners />
            <ContactForm />
        </main>
    )
}