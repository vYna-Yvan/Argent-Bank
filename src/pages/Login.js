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

  const onLogin = (e) => {
    e.preventDefault();
    const body = { email, password };
    loginUser(body, dispatch);
  };
  return (
    <div className="main-container">
      <section className="log-form">
        <img alt="user" src={userIcon} />
        <h1>Sign In</h1>
        <form onSubmit={onLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remenber">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="rememeber-me">Remenber me</label>
          </div>
          <button className="sing-in-button" type="submit">
            Sing In
          </button>
          <Link to="/register">Create account</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
