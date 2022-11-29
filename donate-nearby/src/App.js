import React from "react";
import "./scss/main.scss"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Form } from "./pages/Form/Form";
import { Login } from "./pages/Login/Login";
import { Logout } from "./pages/Logout/Logout";
import { Register } from "./pages/Register/Register";
import { MissingPage } from "./pages/MissingPage/MissingPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path={"form"} element={<Form />}></Route>
              <Route path={"login"} element={<Login />}></Route>
              <Route path={"logout"} element={<Logout />}></Route>
              <Route path={"register"} element={<Register />}></Route>
              <Route path={"*"} element={<MissingPage />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
