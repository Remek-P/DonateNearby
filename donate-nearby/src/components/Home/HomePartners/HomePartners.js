import React, {useState} from "react";

export default function HomePartners() {

    let [option, setOption] = useState("Option1");

    const handleOption = (e) => {
        setOption(e.target.innerText)
    }

    const Option1 = "Fundacje";
    const Option2 = "Organizacjom pozarządowym";
    const Option3 = "Lokalnym zbiórkom";

    const picker = () => {
        if (option === Option1) {
            return
        }
    }

    return(
        <section>
            <div>
                <h2>Komu pomagamy?</h2>
                <div>
                    <h3 onClick={handleOption}>{Option1}</h3>
                    <h3 onClick={handleOption}>{Option2}</h3>
                    <h3 onClick={handleOption}>{Option3}</h3>
                </div>
                <div>
                    <p></p>

                </div>
            </div>
            <div></div>
        </section>
    )
}