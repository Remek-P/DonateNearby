import React, {useContext, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContext";

export default function Register() {

    const { registerUser } = useContext(GlobalContext);

    const navigate = useNavigate();
    const { state } = useLocation();

    const destination = () => {
        if (state?.direction === "giveaway") {
            return navigate("/giveaway");
        } else {
            return navigate("/");
        }
    };

    const pass = "passRegistration";
    const fail = "failRegistration";


    const [ email,                      setEmail                            ] = useState("");
    const [ password,                   setPassword                         ] = useState("");
    const [ rePassword,                 setRePassword                       ] = useState("");
    const [ emailValidation,            setEmailValidation                  ] = useState(pass);
    const [ passwordLengthValidation,   setPasswordLengthValidation         ] = useState(pass);
    const [ rePasswordValidation,       setRePasswordValidation             ] = useState(pass);

    const checkEmailRegEx = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordLength = password.length >= 6;
    const isRePassword = password === rePassword;

    const emailAlert = "Podany email jest nieprawidłowy";
    const passwordAlert = "Hasło powinno być dłuższe niż 6 znaków";
    const rePasswordAlert = "Podane hasła nie zgadzają się";

    const checkEmail = () => {
        checkEmailRegEx
            ? setEmailValidation(pass)
            : setEmailValidation(fail)
    }

    const checkPasswordLength = () => {
        isPasswordLength
            ? setPasswordLengthValidation(pass)
            : setPasswordLengthValidation(fail)
    };

    const checkRePassword = () => {
        isRePassword
            ? setRePasswordValidation(pass)
            : setRePasswordValidation(fail)
    }

    const handleRegister = event => {
        event.preventDefault();
        checkEmail();
        checkPasswordLength();
        checkRePassword();
        if (checkEmailRegEx === true && isPasswordLength === true && isRePassword === true) {
            const userData = {
                id: 3,
                login: email,
                password,
                isLogged: true,
            }
            registerUser(userData);
            destination();
        }
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
                        autoFocus
                        className="register__form-container__input"
                        required={true}
                        type="text"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        autoCorrect={"on"}
                        name="email"
                        id="email"
                    />
                    <div className={`register__form-container-validation ${emailValidation}`}>
                        {emailAlert}
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
                    <div className={`register__form-container-validation ${passwordLengthValidation}`}>
                        {passwordAlert}
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
                    <div className={`register__form-container-validation ${rePasswordValidation}`}>
                        {rePasswordAlert}
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