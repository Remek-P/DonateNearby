import React from "react";
import LoginBar from "./LoginBar/LoginBar";
import NavigationBar from "./NavigationBar/NavigatinBar";

export default function Navigation() {

    return (
            <nav className="navbar">
                <LoginBar />
                <NavigationBar />
            </nav>
    )
}