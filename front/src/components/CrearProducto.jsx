import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'; // Importar los íconos de React Icons
import axios from 'axios';
import Cookies from 'js-cookie';
import '../resources/CrearProducto.css'; // Importar el archivo CSS

const CrearProducto = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [marca, setMarca] = useState('');
    const [cantidad_disponible, setCantidad_disponible] = useState('');
    const [envio, setEnvio] = useState('');
    const [costo, setCosto] = useState('');
    const [estado_producto, setEstado_producto] = useState('');
    const [id_categoria, setId_categoria] = useState('');
    const [images, setImages] = useState(null); // Estado para almacenar la imagen seleccionada
    const [error, setError] = useState('');

    const handleCrearProducto = async () => {
        try {
            const id_vendedor = Cookies.get('userId');
            const nombre_vendedor = Cookies.get('nombre') + ' ' + Cookies.get('apellido');
            const formData = new FormData(); // Crear un objeto FormData para enviar la imagen
            formData.append('nombre', nombre);
            formData.append('descripcion', descripcion);
            formData.append('marca', marca);
            formData.append('cantidad_disponible', cantidad_disponible);
            formData.append('envio', envio);
            formData.append('costo', costo);
            formData.append('id_vendedor', id_vendedor);
            formData.append('nombre_vendedor', nombre_vendedor);
            formData.append('estado_producto', estado_producto);
            formData.append('id_categoria', id_categoria);
            formData.append('images', images); // Agregar la imagen al FormData

            const response = await axios.post('http://localhost:3000/api/products', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Especificar el tipo de contenido como FormData
                }
            });
            console.log('Product was successfully created!');
            window.location.href = '/'; 
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="CrearProducto-container">
    <div className="Ptitle-container"><p className="Pp">Crea un producto</p></div>
    <div className="Pform-container">
        <div className="Pinput-container">
            <label htmlFor="nombre"><AiOutlineUser /> Nombre:</label>
            <input className='Pinput'
                type="text"
                id="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div className="input-container">
            <label htmlFor="descripcion"><AiOutlineUser /> Descripcion:</label>
            <input className='Pinput'
                type="text"
                id="descripcion"
                placeholder="Descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
        </div>
        <div className="input-container">
            <label htmlFor="marca"><AiOutlineUser /> Marca:</label>
            <input className='Pinput'
                type="text"
                id="marca"
                placeholder="Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
            />
        </div>
        <div className="input-container">
            <label htmlFor="envio"><AiOutlineUser /> Precio de Envio:</label>
            <input className='Pinput'
                type="text"
                id="envio"
                placeholder="Precio de envio"
                value={envio}
                onChange={(e) => setEnvio(e.target.value)}
            />
        </div>
        <div className="input-container">
            <label htmlFor="costo"><AiOutlineUser /> Precio de costo:</label>
            <input className='Pinput'
                type="text"
                id="costo"
                placeholder="Costo del producto"
                value={costo}
                onChange={(e) => setCosto(e.target.value)}
            />
        </div>
        <div className="input-container">
            <label htmlFor="estado_producto"><AiOutlineLock /> Estado:</label>
            <input className='Pinput'
                type="text"
                id="estado_producto"
                placeholder="Estado del producto"
                value={estado_producto}
                onChange={(e) => setEstado_producto(e.target.value)}
            />
        </div>
        <div className="input-container">
            <label htmlFor="cantidad_disponible"><AiOutlineUser /> Cantidad:</label>
            <input className='Pinput'
            type="text"
            id="cantidad_disponible"
            placeholder="Cantidad Disponible"
            value={cantidad_disponible}
            onChange={(e) => setCantidad_disponible(e.target.value)}
            />
        </div>
        <div className="input-container">
            <label htmlFor="Categoria"><AiOutlineUser /> Categoria:</label>
            <div className='Pinput'>
                <select
                    id="Categoria"
                    value={id_categoria}
                    onChange={(e) => setId_categoria(e.target.value)}
                >
                    <option value="">Selecciona un Categoria</option>
                    <option value="66081d87f3671de537adba43">Mecanica</option>
                    <option value="65f5c508091259edefcc996e">Telefonos</option>
                </select>
            </div>
        </div>
        <div className="input-container">
            <div className="Pinput">
                <label htmlFor="images">Imagen:</label>
                <input
                    type="file"
                    id="images"
                    accept="image/*" // Solo permitir archivos de imagen
                    onChange={(e) => setImages(e.target.files[0])} // Actualizar el estado con la imagen seleccionada
                />
                </div>
            </div>
        <button className="CrearProducto-button" onClick={handleCrearProducto}>Crear producto</button>
        {error && <p>{error}</p>}
        <a className="Cancelar-button" onClick={()=>{window.location.reload()}} href="">Cancelar</a>
    </div>
</div>
    );
};

export default CrearProducto;
