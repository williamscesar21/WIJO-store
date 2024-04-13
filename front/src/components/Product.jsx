import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import '../resources/ProductList.css'; 
import '../resources/product.css'
import { AiOutlineUser } from 'react-icons/ai'; 
import Loading from './Loading';
import Error from './Error';
import Footer from './Footer';
import Cookies from 'js-cookie';
import Checkout from './Checkout';

export const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(1);
    const [comment, setComment] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [comments, setComments] = useState([]);
    const [responseInputs, setResponseInputs] = useState({});
    const [commentResponses, setCommentResponses] = useState({});
    const [mostrarCheckout, setMostrarCheckout] = useState(false);
    const userId = Cookies.get('userId');
    const nombre = Cookies.get('nombre');

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const handleChangeComment = (e) => {
        setComment(e.target.value);
    };

    const handleChangeRespuesta = (e, commentId) => {
        setResponseInputs(prevState => ({
            ...prevState,
            [commentId]: e.target.value
        }));
    };

    const handleSubmitComment = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/comentario/enviar', {
                id_usuario_mensaje: userId,
                comentario: comment,
                id_producto: productId,
                id_usuario_vendedor: product.id_vendedor 
            });

            window.location.reload();
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    const handleSubmitRespuesta = async (commentId) => {
        try {
            const response = await axios.post('http://localhost:3000/api/comentario/responder', {
                id_usuario_mensaje: userId,
                respuesta: responseInputs[commentId],
                id_ComentarioEnvio: commentId 
            });

            window.location.reload();
        } catch (error) {
            console.error('Error submitting response:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await axios.get(`http://localhost:3000/api/products/${productId}`);
                setProduct(productResponse.data.producto);
                
                const commentsResponse = await axios.get(`http://localhost:3000/api/comentario/envio/${productId}`);
                setComments(commentsResponse.data);

                // Obtener y almacenar las respuestas para cada comentario
                const responsesPromises = commentsResponse.data.map(async (comment) => {
                    const response = await axios.get(`http://localhost:3000/api/comentario/respondido/${comment._id}`);
                    setCommentResponses(prevState => ({
                        ...prevState,
                        [comment._id]: response.data
                    }));
                });
                await Promise.all(responsesPromises);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, [productId]);

    const handleMostrarCheckout = () => {
        setMostrarCheckout(true);
    };

    const handleCerrarCheckout = () => {
        setMostrarCheckout(false);
    };

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error message="Hubo un error al cargar los datos. Por favor, inténtalo de nuevo más tarde." link='/' nombrelink='Inicio' />;
    }

    if (!product) {
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
                <div className='no-results'>No hay resultados para tu búsqueda.</div>
                <Footer />
            </>
        );
    }

    return (
        <div className='producto-main'>
            <NavBar
                logoSrc="/src/assets/images/logo_navbar.png"
                storeLogoSrc="/src/assets/images/store_navbar.png"
                menuSrc="/src/assets/icons/menu.png"
                closeSrc="/src/assets/icons/cerrar-ventana.png"
                searchSrc="/src/assets/icons/buscar.png"
                cartSrc="/src/assets/icons/carrito.png"
                userSrc="/src/assets/icons/usuario.png"
            />
            <div className='containerp'>
                <div className='producto-content'>
                    <div className='producto-details'>
                        <div className='left'>
                            {product.images.map((image, index) => (
                                <img key={index} className="product-imageV" src={`http://localhost:3000/api/products/uploads/${image.fileName}`} alt={`Product ${index + 1}`} />
                            ))}
                        </div>
                        <div className='middle'>
                            {product.images.map((image, index) => (
                                <img key={index} className="product-imageG" src={`http://localhost:3000/api/products/uploads/${image.fileName}`} alt={`Product ${index + 1}`} />
                            ))}
                        </div>
                        <div className='right'>
                            <div className='ProductInfo'>
                                <h2 className='productTitle'>{product.nombre}</h2>
                                <h3 className='calificacion'>Calificacion: {(product.calificacion).toFixed(2)}</h3>
                                <p className="product-descriptionG">{product.precio}$ / <span className="small-textG">{(product.precio * 38).toFixed(2)} Bs </span></p>
                                <p className="product-vendedorG"><AiOutlineUser />{product.nombre_vendedor}</p>
                                <div className='contador'>
                                    <span className='contador-btn' onClick={handleDecrement}>-</span>
                                    <span className='contador-value'>{count}</span>
                                    <span className='contador-btn' onClick={handleIncrement}>+</span>
                                </div>
                                <p className='dispon'>Disponibles: <b>{product.cantidad_disponible}</b></p>
                                <div onClick={handleMostrarCheckout} className='proceder_pagar'>$ Proceder a pagar</div>
                                {mostrarCheckout && (
                                    <Checkout productId={productId} quantity={count}/>
                                )}
                                <div className='mensajear'>Enviar mensaje a vendedor</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='descripcionP'>
                    <h1>Descripcion del producto</h1>
                    <div className='descripcionContainer'>{product.descripcion}</div>
                </div>
                <div className='descripcionP'>
                    <h1>Comentarios del producto</h1>
                    <div className='comentariosContainer'>
                        {comments.map((comment, index) => (
                            <div className='comentario' key={index}>
                                <p className='comentador'><AiOutlineUser /> {comment.id_usuario_mensaje.nombre}</p>
                                <p className='comText'>{comment.comentario.charAt(0).toUpperCase() + comment.comentario.slice(1)}</p>
                                {commentResponses[comment._id] && (
                                    <div className='respuestaContainer'>
                                    {commentResponses[comment._id].map((response, index) => (
                                        <div key={index} className='respuesta'>
                                            <p className='comentador'><AiOutlineUser /> {response.id_usuario_mensaje.nombre}</p>
                                            <p>{response.respuesta}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                )}
                                <div className='RcomentarioContainer'>
                                    <input type="text" placeholder='Responder comentario...' className='Rcomentario' value={responseInputs[comment._id] || ''} onChange={(e) => handleChangeRespuesta(e, comment._id)} />
                                    <button className='Rpublicar' onClick={() => handleSubmitRespuesta(comment._id)}>Enviar</button>
                                </div>
                            </div>
                        ))}
                        <div className='comentario'>
                            <div><AiOutlineUser />{nombre}</div>
                            <input className='Acomentario' placeholder='Deja un comentario sobre este producto...' type="text" value={comment} onChange={handleChangeComment} />
                            <button className='publicar' onClick={handleSubmitComment}>Enviar comentario</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
