import React from "react";
import "./Card.scss";

const Card = (prop) => {
  const { imgSRC, imgText, name, tagline, misc, miscDetail, description } = prop;

  return (
    <div className="card">
      <div className="card_img">
        <img src={imgSRC} alt={imgText} />
      </div>
      <div className="card__detail">
        <div className="card__header">
          <h3 className="card__name">{name}</h3>
          <h4 className="card__miscellaneous">
            {misc}
            <span className="misc-detail">{miscDetail}</span>
          </h4>
        </div>
        <p className="card__tagline">{tagline}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card">
      <div className="card__img">
        <img src="https://images.unsplash.com/photo-1567291612096-635b1896679a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt={imgText} />
      </div>
      <div className="card__detail">
        <div className="card__header">
          <h3 className="card__name">buzz</h3>
          <h4 className="card__miscellaneous">
            ABV:
            <span className="misc-detail"> 5%</span>
          </h4>
        </div>
        <p className="card__tagline">A Real Bitter Experience.</p>
        <p className="card__description">A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once</p>
      </div>
    </div> */
}
