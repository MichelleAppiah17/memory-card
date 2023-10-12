import React from 'react';

export default function GameHeader({ currentScore, gameOver, bestScore, onPlayAgainClick }) {
  return (
    <div>
      <div className='mainHeading'>
        <h1>MEMORY CARD GAME</h1>
      </div>
      <div className='scoresButton'>
        <button className='currentScore'>Current score: {currentScore}</button>
        {gameOver ? (
          <div className='gameOverDiv'>
            <p>GAME OVER</p>
            <button className="playAgainBtn" onClick={onPlayAgainClick}>Play Again</button>
          </div>
        ) : null}
        <button className='bestScore'>Best score: {bestScore}</button>
      </div>
    </div>
  );
}


