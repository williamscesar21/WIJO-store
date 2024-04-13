import React from 'react';
import '../resources/Loading.css'; // Asegúrate de tener un archivo CSS para estilizar la animación

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
        </div>
    );
}

export default Loading;
