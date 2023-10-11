import React, { useState, useEffect } from 'react';
import Card from "./GameCards";
import { PokemonData } from "./imagesUrl";

export default function CardImages() {
  const [activeCards, setActiveCards] = useState([]);
  const [clickedCardId, setClickedCardId] = useState(null);

  useEffect(() => {
    shuffleAndSetCards();
  }, []);

  const shuffleAndSetCards = () => {
    const shuffledData = [...PokemonData].sort(() => Math.random() - 0.5);
    setActiveCards(shuffledData.slice(0, 5));
  };

  const handleCardClick = (id) => {
    setClickedCardId(id);
    shuffleAndSetCards(); 
    console.log(`Clicked on card with ID: ${id}`);
  }

  return (
    <div className="cardImages">
      {activeCards.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          name={card.name}
          onClick={() => handleCardClick(card.id)}
          isClicked={clickedCardId === card.id}
        />
      ))}
    </div>
  );
}



