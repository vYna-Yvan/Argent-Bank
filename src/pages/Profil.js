import React from "react";
import "../style/Profil.css";

const Profil = () => {
  return (
    <div className="profil-main-container">
      <div className="title-edit">
        <h1>
          Welcome back
          <br /> Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
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
