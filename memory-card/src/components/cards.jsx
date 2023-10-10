import React from "react";

const Card = ({ imageUrl,name }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default Card;


