import React from "react";

const Card = ({ imageUrl, id, name, onClick}) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={imageUrl} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

export default Card;




