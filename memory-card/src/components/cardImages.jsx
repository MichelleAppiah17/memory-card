import React, { useState, useEffect } from 'react';
import Card from "./GameCards";
import { PokemonData } from "./imagesUrl";
import GameHeader from './GameHeader';

export default function CardImages() {
  const [activeCards, setActiveCards] = useState([]);
  const [clickedCardId, setClickedCardId] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    shuffleAndSetCards();
  }, [currentScore]);

  const shuffleAndSetCards = () => {
    if (gameOver) {
      return;
    }

      const shuffledData = [...PokemonData].sort(() => Math.random() - 0.5);
    setActiveCards(shuffledData.slice(0, 5));
  };

  const handleCardClick = (id) => {
    if (gameOver) {
      return;
    }

    if (id === clickedCardId) {
      setGameOver(true);
      console.log("GAME OVER");
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
    } else {
      setClickedCardId(id);
      setCurrentScore(currentScore + 1);
      shuffleAndSetCards();
      console.log(`Clicked on card with ID: ${id}`);
    }
  }

  return (
    <div>
      <GameHeader currentScore={currentScore} bestScore={bestScore} gameOver={gameOver} />
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
    </div>
  );
}



