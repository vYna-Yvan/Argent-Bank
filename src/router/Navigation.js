import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Login from "../pages/Login.js";
import Profil from "../pages/Profil.js";
// import Footer from "../components/Footer.js.js";

function Navigation() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profil" element={<Profil />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default Navigation;
