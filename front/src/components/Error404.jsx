import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// Importar css de Error404.css
import '../resources/Error404.css'

const Error404 = () => {
    return (
        <div>
            <NavBar
        logoSrc="/src/assets/images/logo_navbar.png"
        storeLogoSrc="/src/assets/images/store_navbar.png"
        menuSrc="/src/assets/icons/menu.png"
        closeSrc="/src/assets/icons/cerrar-ventana.png"
        searchSrc="/src/assets/icons/buscar.png"
        cartSrc="/src/assets/icons/carrito.png"
        userSrc="/src/assets/icons/usuario.png"
        />
            <div className='Cntnt404'>
            <p className='Txt404'>Lo sentimos mucho no hemos conseguido lo que buscabas...</p>
            <img className='Img404' src="src\assets\images\404.svg" alt="ERROR 404" />
            </div>
            <Footer/>
        </div>
    );
};

export default Error404;
