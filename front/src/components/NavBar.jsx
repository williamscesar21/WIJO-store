import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para validar las props
import "../resources/NavBar.css";
import Cookies from 'js-cookie';

const NavBar = ({ logoSrc, storeLogoSrc, menuSrc, closeSrc, searchSrc, cartSrc, userSrc }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const userId = Cookies.get('userId')

    const handleSearch = async () => {
        try {
            window.location.replace(`/buscar/${searchTerm}`); // Redirige a la ruta de búsqueda
        } catch (error) {
            console.error('Error al buscar productos:', error);
        }
    };

    return (
        <nav className="navbar">
            <div className="sb__navbar-logo-div">
                <img className="img-logo-wijo" src={logoSrc} alt="" />
                <img className="img-logo-store" src={storeLogoSrc} alt=""/>
            </div>

            <div className="sb__navbar-search-div">
                <img onClick={()=>{
                    window.location.replace('/')
                }}  className="img-logo" src={logoSrc} alt="logo" hidden={true} />

                <input type="checkbox" name="menu-lateral" id="menu-lateral"/>
                
                <label htmlFor="menu-lateral">
                    <img className="img-menu" src={menuSrc} alt="" />
                </label>

                <label htmlFor="menu-lateral">
                    <img className="img-cerrar" src={closeSrc} alt=""  hidden={true} display={true}/>
                </label>

                <aside className="sb__navbar-menu-lateral">
                    <ul className="sb__navbar-menu-mobile" hidden={true}>
                        <li>
                            <div className="linea_navbar">&nbsp;</div>
                        </li>
                        <a href="/">
                            <img src="src/assets/icons/inicio.png" alt="" />
                            <li>Inicio</li>
                        </a>
                        <a href="">
                            <img src="src/assets/icons/productos.png" alt="" />
                            <li>Productos</li>
                        </a>
                        <a href="">
                            <img src="src/assets/icons/nosotros.png" alt="" />
                            <li>Nosotros</li>
                        </a>
                        <a href="">
                            <img src="src/assets/icons/carrito.png" alt="" />
                            <li>Carrito</li>
                        </a>
                        <a href="">
                            <img src="src/assets/icons/iniciar-sesion.png" alt="" />
                            <li>Inicio de sesión</li>
                        </a>
                        <li><div className="linea_navbar">&nbsp;</div></li>
                        <a href="">
                            <img src="src/assets/icons/soporte.png" alt="" />
                            <li>Soporte</li>
                        </a>
                        <a href="">
                            <img src="src/assets/icons/contactanos.png" alt="" />
                            <li>Contáctanos</li>
                        </a>
                    </ul>
                    <ul className="sb__navbar-menu-escritorio" hidden={true}></ul>
                </aside>
                
                <div className="sb__navbar-search-contenedor">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    /> 
                    <img className="img-lupa" src={searchSrc} alt="Buscar" onClick={handleSearch} />
                </div>

                <ul className="sb__navbar-menu-escritorio" hidden={true}>
                    <a href="/">
                        <li>Inicio</li>
                    </a>
                    <a href="">
                        <li>Productos</li>
                    </a>
                    <a href="">
                        <li>Contáctanos</li>
                    </a>
                    <a href="/politicas">
                        <li>Politicas</li>
                    </a>
                </ul>
                <img className="img-carrito" src={cartSrc} alt="" onClick={()=>{
                    window.location.replace(`/cart/${userId}`)
                }} />
                <img className="img-usuario" src={userSrc} alt="" onClick={()=>{
                    window.location.replace(`/statistics/${userId}`)
                }}/>
            </div> 
        </nav>
    );
}

// Definir propTypes para validar las props
NavBar.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    storeLogoSrc: PropTypes.string.isRequired,
    menuSrc: PropTypes.string.isRequired,
    closeSrc: PropTypes.string.isRequired,
    searchSrc: PropTypes.string.isRequired,
    cartSrc: PropTypes.string.isRequired,
    userSrc: PropTypes.string.isRequired,
};

export default NavBar;
