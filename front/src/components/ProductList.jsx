import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { AiOutlineUser } from 'react-icons/ai'; 
import cart from '../resources/carrito.png'; 
import '../resources/ProductList.css'; 
import Loading from './Loading';
import Error from './Error';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showingProducts, setShowingProducts] = useState(4);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/products');
                setProducts(response.data.productos);
                setLoading(false);
            } catch (error) {
                setError('Error fetching products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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

    const handleLoadMore = () => {
        setShowingProducts(prevCount => prevCount + 4);
    };

    const handleLoadLess = () => {
        setShowingProducts(prevCount => prevCount - 4);
    };

    return (
        <>
            <div className="product-list-container">
                {loading ? (
                    <><Loading/></>
                ) : error ? (
                    <><Error message="Hubo un error al cargar los datos" link='/' nombrelink='Inicio'/></>
                ) : (
                    <div>
                        <ul className="product-list">
                            {products.slice(0, showingProducts).map((product) => (
                                <li key={product._id} className="product-item">
                                    <button className="cart-button" onClick={() => addToCart(product._id)}>
                                        <img className="carrito" src={cart} alt="Carrito" />
                                    </button>
                                    {product.images && (
                                        <div className="product-images">
                                            {product.images.map((image, index) => (
                                                 <img onClick={()=>{
                                                    window.location.replace(`/product/${product._id}`)
                                                }} key={index} className="product-image" src={`http://localhost:3000/api/products/uploads/${image.fileName}`} alt={`Product ${index + 1}`} />
                                            ))}
                                        </div>
                                    )}
                                    <div className="product-details">
                                        <p className="product-name">{product.nombre}</p>
                                        <p>Calificación: {(product.calificacion).toFixed(2)}</p>
                                        <p className="product-description">{product.precio}$ / <span className="small-text">{(product.precio * 38).toFixed(2)} Bs </span></p>
                                        <p className="product-vendedor"><AiOutlineUser />{product.nombre_vendedor}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {showingProducts > 5 && (
                <button className="load-more-button" onClick={handleLoadLess}>Ver menos</button>
            )}
            {products.length > showingProducts && (
                <button className="load-more-button" onClick={handleLoadMore}>Ver más</button>
            )}
        </>
    );
};

export default ProductList;
