import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../context/GlobalContext";
import {Navigate} from "react-router-dom";


export default function RestrictedRedirect({ children, destination }) {

  const { loggedUser } = useContext(GlobalContext);
  const [ isLogged, setIsLogged ] = useState(loggedUser);

  useEffect(() => {
    setIsLogged(loggedUser);
  }, [loggedUser])

    return isLogged ? children : <Navigate to={destination} replace="true"/>

}