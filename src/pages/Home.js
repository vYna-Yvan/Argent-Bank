import React from "react";
import "../style/Home.css";
import Banktree from "../assets/img/bank-tree.jpeg";
import ChatIcon from "../assets/icon/icon-chat.png";
import MoneyIcon from "../assets/icon/icon-money.png";
import SecurityIcon from "../assets/icon/icon-security.png";

const Home = () => {
  return (
    <div className="main-content">
      <div className="home-banner">
        <img alt="tree" src={Banktree} />
        <div className="banner-txt-box">
          <p className="big-text">No fees.</p>
          <p className="big-text"> No minimum deposit.</p>
          <p className="big-text">High interest rates.</p>
          <p className="lil-text">
            Open a savings account with
            <br />
            Argent Bank today!
          </p>
        </div>
      </div>
      <div className="abouts-box">
        <div className="about">
          <img alt="chat" src={ChatIcon} />

          <h2>Your our #1 priority</h2>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="about">
          <img alt="money" src={MoneyIcon} />

          <h2>More savings means higher rates</h2>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="about">
          <img alt="security" src={SecurityIcon} />

          <h2>Security you can trust</h2>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
