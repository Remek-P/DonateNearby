import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {GlobalContext} from "../../../../context/GlobalContext";

export function Logout() {

    const navigate = useNavigate()

    const { logoutUser, loggedUser } = useContext(GlobalContext);

    console.log(loggedUser)
    const logout = () => {
        logoutUser(loggedUser)
        navigate("/logged-out")
    }

    return (
        <button className={"logout"} onClick={logout}>
            Wyloguj
        </button>
    )
}
