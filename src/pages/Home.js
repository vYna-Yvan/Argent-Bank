import React from "react";
import "../style/Home.css";
//import Banktree from "../assets/img/bank-tree.jpeg";
import ChatIcon from "../assets/icon/icon-chat.png";
import MoneyIcon from "../assets/icon/icon-money.png";
import SecurityIcon from "../assets/icon/icon-security.png";
import Item from "../components/item/item";
import Banner from "../components/banner/banner";
import ItemList from "../components/item/item";

const Home = () => {
  return (
    <div className="main-content">
      <Banner />
      <div className="abouts-box">
        <ItemList />
      </div>
    </div>
  );
};

export default Home;
