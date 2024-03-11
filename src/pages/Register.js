import React, { useState } from "react";
import userIcon from "../assets/icon/circle-user-solid.svg";
import "../style/Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const onRegister = (e) => {
    e.preventDefault();
    if (!email | !password | !firstName | !lastName | !userName) {
      return alert("Veuillez remplir tout les champs du formulaire");
    }
    const body = { email, password, firstName, lastName, userName };
    const clearForm = () => {
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setUserName("");
    };
    registerUser(body, clearForm, dispatch);
  };
  return (
    <div className="main-container">
      <section className="log-form">
        <img alt="user" src={userIcon} />
        <h1>Sign Up</h1>
        <form onSubmit={onRegister}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">Firstname</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Lastname</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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

          <button className="sing-in-button" type="submit">
            Sing Up
          </button>
          <Link to="/login">Login</Link>
        </form>
      </section>
    </div>
  );
};

export default Register;
