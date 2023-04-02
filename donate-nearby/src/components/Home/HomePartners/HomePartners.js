import React, { useState } from "react";
import { Option1 } from "./Option1/Option1";

export default function HomePartners() {

    const option1 = "Fundacje";
    const option2 = "Organizacjom pozarządowym";
    const option3 = "Lokalnym zbiórkom";

    const [option, setOption] = useState(option1);

    const handleOption = (e) => {
        setOption(e.target.innerText)
    }

    const descriptionPicker = () => {
        if (option === option1) {
            return (
                <>
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                    <Option1 />
                </>

            )
        } else if (option === option2) {
            return (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            )
        } else if (option === option3) {
            return (
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            )
        }
    }

    return(
        <section>
            <div>
                <h2>Komu pomagamy?</h2>
                <div>
                    <h3 onClick={handleOption}>{option1}</h3>
                    <h3 onClick={handleOption}>{option2}</h3>
                    <h3 onClick={handleOption}>{option3}</h3>
                </div>
                <div>
                    {descriptionPicker()}
                </div>
            </div>
            <div></div>
        </section>
    )
}