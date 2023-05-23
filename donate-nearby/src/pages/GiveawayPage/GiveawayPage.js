import React, {useContext, useEffect} from "react";
import GiveawayHero from "../../components/Giveaway/GiveawayHero/GiveawayHero";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import CarouselForm from "../../components/Giveaway/GiveawayCarouselForm/CarouselForm";
import { GlobalContext } from "../../context/GlobalContext";
import {useNavigate} from "react-router-dom";

export default function Giveaway() {

  const { loggedUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (!loggedUser) {
        navigate("/login", { replace: true })
      }
    })

    return () => clearTimeout(timerID);
  }, [])

    return (
        <>
            <GiveawayHero />
            <CarouselForm />
            <ContactForm />
            <Footer />
        </>
    )
}