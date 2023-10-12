import React, { useState, useEffect } from 'react';
import Card from "./GameCards";
import { Pokemons } from "../data/pokemonData";
import GameHeader from './gameHeader';

export default function CardImages() {
  const [activeCards, setActiveCards] = useState([]);
  const [clickedCardId, setClickedCardId] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [usedGameIds, setUsedGameIds] = useState([])

  useEffect(() => {
    shuffleAndSetCards();
  }, [currentScore]);

  const shuffleAndSetCards = () => {
    if (gameOver) {
      return;
    }

    const shuffledData = [...Pokemons].sort(() => Math.random() - 0.5);
    setActiveCards(shuffledData.slice(0, 5));
  };

  const handleCardClick = (id, name) => {
    if (gameOver) {
      return;
    }

    if (usedGameIds.includes(id)) {
      setGameOver(true);
      console.log("GAME OVER");
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
    } 
    
    if (usedGameIds.includes(id) !== true){
      setClickedCardId(id);
      setCurrentScore(currentScore + 1);

      usedGameIds.push(id);

      shuffleAndSetCards();
      console.log(`${name}`);
    }
  }
  
  const handlePlayAgainClick = () => {
  setGameOver(false);
  setCurrentScore(0);
  setUsedGameIds([]);
  setClickedCardId(null);
  shuffleAndSetCards();
 };

  return (
    <div>
      <GameHeader currentScore={currentScore} bestScore={bestScore} gameOver={gameOver} onPlayAgainClick={() => handlePlayAgainClick()} />
      <div className="cardImages">
        {activeCards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            name={card.name}
            onClick={() => handleCardClick(card.id, card.name)}
            isClicked={clickedCardId === card.id}
          />
        ))}
      </div>
    </div>
  );
}



