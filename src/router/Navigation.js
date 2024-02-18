import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Login from "../pages/Login.js";
import Profil from "../pages/Profil.js";
import { clearLoading, getProfile } from "../redux/actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_LOADING } from "../redux/types/userTypes.js";
import Register from "../pages/Register.js";

// import Footer from "../components/Footer.js.js";

function Navigation() {
  const dispatch = useDispatch();
  const { token, userLoading } = useSelector((state) => state.userReducer);
  console.log(token);
  useEffect(() => {
    getTokenFromStrorage();
  }, []);
  const getTokenFromStrorage = async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      getProfile(token, dispatch);
    } else {
      clearLoading(dispatch);
    }
  };
  return userLoading ? (
    <div>Loading...</div>
  ) : (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/Register"
            element={token ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/Profil"
            element={token ? <Profil /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default Navigation;
