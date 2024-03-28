import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai'; 
import axios from 'axios';
import '../resources/register.css'; 

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [direccion, setDireccion] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [clave, setClave] = useState('');
    const [error, setError] = useState('');
    const [roles, setRol] = useState('');
    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/users', {
                nombre,
                apellido,
                cedula,
                direccion,
                correo,
                telefono,
                clave,
                roles
            });
            console.log('exito');
            window.location.href = '/'; 
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div class="register-container">
    <div class="Rtitle-container"><p class="Rp">WIJO store</p></div>
    <div class="Rform-container">
        <div class="input-container">
            <label for="nombre"><AiOutlineUser /> Nombre:</label>
            <input class='Rinput'
                type="text"
                id="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div class="input-container">
            <label for="apellido"><AiOutlineUser /> Apellido:</label>
            <input class='Rinput'
                type="text"
                id="apellido"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
        </div>
        <div class="input-container">
            <label for="cedula"><AiOutlineUser /> Cédula:</label>
            <input class='Rinput'
                type="text"
                id="cedula"
                placeholder="Cédula"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
            />
        </div>
        <div class="input-container">
            <label for="direccion"><AiOutlineUser /> Dirección:</label>
            <input class='Rinput'
                type="text"
                id="direccion"
                placeholder="Dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
            />
        </div>
        <div class="input-container">
            <label for="correo"><AiOutlineUser /> Correo:</label>
            <input class='Rinput'
                type="email"
                id="correo"
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
        </div>
        <div class="input-container">
            <label for="telefono"><AiOutlineUser /> Teléfono:</label>
            <input class='Rinput'
                type="text"
                id="telefono"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
        </div>
        <div class="input-container">
            <label for="clave"><AiOutlineLock /> Contraseña:</label>
            <input class='Rinput'
                type="password"
                id="clave"
                placeholder="Contraseña"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
            />
        </div>
        <div class="input-container">
            <label for="rol"><AiOutlineUser /> Rol:</label>
            <div class='Rinput'>
                <select
                    id="rol"
                    value={roles}
                    onChange={(e) => setRol(e.target.value)}
                >
                    <option value="">Selecciona un rol</option>
                    <option value="vendedor">Vendedor</option>
                    <option value="comprador">Comprador</option>
                </select>
            </div>
        </div>
        <button class="register-button" onClick={handleRegister}>Registrarse</button>
        {error && <p>{error}</p>}
        <a href="/">¿Ya tienes cuenta? Inicia Sesión</a>
    </div>
</div>
    );
};

export default Register;
