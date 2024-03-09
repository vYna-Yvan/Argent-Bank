import React from "react";
import "../style/Home.css";
//import Banktree from "../assets/img/bank-tree.jpeg";
import ChatIcon from "../assets/icon/icon-chat.png";
import MoneyIcon from "../assets/icon/icon-money.png";
import SecurityIcon from "../assets/icon/icon-security.png";
import Item from "../components/item/item";
import Banner from "../components/banner/banner";

const Home = () => {
  return (
    <div className="main-content">
      <Banner />
      <div className="abouts-box">
        <Item
          itemTitle="You are our #1 priority"
          content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          imageSrc={ChatIcon}
          altTxt="chat-icon"
        />
        <Item
          itemTitle="More savings means higher rates"
          content="The more you save with us, the higher your interest rate will be!"
          imageSrc={MoneyIcon}
          altTxt="money-icon"
        />
        <Item
          itemTitle="Security you can trust"
          content="We use top of the line encryption to make sure your data and money is always safe."
          imageSrc={SecurityIcon}
          altTxt="security-icon"
        />
      </div>
    </div>
  );
};

export default Home;
