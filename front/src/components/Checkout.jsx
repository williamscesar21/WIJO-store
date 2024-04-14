import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'; 
import Loading from './Loading';
import Error from './Error';

import Cookies from 'js-cookie';

const Checkout = () => {

    const userId = Cookies.get('userId');
    const productId = useParams().productId;
    const quantity = useParams().quantity;
    const [shippingMethod, setShippingMethod] = useState('');
    const [shippingCompany, setShippingCompany] = useState('');
    const [error, setError] = useState('');
    const [product, setProduct] = useState('');
    const shippingAddress = Cookies.get('direccion');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/products/${productId}`);
                setProduct(response.data.producto);
            } catch (error) {
                setError(error.response.data.message);
            }
        };
        fetchProduct();
    }, [productId]);

    const handleCheckout = async () =>{
        try {
            const response = await axios.post(`http://localhost:3000/api/checkout/comprar`,{
                userId: userId,
                productId: productId,
                quantity: quantity,
                shippingMethod: shippingMethod,
                shippingCompany: shippingCompany,
                shippingAddress: shippingAddress
            });
            
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    const handleShippingMethodChange = (event) => {
        setShippingMethod(event.target.value);
    };

    const handleShippingCompanyChange = (event) => {
        setShippingCompany(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        handleCheckout();
    };

    if (!product) {
        return <Loading />;
    }

    return (
        <>
            <div className='CheckoutContainer'>
                <h1>Checkout</h1>
                <div className="ProductInfo">
                    <h2 className='productTitle'>{product.nombre}</h2>
                    <p>Precio: ${product.precio}</p>
                    <p>Cantidad: {quantity}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="shippingMethod">Metodo de envio:</label>
                    <select id="shippingMethod" value={shippingMethod} onChange={handleShippingMethodChange} required>
                        <option value="">Seleccionar metodo de envio</option>
                        <option value="Pickup">PickUp</option>
                        <option value="Delivery">Delivery</option>
                    </select>
                    <label htmlFor="shippingCompany">Compañia de envio:</label>
                    <input type="text" id="shippingCompany" value={shippingCompany} onChange={handleShippingCompanyChange} required />
                    <button type="submit">Realizar compra</button>
                </form>
                {error && <Error message={error} />}
            </div>
        </>
    );
}

export default Checkout;
