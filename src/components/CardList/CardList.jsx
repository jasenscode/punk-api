import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (prop) => {
  const { beerArr } = prop;

  const createCard = beerArr.map((beer, index) => {
    return <Card key={"beer" + index} imgSRC={beerArr[index].image_url} imgText={"Beer picture"} name={beerArr[index].name} misc={"ABV: "} miscDetail={beerArr[index].abv} tagline={beerArr[index].tagline} description={beerArr[index].description} />;
  });

  return <div className="card-list">{createCard}</div>;
};

export default CardList;
