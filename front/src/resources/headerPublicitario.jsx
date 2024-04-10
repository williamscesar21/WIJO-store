import './headerPublicitario.css'
import ReactDOM from 'react-dom/client';
import React from 'react';


const HeaderPublicitario = () => {
    

    return (
        <>
            <div className="contendor-body-div-superior">
                <div className="body-div-superior">
                    <div className="body-div-superior-texto">
                        <p className="p-superior-1">Lo mejor está llegando a la puerto de tu hogar.</p>
                        <p className="p-superior-2">Infinidad de productos en infinidad de tiendas</p>
                    </div>
                    <div className="body-div-superior-foto">
                        <img className="img-mobile" src="src\assets\images\smartphone-mobile.png" alt="" />
                        <img className="img-escritorio" src="src\assets\images\smartphone-escritorio.png" alt="" hidden={true} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default HeaderPublicitario;
