import React from "react";
import "./Header.css";
import Logo from "./argentBankLogo.png";
import userIcon from "./circle-user-solid.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import outIcon from "./right-from-bracket-solid.svg";
import { logOutUser } from "../../redux/actions/userActions";

const Header = () => {
  const { token, user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    logOutUser(dispatch);
  };
  return (
    <header>
      <Link className="link-header" to="/">
        <img className="logo" alt="logo" src={Logo} />
        <h1 className="logo-title">Argent bank</h1>
      </Link>
      <div className="nav-bloc">
        <Link to={token ? "/profil" : "/login"}>
          <div className="SignIn-box">
            <img alt="user" src={userIcon} />

            <p>
              {token
                ? user.userName
                  ? user.userName
                  : user.firstName
                : "Sign In"}
            </p>
          </div>
        </Link>
        {token ? (
          <button className="sign-out" onClick={handleSignOut}>
            {" "}
            <img className="logout-icon" alt="out" src={outIcon} />
            Sign Out
          </button>
        ) : (
          <Link to="/login"></Link>
        )}
      </div>
    </header>
  );
};

export default Header;
