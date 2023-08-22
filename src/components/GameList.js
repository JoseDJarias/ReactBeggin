import React from 'react';
import GameCard from './GameCard';

const games = [
    { name: 'Ahorcado',gender: 'Variado', platform:'Web'},
    { name: 'The Legend of Zelda', gender: 'Aventura', platform:'Nintendo'}
];

function GameList() {
    return (
        <div className="game-list">
            {games.map((game, index) => (
               <GameCard key={index} game ={game}/> 
            ))};
        </div>
      );
}

export default GameList;