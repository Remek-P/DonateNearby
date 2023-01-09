import React, {useContext, useEffect, useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContext";

export default function Login() {

    const { loginUser, loggedUser } = useContext(GlobalContext);

    const [ email,              setEmail                            ] = useState("");
    const [ password,           setPassword                         ] = useState("");
    const [ emailValidation,    setEmailValidation                  ] = useState("passLogin");
    const [ passwordLengthValidation, setPasswordLengthValidation   ] = useState("passLogin");

    const navigate = useNavigate();

    const didMount = useRef(true)

    useEffect(() => {
        if (loggedUser === email && email.length !== 0) {
            navigate("/");
        } else if (didMount.current) {
            didMount.current = false
        } else {
            setEmailValidation("failLogin");
        }
    },[loginUser])

    const handleLogin = () => {
        if (password.length <= 6) {
            setPasswordLengthValidation("failLogin");
        } else if (password.length > 6) {
            setPasswordLengthValidation("passLogin")
            const userData = {
                email,
                password,
            };
            loginUser(userData);
        }
    }

    return (
        <section className="login">
            <h2 className="login__header">Zaloguj się</h2>
            <form className="login__form">
                <div className="login__form-container">
                    <label
                        className="login__form-container__label"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="login__form-container__input"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        autoCorrect={"on"}
                        name="email"
                        id="email"
                        required
                    />
                    <div className={`login__form-container-validation ${emailValidation}`}
                    >
                        {/*Propose a change, to avoid indicating which data is incorrect, but rather explain the combination is incorrect*/}
                        Podane hasło lub email nie są poprawne
                    </div>
                </div>
                <div className="login__form-container">
                    <label
                        className="login__form-container__label"
                        htmlFor="password"
                    >
                        Hasło
                    </label>
                    <input
                        className="login__form-container__input"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        name="password"
                        id="password"
                        required
                    />
                    <div className={`login__form-container-validation ${passwordLengthValidation}`}
                    >
                        Hasło powinno być dłuższe niż 6 znaków
                    </div>
                </div>
            </form>
            <div className="login__buttons">
                <Link to="/register"
                      className="login__buttons-register"
                >
                    Załóż konto
                </Link>
                <button onClick={handleLogin}
                        className="login__buttons-login"
                >
                    Zaloguj się
                </button>
            </div>
        </section>
    )
}