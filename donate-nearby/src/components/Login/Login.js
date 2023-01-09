import React, {useContext, useEffect, useRef, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContext";

export default function Login() {

    const { loginUser, loggedUser } = useContext(GlobalContext);

    const pass = "passLogin";
    const fail = "failLogin";

    const [ email,              setEmail                            ] = useState("");
    const [ password,           setPassword                         ] = useState("");
    const [ emailValidation,    setEmailValidation                  ] = useState(pass);
    const [ passwordLengthValidation, setPasswordLengthValidation   ] = useState(pass);

    const navigate = useNavigate();

    const didMount = useRef(true)

    const checkEmailRegEx = /^\S+@\S+\.\S+$/.test(email);
    const emailAlert = "Podane hasło lub email nie są poprawne";
    const passwordAlert = "Hasło powinno być dłuższe niż 6 znaków";

    useEffect(() => {
        if (loggedUser === email && email.length !== 0) {
            navigate("/");
        } else if (didMount.current) {
            didMount.current = false
        } else {
            setEmailValidation(fail);
        }
    },[loginUser]);

    const verifyEmail = () => {
        checkEmailRegEx
            ? setEmailValidation(pass)
            : setEmailValidation(fail)
    }

    const handleLogin = () => {
        if (password.length <= 6) {
            setPasswordLengthValidation(fail);
        } else if (password.length > 6) {
            setPasswordLengthValidation(pass)
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
                    />
                    <div className={`login__form-container-validation ${emailValidation}`}
                    >
                        {/*Propose a change, to avoid indicating which data is incorrect, but rather explain the combination is incorrect*/}
                        {emailAlert}
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
                    />
                    <div className={`login__form-container-validation ${passwordLengthValidation}`}
                    >
                        {passwordAlert}
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