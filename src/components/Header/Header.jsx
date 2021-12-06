import React from "react";
import "./Header.scss";

const Header = (prop) => {
  const { imgSRC, imgText, titleText, subtitleText } = prop;

  return (
    <div className="header">
      <img className="header__logo" src={imgSRC} alt={imgText} />
      <div className="header__text">
        <h1 className="header__text__title">{titleText}</h1>
        <p className="header__text__subtitle">{subtitleText}</p>
      </div>
    </div>
  );
};

export default Header;
