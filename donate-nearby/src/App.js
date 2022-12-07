import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { LogoutPage } from "./pages/LogoutPage/LogoutPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { MissingPage } from "./pages/MissingPage/MissingPage";
import { Giveaway } from "./pages/GiveawayPage/GiveawayPage";
import { GlobalProvider } from "./context/GlobalContext";

import "./scss/main.scss"


function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="logged-out" element={<LogoutPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="giveaway" element={<Giveaway />} />
                        <Route path="*" element={<MissingPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;
