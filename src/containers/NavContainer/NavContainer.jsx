import React from "react";
import "./NavContainer.scss";
import Nav from "../../components/Nav/Nav";

const NavContainer = () => {
  return (
    <div className="nav-container">
      <Nav searchTerm="name" rangeSearchOne="ABV " checkbox="classics" />
    </div>
  );
};

export default NavContainer;
