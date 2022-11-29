import React from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <nav>
                <section>
                    <div>Zaloguj</div>
                    <div>Załóż konto</div>
                </section>
                <section>
                    <ul>
                        <li>Start</li>
                        <li>O co chodzi?</li>
                        <li>O nas</li>
                        <li>Fundacje i organizacje</li>
                        <li>Kontakt</li>
                    </ul>
                </section>
            </nav>

            <Outlet/>

        </>
    )
}