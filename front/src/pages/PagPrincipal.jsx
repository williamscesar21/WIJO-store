import React from 'react';
import Cookies from 'js-cookie';
const PagPrincipal = () => {

    function handleLogout() {
        Cookies.remove('token');
        window.location.reload();
    }

    return (
        <div>
            <h1>Bienvenido a la Página Principal</h1>
            <p>Este es el contenido principal</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default PagPrincipal;
