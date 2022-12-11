import React, { lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";

import { GlobalProvider } from "./context/GlobalContext";

import "./scss/main.scss"

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const LogoutPage = lazy(() => import("./pages/LogoutPage/LogoutPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const MissingPage = lazy(() => import("./pages/MissingPage/MissingPage"));
const Giveaway = lazy(() => import("./pages/GiveawayPage/GiveawayPage"));

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
