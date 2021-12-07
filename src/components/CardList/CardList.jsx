import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (prop) => {
  const { beerArr } = prop;

  const createCard = beerArr.map((beer, index) => {
    return (
      <div>
        <Card imgSRC={beerArr[index].image_url} />
      </div>
    );
  });

  return <div className="card-list">{createCard}</div>;
};

export default CardList;
