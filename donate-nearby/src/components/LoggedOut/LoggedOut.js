import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOut() {

    return (
        <section className="loggedOut">
            <h2 className="loggedOut__header">Wylogowanie nastąpiło<br/> pomyślnie!</h2>
            <Link to="/" className="loggedOut__link">Strona główna</Link>
        </section>
    )
}

