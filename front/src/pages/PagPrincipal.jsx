import React, { useState } from 'react';
import Cookies from 'js-cookie';
import CrearProducto from '../components/CrearProducto';
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import '../resources/PagPrincipal.css';
import Footer from '../components/Footer';
import iphone from '../resources/iphone.png'

const PagPrincipal = () => {
    const [mostrarCrearProducto, setMostrarCrearProducto] = useState(false);
    const roles = Cookies.get('roles') || []; // Obtener roles del usuario desde las cookies

    function handleLogout() {
        Cookies.remove('token');
        Cookies.remove('userId');
        Cookies.remove('nombre');
        Cookies.remove('apellido');
        Cookies.remove('roles');
        Cookies.remove('direccion');
        window.location.reload();
    }

    function handleMostrarCrearProducto() {
        setMostrarCrearProducto(true);
    }

    function handleCerrarCrearProducto() {
        setMostrarCrearProducto(false);
    }

    return (
        <div className="pag-principal-container">
        <NavBar
        logoSrc="/src/assets/images/logo_navbar.png"
        storeLogoSrc="/src/assets/images/store_navbar.png"
        menuSrc="/src/assets/icons/menu.png"
        closeSrc="/src/assets/icons/cerrar-ventana.png"
        searchSrc="/src/assets/icons/buscar.png"
        cartSrc="/src/assets/icons/carrito.png"
        userSrc="/src/assets/icons/usuario.png"
        />
        <div className='Portada'>
            <div className='PortadaL'>
                <h1 className='tituloPortada'>Lo mejor está llegando a la puerta de tu hogar</h1>
                <p className='portadaSmalltext'>Infinidad de productos en Infinidad de tiendas</p>
            </div>
            <div className='PortadaR'>
                <img className='imgPortada' src={iphone} alt="" />
            </div>
        </div>
        <div className='principalP'>
            <ProductList className="lista-productos" />
                {roles.includes('admin') || roles.includes('vendedor') && ( // Verificar si el usuario tiene el rol de 'admin' o 'vendedor'
                    <button className="boton" onClick={handleMostrarCrearProducto}>Crear producto</button>
                )}

                <button className="boton" onClick={handleLogout}>Cerrar Sesión</button>
                {mostrarCrearProducto && (
                    <CrearProducto className="crear-producto-popup" />
                )}
        </div>

            
            
            <Footer />
        </div>
    );
};

export default PagPrincipal;
