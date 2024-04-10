import './miCuenta.css'
const MiCuenta = () => {

    return (   
        <div className='miCuenta'>    
         
                <div className='miCuenta-div'>                
                        <ul className='usuario'>
                            <li>
                                <img src="./src/assets/icons/usuario.png" alt="" />
                            </li>
                            <li>
                                Nombre<br></br>Apellido
                            </li>
                        </ul>
                        <ul className='productos'>
                            <li>Productos comprados</li>
                            <li>Productos devueltos</li>
                            <li>Productos cancelados</li>
                            <li>Productos pendientes</li>
                            <li>Cambiar contraseña</li>
                            <li>Eliminar mi cuenta</li>
                        </ul>
                        <ul className='historial'>
                            <li>154</li>
                            <li>05</li>
                            <li>02</li>
                            <li>02</li>
                            <li>
                                <img className='img-advertencia' src="./src/assets/icons/advertencia.png" alt=""/>
                            </li>
                        </ul>
                        <ul className='cerrar-sesion'>
                            <li >
                                <p>
                                    <img src="./src/assets/icons/cerrar-sesion.png" alt="" />
                                    Cerrar sesión
                                </p>
                                <img className='img-cerrar-sesion' src="./src/assets/icons/cerrar-sesion.png" alt="" />
                                
                            </li>
                        </ul>
                    </div>
                    <div className='miCuenta-div-medio'>               
                        <div className='miCuenta-div-medio-superior'>
                            <ul>
                                <li>Mi cuenta</li>
                                <li>Mensajes</li>
                                <li>Estadísticas</li>
                                <li>Billetera</li>
                            </ul>
                        </div>

                        <div className='miCuenta-div-medio-medio'>
                            <ul className='ul-izquierdo'>
                                <li>
                                    <p><img src="./src/assets/icons/nombre.png" alt="" />Nombre</p>
                                    <input type="text" placeholder='Nombre'/>
                                </li>
                                <li>
                                    <p><img src="./src/assets/icons/usuario.png" alt="" />Usuario</p>
                                    <input type="text" placeholder='Usuario' />
                                </li>
                                <li>
                                    <p><img src="./src/assets/icons/fecha.png" alt="" />Fecha Nacimiento</p>
                                    <input type="text" placeholder='Fecha Nacimiento' />
                                </li>
                            </ul>
                            <ul className='ul-derecho'>
                                <li>
                                    <p><img src="./src/assets/icons/apellido.png" alt="" />Apellido</p>
                                    <input type="text" placeholder='Apellido' />
                                </li>
                                <li>
                                    <p><img src="./src/assets/icons/clave.png" alt="" />Clave</p>
                                    <input type="text" placeholder='Clave' />
                                </li>
                                <li>
                                    <p><img src="./src/assets/icons/roles.png" alt="" />Rol</p>
                                    <input type="text" placeholder='Rol' />
                                </li>
                            </ul>
                            
                            <ul className='ul-inferior'>
                                <li>
                                    Biografia
                                </li>
                                <li>
                                    
                                    
                                </li>
                            </ul>

                            <ul className='boton-guardar'>
                                <li>
                                    <button>Guardar Cambios</button>
                                </li>
                            </ul>
                        </div>              
                    </div>
               
        </div>
    )
    
}

export default MiCuenta;
