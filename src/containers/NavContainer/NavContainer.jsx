import React from "react";
import "./NavContainer.scss";
import logo from "../../assets/images/brewdog-logo.png";
import Header from "../../components/Header/Header";

const NavContainer = () => {
  return (
    <div className="nav-container">
      <Header imgSRC={logo} imgText="Brewdog logo" titleText="brewlogue" subtitleText="beer browser" />
    </div>
  );
};

export default NavContainer;
