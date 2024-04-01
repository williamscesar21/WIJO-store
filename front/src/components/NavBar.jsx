import "./navbar.css";

const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="sb__navbar-logo-div">
                <img className="img-logo-wijo" src="src\assets\images\wijo_navbar.png" alt="" />
                <img className="img-logo-store" src="src\assets\images\store_navbar.png" alt=""/>
            </div>

            <div className="sb__navbar-search-div">
           

                <img  className="img-logo" src="src\assets\images\logo_navbar.png" alt="" hidden={true} />

                <input type="checkbox" name="menu-lateral" id="menu-lateral"/>
                
                <label htmlFor="menu-lateral">
                    <img className="img-menu" src="src\assets\icons\menu.png" alt="" />
                </label>

                <label htmlFor="menu-lateral">
                    <img className="img-cerrar" src="src\assets\icons\cerrar-ventana.png" alt=""  hidden={true} display={true}/>
                </label>

                <aside className="sb__navbar-menu-lateral">
                    <ul className="sb__navbar-menu-mobile" hidden={true}>
                            <li>
                                <div className="linea_navbar">&nbsp;</div>
                            </li>

                        <a href="">
                            
                            <img src="src\assets\icons\inicio.png" alt="" />
                            <li>Inicio</li>
                        </a>
                        
                        <a href="">
                            <img src="src\assets\icons\productos.png" alt="" />
                            <li>Productos</li>
                        </a>
                        <a href="">
                            <img src="src\assets\icons\nosotros.png" alt="" />
                            <li>Nostros</li>
                        </a>
                        <a href="">
                            <img src="src\assets\icons\historial.png" alt="" />
                            <li>Historial</li>
                        </a>
                        <a href="">
                            <img src="src\assets\icons\carrito.png" alt="" />
                            <li>Carrito</li>
                        </a>
                        <a href="">
                            <img src="src\assets\icons\iniciar-sesion.png" alt="" />
                            <li>Inicio de sesión</li>
                        </a>

                        <li><div className="linea_navbar">&nbsp;</div></li>

                        <a href="">
                            <img src="src\assets\icons\soporte.png" alt="" />
                            <li>Soporte</li>
                        </a>

                        

                        <a href="">
                            <img src="src\assets\icons\contactanos.png" alt="" />
                            <li>Contáctanos</li>
                        </a>
                    
                    </ul>

                    
                    <ul className="sb__navbar-menu-escritorio" hidden={true}>
                        
                    </ul>


                </aside>
                
                <div className="sb__navbar-search-contenedor">
                    <input type="text" placeholder="Buscar..." />
                    <img className="img-lupa" src="src\assets\icons\buscar.png" alt="" />
                </div>

                <ul className="sb__navbar-menu-escritorio" hidden={true}>
                    <a href="">
                        <li>Inicio</li>
                    </a>
                    
                    <a href="">
                        <li>Productos</li>
                    </a>
                    <a href="">
                        <li>Nostros</li>
                    </a>
                    <a href="">
                        <li>Contáctanos</li>
                    </a>
                    <a href="">
                        <li>Historial</li>
                    </a>
                </ul>
                <img className="img-carrito" src="src\assets\icons\carrito.png" alt="" />
                <img className="img-usuario" src="src\assets\icons\usuario.png" alt="" />
            </div>          
        </nav>
      
       
    )
}



export default NavBar;
