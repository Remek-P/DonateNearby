import React from "react";
import image from "../../../assets/images/People.jpg";

export default function HomeAbout() {
    return(
        <section
            className="about"
            id="about"
        >
            <div className="about--container">
                <div className="about--container__text">
                    <h2 className="about--container__text__header">O nas</h2>
                    <p className="about--container__text__description">
                        Nori grape silver beet broccoli kombu beet greens fava
                        bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
                        parsnip.
                    </p>
                </div>
                <div
                    className="about--container__image"
                    style={{backgroundImage: `url(${image})`}}
                />
            </div>
        </section>
    )
}