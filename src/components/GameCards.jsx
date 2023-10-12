import React from "react";

const Card = ({ imageUrl, id, name, onClick}) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <div className="cardImageSection">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="cardTextSection">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Card;




