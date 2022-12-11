import React, {useContext} from "react";
import { NavLink } from "react-router-dom";

import { GlobalContext } from "../../../context/GlobalContext";
import Logout from "./Logout/Logout";

export default function LoginBar() {

    const { loggedUser } = useContext(GlobalContext)

    const greeting = "Cześć"

    if (loggedUser.length !== 0) {
        return (
            <div className="login-section">
                <div className="login-section__logged">
                    <NavLink to="/">
                        {greeting} {loggedUser}!
                    </NavLink>
                </div>
                <div className="login-section__giveaway">
                    <NavLink to={"/giveaway"}>
                        Oddaj rzeczy
                    </NavLink>
                </div>
                <div className="login-section__logout">
                    <Logout />
                </div>
            </div>
        )
    } else {
        return (
            <div className="login-section">
                <div className="login-section__login">
                    <NavLink to="/login">
                        Zaloguj
                    </NavLink>
                </div>
                <div className="login-section__register">
                    <NavLink to={"/register"}>
                        Załóż konto
                    </NavLink>
                </div>
            </div>
        )
    }
}