import React from "react";

export function HomeStatistics() {
    return(
    <section className="statistics" id="statistics">
        <ul className="statistics-ul">
            <li className="statistics-ul-li">
                {/*TODO: Implement counting component*/}
                <div className="statistics-ul-li__component">
                    10
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
                    5
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
                    7
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