import React from "react";
import "../style/Header.css";
import Logo from "../assets/img/argentBankLogo.png";
import userIcon from "../assets/icon/circle-user-solid.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { token, user } = useSelector((state) => state.userReducer);
  return (
    <header>
      <Link className="link-header" to="/">
        <img className="logo" alt="logo" src={Logo} />
      </Link>

      <Link to={token ? "/profil" : "/Login"}>
        <div className="SignIn-box">
          <img alt="user" src={userIcon} />
          <p>{token ? user.userName : "Sign In"}</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
