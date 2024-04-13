import React from 'react';
import '../resources/Error.css';

const Error = ({ message, link, nombrelink }) => {
    return (
        <div className='ErrorBody'>
        <div className="error-container">
            <h2 className="error-title">Error</h2>
            <p className="error-message">{message}</p>
            <a className='ErrorLink' href={link}>Ir a {nombrelink}</a>
        </div>
        </div>
    );
}

export default Error;
