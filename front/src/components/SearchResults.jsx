import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { AiOutlineUser } from 'react-icons/ai'; 
import cart from '../resources/carrito.png'; 
import '../resources/PagPrincipal.css';
import '../resources/SearchResults.css'
import Cookies from 'js-cookie';
import Loading from './Loading';
import Error404 from './Error404';

const SearchResults = () => {
    const { searchTerm } = useParams(); // Obtener el término de búsqueda de la URL
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addToCart = async (productId) => {
        const userId = Cookies.get('userId');
        try {
            const data = {
                userId: userId, 
                productId: productId, 
                quantity: 1 
            };
            const response = await axios.post('http://localhost:3000/api/cart', data);
            console.log('Producto agregado al carrito:', response.data);
        } catch (error) {
            console.error('Error al agregar producto al carrito:', error);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost:3000/api/products/buscar/${searchTerm}`);
                setProducts(response.data.productos);
            } catch (error) {
                setError(error.message);
            }

            setLoading(false);
        };

        fetchProducts();
    }, [searchTerm]);

    if (loading) {
        return <div><Loading/></div>;
    }

    if (products.length === 0) {
        return <>
            <Error404/>
            </>;
    }

    if (error) {
        return <div><Error404 /></div>;
    }

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
            <h2 className='Buscado'><span>Buscaste: </span>"{searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}"</h2>
            <ul className='Searched-product-list'>
                {products && products.map((product) => (
                    <li key={product._id} className="Searched-product-item">
                    <button className="Searched-cart-button" onClick={() => addToCart(product._id)}>
                        <img className="carrito" src={cart} alt="Carrito" />
                    </button>
                    {product.images && (
                        <div className="Searched-product-images">
                            {product.images.map((image, index) => (
                                <img onClick={()=>{
                                    window.location.replace(`/product/${product._id}`)
                                }} key={index} className="Searched-product-image" src={`http://localhost:3000/api/products/uploads/${image.fileName}`} alt={`Product ${index + 1}`} />
                            ))}
                        </div>
                    )}
                    <div className="Searched-product-details">
                        <p className="Searched-product-name">{product.nombre} <span className='Searched-small-text2'> Calificación: {(product.calificacion).toFixed(2)}</span></p>
                        <p></p>
                        <p className="Searched-product-description">{product.precio}$ / <span className="Searched-small-text">{(product.precio * 38).toFixed(2)} Bs </span></p>
                        <p className="Searched-product-vendedor"><AiOutlineUser />{product.nombre_vendedor}</p>
                    </div>
                </li>
                ))}
            </ul>
            <Footer/>
        </div>
    );
};

export default SearchResults;
