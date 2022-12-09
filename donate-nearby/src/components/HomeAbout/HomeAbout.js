import React from "react";
import image from "../../assets/images/People.jpg";

export function HomeAbout() {
    return(
        <section
            className="about"
            id="about"
            style={{backgroundImage: `url(${image})`}}
        >
            <div
                className="about-container">
                <h2 className="about-container__header">O nas</h2>
                <p className="about-container__description">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
            </div>
        </section>
    )
}