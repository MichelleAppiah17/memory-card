import React from 'react'
import Card from "./Cards"; 

export default function CardImages() {
   const cardsData = [
{
    name: "Pikachu",
    id: 1,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    name: "Charizard",
    id: 2,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  },
  {
    name: "Bulbasaur",
    id: 3,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    name: "Squirtle",
    id: 4,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  {
    name: "Jigglypuff",
    id: 5,
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png"
  },
  ];

  return (
    <div className="cardImages">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          name={card.name}
        />
      ))}
    </div>
  );
}
