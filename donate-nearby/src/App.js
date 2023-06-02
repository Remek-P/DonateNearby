import React, { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import RestrictedRedirect from "./components/RestrictedRedirect/RestrictedRedirect";
import { GlobalProvider } from "./context/GlobalContext";
//The rest is lazy loaded

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
              <Route path="/giveaway" element={<Giveaway />} />
              {/*<Route*/}
              {/*    path="/giveaway"*/}
              {/*    element={*/}
              {/*      <RestrictedRedirect destination="/login">*/}
              {/*        <Giveaway />*/}
              {/*      </RestrictedRedirect>*/}
              {/*    }*/}
              {/*/>*/}
            </Route>
            <Route path="*"
                   element={<Suspense>
                     <MissingPage defer />
                   </Suspense>}
            />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
  );
}

export default App;
