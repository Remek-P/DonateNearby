import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContext";

export default function Register() {

    const { registerUser, validateUserEmail, registerDatabase } = useContext(GlobalContext);

    const [ email,              setEmail                            ] = useState("");
    const [ password,           setPassword                         ] = useState("");
    const [ rePassword,           setRePassword                     ] = useState("");
    const [ emailValidation,    setEmailValidation                  ]= useState("pass");
    const [ passwordLengthValidation, setPasswordLengthValidation   ] = useState("pass");

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        setPasswordLengthValidation(
            password.length <= 6
                ? "fail"
                : "pass"
        );
        const userData = {
            email,
            password,
        }
        registerUser(userData);
        navigate("/");
    }

    return (
        <section className="register">
            <h2 className="register__header">Załóż konto</h2>
            <form className="register__form">
                <div className="register__form-container">
                    <label
                        className="register__form-container__label"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="register__form-container__input"
                        required={true}
                        type="text"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        autoCorrect={"on"}
                        name="email"
                        id="email"
                    />
                    <div className={`register__form-container-validation ${emailValidation}`}
                    >
                        Podany email jest nieprawidłowy
                    </div>
                </div>
                <div className="register__form-container">
                    <label className="register__form-container__label"
                           htmlFor="password"
                    >
                        Hasło
                    </label>
                    <input className="register__form-container__input"
                           required={true}
                           type="password"
                           value={password}
                           onChange={event => setPassword(event.target.value)}
                           name="password"
                           id="password"
                    />
                    <div className={`register__form-container-validation ${passwordLengthValidation}`}
                    >
                        Hasło powinno być dłuższe niż 6 znaków
                    </div>
                </div>
                <div className="register__form-container">
                    <label className="register__form-container__label"
                           htmlFor="password"
                    >
                        Powtórz hasło
                    </label>
                    <input className="register__form-container__input"
                           required={true}
                           type="password"
                           value={rePassword}
                           onChange={event => setRePassword(event.target.value)}
                           name="password"
                           id="password"
                    />
                    <div className={`register__form-container-validation ${passwordLengthValidation}`}
                    >
                        Hasło powinno być dłuższe niż 6 znaków
                    </div>
                </div>
            </form>
            <div className="register__buttons">
                <Link to="/login"
                      className="register__buttons-login"
                >
                    Zaloguj się
                </Link>
                <button onClick={handleRegister}
                        className="register__buttons-register"
                >
                    Załóż konto
                </button>
            </div>
        </section>
    )
}