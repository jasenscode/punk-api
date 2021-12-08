import React from "react";
import "./Card.scss";

const Card = (prop) => {
  const { imgSRC, imgText, name, misc, miscDetail, tagline, description } = prop;

  return (
    <div className="card">
      <div className="card__img">
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
