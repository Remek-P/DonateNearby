import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export function Login() {

    const { loginUser, loggedUser, validateUserEmail } = useContext(GlobalContext);

    const [ email,              setEmail                ] = useState("");
    const [ password,           setPassword             ] = useState("");
    const [ emailValidation,    setEmailValidation      ] = useState("pass");
    const [ passwordLengthValidation, setPasswordLengthValidation ] = useState("pass");

    const navigate = useNavigate();



    const handleLogin = () => {
        if (password.length <= 6) {
            setPasswordLengthValidation("fail");
        } else if (password.length > 6) {
            setPasswordLengthValidation("pass")
            const userData = {
                email,
                password,
            };
            loginUser(userData);
            //TODO: this requires double cklick to work
            if (loggedUser.length !== 0) {
                navigate("/");
            } else {
                setEmailValidation("fail");
            }
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
                        required={true}
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
                        required={true}
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        name="password"
                        id="password"
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