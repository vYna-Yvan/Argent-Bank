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

const accountData = [
  {
    accountType: "Checking",
    accountNumber: "(x3448)",
    accountAmount: "$48.098.43",
    accountDescription: "Available Balance",
  },
  {
    accountType: "Savings",
    accountNumber: "(x6712)",
    accountAmount: "$10,928.42",
    accountDescription: "Available Balance",
  },
  {
    accountType: "Credit",
    accountNumber: "(x8349)",
    accountAmount: "$184.30",
    accountDescription: "Current Balance",
  },
];

const AccountList = () => (
  <div className="account-list">
    {accountData.map((account, index) => (
      <Account
        key={index}
        accountType={account.accountType}
        accountNumber={account.accountNumber}
        accountAmount={account.accountAmount}
        accountDescription={account.accountDescription}
      />
    ))}
  </div>
);

export default AccountList;
