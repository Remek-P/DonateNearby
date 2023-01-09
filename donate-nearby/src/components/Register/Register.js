import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContext";

export default function Register() {

    const { registerUser } = useContext(GlobalContext);

    const navigate = useNavigate();

    const pass = "passRegistration";
    const fail = "failRegistration";

    const [ email,              setEmail                            ] = useState("");
    const [ password,           setPassword                         ] = useState("");
    const [ rePassword,           setRePassword                     ] = useState("");
    const [ emailValidation,    setEmailValidation                  ]= useState(pass);
    const [ passwordLengthValidation, setPasswordLengthValidation   ] = useState(pass);
    const [ repasswordValidation, setRepasswordValidation   ] = useState(pass);

    const checkEmailRegEx = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordLength = password.length <= 6;
    const isRePassword = password !== rePassword;

    const checkEmail = () => {
        checkEmailRegEx
            ? setEmailValidation(pass)
            : setEmailValidation(fail)
    }

    const checkPasswordLength = () => {
        isPasswordLength
            ? setPasswordLengthValidation(fail)
            : setPasswordLengthValidation(pass)
    };

    const checkRepassword = () => {
        isRePassword
            ? setRepasswordValidation(fail)
            : setRepasswordValidation(pass)
    }

    const handleRegister = event => {
        event.preventDefault();
        checkEmail();
        checkPasswordLength();
        checkRepassword();
        if (checkEmailRegEx === true && isPasswordLength === true && isRePassword === true) {
            const userData = {
                email,
                password,
                isLogged: true,
            }
            registerUser(userData);
            navigate("/");
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
                    <div className={`register__form-container-validation ${repasswordValidation}`}
                    >
                        Podane hasła nie zgadzają się
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