import React from "react";
import NextOrConfirmButton from "../../GiveawayCarouselFormButtons/NextOrConfirmButton/NextOrConfirmButton";
import PreviousButton from "../../GiveawayCarouselFormButtons/PreviousButton/PreviousButton";
import GiveawayCarouselFormStepCount from "../../GiveawayCarouselFormStepCount/GiveawayCarouselFormStepCount";

export default function CarouselFormStep2({ formData, setFormData, step, handlePrevious, handleNext }) {

  const buttonClassName = "padding2"

    const bagNoOption = ["1", "2", "3", "4", "5"];

    const choseBagNo = () => {
        return (
            bagNoOption.map((el) =>
                <option
                    key={el}
                    value={el}
                    selected={formData.bagNumber === el}
                >
                    {el}
                </option>)
        )
    }

    return (
        <div className="carouselFormStep2">
            <GiveawayCarouselFormStepCount step={step} />
            <form
                className="carouselFormStep2__form"
                name="giveawayForm"
                onSubmit={handleNext}
            >
                    <h3 className="carouselFormStep2__form__header">
                        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                    </h3>
                <label htmlFor="bagNo" id="location">Liczba 60l worków:</label>
                    <select
                        name="location"
                        className="carouselFormStep2__form--container"
                        onChange={event => setFormData({ ...formData, bagNumber: event.target.value})}
                        required
                    >
                        <option value="" selected hidden>— wybierz —</option>
                        {
                            choseBagNo()
                        }
                    </select>
                <div className="carouselFormStep2__form--buttonContainer">
                    <PreviousButton handlePrevious={handlePrevious} buttonClassName={buttonClassName}
                    />
                    <NextOrConfirmButton buttonClassName={buttonClassName}/>
                </div>
            </form>
        </div>
    )
}