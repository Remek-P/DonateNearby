import React from "react";
import {LoginBar} from "./LoginBar/LoginBar";
import {NavigationBar} from "./NavigationBar/NavigatinBar";

export function Navigation() {

    return (
            <nav className="navbar">
                <LoginBar />
                <NavigationBar />
            </nav>
    )
}