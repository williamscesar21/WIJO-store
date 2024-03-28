// Login.jsx
import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Importar los íconos de React Icons
import axios from 'axios';
import Cookies from 'js-cookie';
import '../resources/login.css'; 

const Login = ({ setToken }) => {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', { correo: correo.toLowerCase(), clave });
            const { token } = response.data;
            setToken(token);
            Cookies.set('token', token, { expires: 1 }); // Guardar el token en la cookie con una duración de 1 día
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <div className="login-container">
                <div className="title-container">WIJO store</div>
                <div className="form-container">
                    <h2>Inicia Sesión</h2>
                    <div className="input-container">
                        <label htmlFor="correo"><AiOutlineUser /> Usuario:</label>
                        <br />
                        <input
                            type="email"
                            id="correo"
                            placeholder="Correo electrónico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="clave"><AiOutlineLock /> Contraseña:</label>
                        <br />
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"} 
                                id="clave"
                                placeholder="Contraseña"
                                value={clave}
                                onChange={(e) => setClave(e.target.value)}
                            />
                            <button className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    <br />
                    <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
                    {error && <p>{error}</p>}
                    <div className="links-container">
                    <p><a href="/register">Registrate</a></p>
                    <p><a href="/recuperar">Recuperar clave</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
