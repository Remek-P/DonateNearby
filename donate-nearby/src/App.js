import React from "react";
import "./scss/main.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { LogoutPage } from "./pages/LogoutPage/LogoutPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { MissingPage } from "./pages/MissingPage/MissingPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
              <Route exact path={"/"} element={<HomePage />} />
              <Route path={"login"} element={<LoginPage />} />
              <Route path={"logout"} element={<LogoutPage />} />
              <Route path={"register"} element={<RegisterPage />} />
              <Route path={"*"} element={<MissingPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
