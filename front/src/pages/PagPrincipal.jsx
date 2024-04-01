import React, { useState } from 'react';
import Cookies from 'js-cookie';
import CrearProducto from '../components/CrearProducto';
import ProductList from '../components/ProductList';
import '../resources/PagPrincipal.css';

const PagPrincipal = () => {
    const [mostrarCrearProducto, setMostrarCrearProducto] = useState(false);

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
            <h1 className="titulo">Bienvenido a la Página Principal</h1>
            <p className="contenido">Este es el contenido principal</p>
            <ProductList className="lista-productos" />
            <button className="boton" onClick={handleMostrarCrearProducto}>Crear producto</button>
            <button className="boton" onClick={handleLogout}>Cerrar Sesión</button>
            {mostrarCrearProducto && (
                <CrearProducto className="crear-producto-popup" />
            )}
        </div>
    );
};

export default PagPrincipal;
