import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

export default function LoggedOut() {

    const navigate = useNavigate()

    useEffect(() => {
        const timerId = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearTimeout(timerId);
    }, []);

    return (
        <section className="loggedOut">
            <h2 className="loggedOut__header">Wylogowanie nastąpiło<br/> pomyślnie!</h2>
            <Link to="/" className="loggedOut__link">Strona główna</Link>
        </section>
    )
}

