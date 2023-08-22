import React, { useState } from 'react';
 function Counter() {
    // var value = 0;
    var[value,setValue] = useState(0);
    // evento
    const increase= () =>{
    setValue(value+1)
    }
    return (
        <div>
            <p>El contador esta en:{' '+value}</p>
            <button onClick={increase}>Aumentar</button>
        </div>
      );
 }
 
 export default Counter;