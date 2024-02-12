import React, { useState } from "react";
import userIcon from "../assets/icon/circle-user-solid.svg";
import "../style/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    const body = { email, password };

    fetch(`${process.env.REACT_APP_API}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="main-container">
      <section className="log-form">
        <img alt="user" src={userIcon} />
        <h1>Sign In</h1>
        <form onSubmit={onLogin}>
          <div className="input-wrapper">
            <label for="email">Username</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remenber">
            <input type="checkbox" id="remember-me" />
            <label for="rememeber-me">Remenber me</label>
          </div>
          <button className="sing-in-button" type="submit">
            Sing In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
