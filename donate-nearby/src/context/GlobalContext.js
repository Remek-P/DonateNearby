import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

const initialState = {
    loginDatabase: [
        {id: 1, login: "wp@wp.pl", password: "password", isLogged: false},
        {id: 2, login: "gmail@gmail.com", password: "password1", isLogged: false},
    ],
    loggedUser: "",
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    function registerUser(userData) {
        dispatch({
            type: "Register-user",
            payload: userData,
        })
    }

    function logoutUser(login) {
        dispatch({
            type: "Logout-user",
            payload: login,
        })
    }

    function loginUser(userData) {
        dispatch({
            type: "Login-user",
            payload: userData,
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                loginDatabase: state.loginDatabase,
                loggedUser: state.loggedUser,
                logoutUser,
                loginUser,
                registerUser,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}