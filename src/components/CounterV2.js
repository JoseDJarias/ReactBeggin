import React from 'react';
 function CounterV2({value, increase}) {
    return (
        <div>
            <p>El contador esta en:{' '+ value}</p>
            <button onClick={increase}>Aumentar</button>
        </div>
      );
 }
 
 export default CounterV2;