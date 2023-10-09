import React from 'react'

export default function GameHeader() {
  return (
    <div>
      <div className='mainHeading'>
        <h1>MEMORY CARD GAME</h1>
      </div>
      <div className='scoresButton'>
        <button>Current score: 0</button>
        <button>Best score: 0</button>
      </div> 
    </div>
  )
}
