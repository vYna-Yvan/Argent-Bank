import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home.js";
import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";
import Login from "../pages/Login.js";
import Profil from "../pages/Profil.js";
import { clearLoading, getProfile } from "../redux/actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";

import Register from "../pages/Register.js";

function Navigation() {
  const dispatch = useDispatch();
  const { token, appLoading } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const getTokenFromStrorage = async () => {
      const token = await localStorage.getItem("token");
      if (token) {
        getProfile(token, dispatch);
      } else {
        clearLoading(dispatch);
      }
    };
    getTokenFromStrorage();
  }, [dispatch]);

  return appLoading ? (
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
      </main>
      <Footer />
    </Router>
  );
}

export default Navigation;
