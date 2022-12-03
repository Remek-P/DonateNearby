import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import React from "react";

export function Navigation() {
    return (
            <nav className="navbar">
                <div className="navbar-login-section">
                    <div className="navbar-login-section__login">
                        <NavLink to="/login">
                            Zaloguj
                        </NavLink>
                    </div>
                    <div className="navbar-login-section__register">
                        <NavLink to={"/register"}>
                            Załóż konto
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-nav-section">
                    <ul className="navbar-nav-section__ul">
                        <li className="navbar-nav-section__ul__li">
                            <Link>
                                Start
                            </Link>
                        </li>
                        <li className="navbar-nav-section__ul__li">
                            <Link to="statistics" spy={true} smooth={true} delay={500} duration={500}>
                                O co chodzi?
                            </Link>
                        </li>
                        <li className="navbar-nav-section__ul__li">
                            <Link>
                                O nas
                            </Link>
                        </li>
                        <li className="navbar-nav-section__ul__li">
                            <Link>
                                Fundacje i organizacje
                            </Link>
                        </li>
                        <li className="navbar-nav-section__ul__li">
                            <Link>
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}