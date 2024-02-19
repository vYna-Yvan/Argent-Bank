import React, { useEffect, useState } from "react";
import "../style/Profil.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/userActions";

const Profil = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.userReducer);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, []);
  const onUpdate = (e) => {
    e.preventDefault();
    const body = { lastName, firstName };
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
                <label className="names-label" htmlFor="firstName">
                  Firstname
                </label>
                <input
                  type="text"
                  id="firstName"
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
        <div className="account">
          <div className="account-details">
            <h2 className="account-title">Argent Bank Checking x8349</h2>
            <p className="account-money">$2,082.79</p>
            <p>Available Balance</p>
          </div>
          <div className="transacBt-wrapper">
            <button className="transaction-button">View transactions</button>
          </div>
        </div>
        <div className="account">
          <div className="account-details">
            <h2 className="account-title">Argent Bank Savings x6712</h2>
            <p className="account-money">$10,928.42</p>
            <p>Available Balance</p>
          </div>
          <div className="transacBt-wrapper">
            <button className="transaction-button">View transactions</button>
          </div>
        </div>
        <div className="account">
          <div className="account-details">
            <h2 className="account-title">Argent Bank Credit Card x8349</h2>
            <p className="account-money">$184.30</p>
            <p>Current Balance</p>
          </div>
          <div className="transacBt-wrapper">
            <button className="transaction-button">View transactions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
