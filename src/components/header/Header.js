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
      </Link>

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
          {token ? (
            <button onClick={handleSignOut}>
              {" "}
              <img src={outIcon} />
              Sign Out
            </button>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </div>
      </Link>
    </header>
  );
};

export default Header;