import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { AiOutlineUser } from 'react-icons/ai'; 
import Loading from './Loading';
import Error from './Error';
import Footer from './Footer';
import Cookies from 'js-cookie';
import '../resources/Cart.css'
import papelera from '../resources/papelera.png'; 

const Cart = () => {
    const { userId } = useParams();
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const deleteFromCart = async (productId) => {
    const userId = Cookies.get('userId');
    try {
        const response = await axios.delete(`http://localhost:3000/api/cart/${userId}/${productId}`);
        console.log('Producto eliminado del carrito:', response.data);
        window.location.reload()
    } catch (error) {
        console.error('Error al eliminar producto del carrito:', error);
    }
};


    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(`http://localhost:3000/api/cart/${userId}`);
                setProducts(response.data.itemsCarrito);
                setTotal(response.data.total);
            } catch (error) {
                setError(error.message);
            }

            setLoading(false);
        };

        fetchProducts();
    }, [userId]);

    const updateQuantity = async (productId, quantity) => {
        try {
            await axios.put(`http://localhost:3000/api/cart/${userId}/${productId}`, { quantity });
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleIncrement = async (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity++;
        setProducts(updatedProducts);
        await updateQuantity(updatedProducts[index].product._id, updatedProducts[index].quantity);
    };

    const handleDecrement = async (index) => {
        const updatedProducts = [...products];
        if (updatedProducts[index].quantity > 1) {
            updatedProducts[index].quantity--;
            setProducts(updatedProducts);
            await updateQuantity(updatedProducts[index].product._id, updatedProducts[index].quantity);
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error message={error} link='/' nombrelink='Inicio' />;
    }

    return (
        <>
            <NavBar
        logoSrc="/src/assets/images/logo_navbar.png"
        storeLogoSrc="/src/assets/images/store_navbar.png"
        menuSrc="/src/assets/icons/menu.png"
        closeSrc="/src/assets/icons/cerrar-ventana.png"
        searchSrc="/src/assets/icons/buscar.png"
        cartSrc="/src/assets/icons/carrito.png"
        userSrc="/src/assets/icons/usuario.png"
        />
        <div className='mainnc'>
    <div className="CartContainerM">
        <h1 className='cartWijo'>WIJO <span className="Searched-small-text" >CART</span></h1>
        {products.length > 0 ? (
            products.map((item, index) => (
                <div key={index} className="cart-item">
                    <div className="Searched-product-item">
                        <button className="Searched-cart-button" onClick={() => deleteFromCart(item.product._id)}>
                            <img className="carrito" src={papelera} alt="Papelera" />
                        </button>
                        {item.product ? (
                            <>
                                {item.product.images && (
                                    <div className="Searched-product-images">
                                        {item.product.images.map((image, index) => (
                                            <img onClick={()=>{
                                                window.location.replace(`/product/${item.product._id}`)
                                            }} key={index} className="Searched-product-image" src={`http://localhost:3000/api/products/uploads/${image.fileName}`} alt={`Product ${index + 1}`} />
                                        ))}
                                    </div>
                                )}
                                <div className="Searched-product-details"> 
                                    <h2>{item.product.nombre}</h2>
                                    <p className="Searched-product-description">{item.product.precio}$ / <span className="Searched-small-text">{(item.product.precio * 38).toFixed(2)} Bs </span></p>
                                    <div className='contadorContainer'>
                                        <p><b>Total:</b> ${((item.price) * (item.quantity)).toFixed(2)}</p>
                                        <p className='contador2'> 
                                            <button onClick={() => handleDecrement(index)}> - </button>
                                            {item.quantity}
                                            <button onClick={() => handleIncrement(index)}> + </button>
                                        </p>
                                    </div>
                                    <p> <AiOutlineUser/> {item.product.nombre_vendedor}</p>
                                </div>
                            </>
                        ) : (
                            <p>Producto no encontrado</p>
                        )}
                    </div>
                </div>
            ))
        ) : (
            <p className='noP'>No hay productos en el carrito</p>
        )}
        <div className="total-cart">
            <h2>Subtotal: ${(total).toFixed(2)}</h2>
            <div className='proceder_pagar2'>$ Proceder a pagar</div>
        </div>
    </div>
</div>

            
            <Footer />
        </>
    );
}

export default Cart;
