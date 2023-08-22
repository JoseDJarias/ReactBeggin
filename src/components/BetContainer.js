import React from 'react';

function BetContainer({increase}) {
    
    return (
        <div className='bet-container'>
                <h2>Apuestas</h2>
                <h5>Apuestas para ver si cr va al mundial</h5>
                <button onClick={increase}>+1</button>
        </div>  
    );
}

export default BetContainer;