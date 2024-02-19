import React from "react";
import "./Account.css";

const Account = ({
  accountType,
  accountNumber,
  accountAmount,
  accountDescription,
}) => {
  return (
    <div className="account">
      <div className="details">
        <h2 className="title">
          Argent bank {accountType} {accountNumber}
        </h2>
        <p className="money">{accountAmount}</p>
        <p className="description">{accountDescription}</p>
      </div>
      <div className="transacBt-wrapper">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
};

export default Account;
