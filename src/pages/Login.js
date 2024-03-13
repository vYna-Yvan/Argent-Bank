import React, { useState } from "react";
import userIcon from "../assets/icon/circle-user-solid.svg";
import "../style/Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Veuillez entrer à la fois l'e-mail et le mot de passe.");
      return;
    }

    const body = { email, password };

    loginUser(body, setError, dispatch);
  };

  return (
    <div className="main-container">
      <section className="log-form">
        <img alt="user" src={userIcon} />
        <h1>Connexion</h1>
        <form onSubmit={onLogin}>
          {error && <p className="error-message">{error}</p>}{" "}
          {/* message d'erreur */}
          <div className="input-wrapper">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remenber">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="rememeber-me">Se souvenir de moi</label>
          </div>
          <button className="sing-in-button" type="submit">
            Se connecter
          </button>
          <Link to="/register">Créer un compte</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
