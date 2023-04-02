import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {GlobalContext} from "../../../../context/GlobalContext";

export default function Logout() {

    const navigate = useNavigate()

    const { logoutUser, loggedUser } = useContext(GlobalContext);

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
