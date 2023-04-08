import React, { useState } from "react";
import { Option1 } from "./Option1/Option1";
import { Option2 } from "./Option2/Option2";
import { Option3 } from "./Option3/Option3";

export default function HomePartners() {

    const option1 = "Fundacje";
    const option2 = "Organizacjom pozarządowym";
    const option3 = "Lokalnym zbiórkom";
    const active = "activeBorder";

    const [option, setOption] = useState(option1);

    const handleOption = (e) => {
        setOption(e.target.innerText)
    }

    const optionPicker = () => {
        if (option === option1) {
            return <Option1 />
        } else if (option === option2) {
            return <Option2 />
        } else if (option === option3) {
            return <Option3 />
        }
    }

    return(
        <section>
            <div className="homePartner">
                <h2>Komu pomagamy?</h2>
                <div className="homePartner__options">
                    <h3 className={`homePartner__options__option ${option === option1 ? active : ""}`} onClick={handleOption}>{option1}</h3>
                    <h3 className={`homePartner__options__option ${option === option2 ? active : ""}`} onClick={handleOption}>{option2}</h3>
                    <h3 className={`homePartner__options__option ${option === option3 ? active : ""}`} onClick={handleOption}>{option3}</h3>
                </div>
                <div>
                    {optionPicker()}
                </div>
            </div>
            <div></div>
        </section>
    )
}