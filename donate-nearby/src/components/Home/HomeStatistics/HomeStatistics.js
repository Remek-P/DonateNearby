import React from "react";
import NoOfBags from "./NoOfBags/NoOfBags";
import BackedNGOs from "./BackedNGOs/BackedNGOs";
import NoOfCollections from "./NoOfCollections/NoOfCollections";

export default function HomeStatistics() {

    const formDataSessionStorage = sessionStorage.getItem("formDataSessionStorage") === null
        ? []
        : JSON.parse(sessionStorage.getItem("formDataSessionStorage"))

    return(
    <section className="statistics" id="statistics">
        <ul className="statistics-ul">
            <li className="statistics-ul-li">
                {/*TODO: Implement counting component*/}
                <div className="statistics-ul-li__component">
                    <NoOfBags formDataSessionStorage={formDataSessionStorage}/>
                </div>
                <h5 className="statistics-ul-li__header">
                    Oddanych worków
                </h5>
                <p className="statistics-ul-li__description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </li>
            <li className="statistics-ul-li">
                {/*TODO: Implement counting component*/}
                <div className="statistics-ul-li__component">
                    <BackedNGOs formDataSessionStorage={formDataSessionStorage} />
                </div>
                <h5 className="statistics-ul-li__header">
                    Wspartych organizacji
                </h5>
                <p className="statistics-ul-li__description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </li>
            <li className="statistics-ul-li">
                {/*TODO: Implement counting component*/}
                <div className="statistics-ul-li__component">
                    <NoOfCollections formDataSessionStorage={formDataSessionStorage} />
                </div>
                <h5 className="statistics-ul-li__header">
                    Zorganizowanych zbiórek
                </h5>
                <p className="statistics-ul-li__description">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </li>
        </ul>
    </section>
    )
}