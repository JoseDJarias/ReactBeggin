import React from 'react';
// import './Navigation.css'

function Navigation({isSessionStarted, onLogout}) {
    return (
        <nav className="App-nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li>
          {isSessionStarted ? (
            <button onClick={onLogout}>Cerrar sesión</button>
          ) : (
            <button>Iniciar sesión</button>
          )}
            </li>
        </ul>
      </nav>
      );
}

export default Navigation;