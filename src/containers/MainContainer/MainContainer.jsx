import React from "react";
import "./MainContainer.scss";
import CardList from "../../components/CardList/CardList";

const MainContainer = (prop) => {
  const { beerArr } = prop;

  return (
    <div className="main-container">
      <CardList beerArr={beerArr} />
    </div>
  );
};

export default MainContainer;
