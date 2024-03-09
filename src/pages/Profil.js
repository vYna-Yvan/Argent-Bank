import React, { useEffect, useState } from "react";
import "../style/Profil.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/userActions";
import Account from "../components/account/Account.js";

const Profil = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.userReducer);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setUserName(user.userName);
  }, [user.firstName, user.lastName, user.userName]);
  const onUpdate = (e) => {
    e.preventDefault();
    const body = { userName, lastName, firstName };
    updateUser(token, body, dispatch);
  };
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="profil-main-container">
      <div className="title-edit">
        <h1>
          Welcome back
          <br /> {user.firstName} {user.lastName}!
        </h1>
        {showForm && (
          <div className="showForm-box">
            <form onSubmit={onUpdate}>
              <div className="input-wrapper">
                <label className="names-label" htmlFor="userName">
                  Username
                </label>
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label className="names-label" htmlFor="firstName">
                  Firstname
                </label>
                <input
                  type="text"
                  id="firstName"
                  disabled
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label className="names-label" htmlFor="lastName">
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastName"
                  disabled
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <button className="update-button" type="submit">
                Update
              </button>
            </form>
          </div>
        )}
        <button className="edit-button" onClick={toggleForm}>
          Edit Name
        </button>
      </div>
      <div className="bank-accounts">
        <Account
          accountType="Checking"
          accountNumber="(x3448)"
          accountAmount="$48.098.43"
          accountDescription="Available Balance"
        />
        <Account
          accountType="Savings"
          accountNumber="(x6712)"
          accountAmount="$10,928.42"
          accountDescription="Available Balance"
        />
        <Account
          accountType="Credit"
          accountNumber="(x8349)"
          accountAmount="$184.30"
          accountDescription="Current Balance"
        />
      </div>
    </div>
  );
};

export default Profil;
