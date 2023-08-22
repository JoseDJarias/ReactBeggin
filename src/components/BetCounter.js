import React from 'react';

function BetCounter({number}) {
    return (
        <div className='bet-counter'>
            <h3>Total de Apuestas</h3>
            <p>{number}</p> 
        </div>
      );
}

export default BetCounter;