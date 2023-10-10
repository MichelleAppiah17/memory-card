import React from 'react'
import GameHeader from './GameHeader'
import CardImages from './cardImages'

export default function GameBoard() {
  return (
    <div className='gameBoard'>
      <GameHeader/>
      <CardImages/>
    </div>
  )
}
