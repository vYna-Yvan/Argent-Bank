import React from "react";
import "./Header.css";
import Logo from "./argentBankLogo.png";
import userIcon from "./circle-user-solid.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import outIcon from "./right-from-bracket-solid.svg";

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

          <p>{token ? user.firstName : "Sign In"}</p>
          <p>{token ? !"Sign Out" : ""}</p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
