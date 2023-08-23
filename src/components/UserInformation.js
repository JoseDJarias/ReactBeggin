import React, {useContext} from 'react';
import UserContext from '../UserContext';

function Usuario() {
    const user = useContext(UserContext)
    return (
        <div>
            <h2>Informacion del Usuario</h2>
            <p>Nombre: {user.name}</p>
            <p>Correo:{user.email}</p>
        </div>
      );
}

export default Usuario;