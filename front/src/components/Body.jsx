//import React from "react";
import { Link } from "react-router-dom";
import "../resources/Body.css";

const Body = () => {

    return (
    <section className="body-div">
        <div className="contendor-body-div-medio">
            <div className="body-div-medio">

                <div className="body-div-medio-brras-categorias">
                    <ul>
                        <a href="" className="a-categoria-tv">
                            <li>Televisores</li>
                            <img src="src\assets\images\televisor.jpg" alt="" />
                        </a>

                        <a href="" className="a-categoria-cocina">
                            <li>Cocina</li>
                            <img src="src\assets\images\televisor.jpg" alt="" />

                        </a>

                        <a href="" className="a-categoria-nevera">
                            <li>Neveras</li>
                            <img src="src\assets\images\televisor.jpg" alt="" />

                        </a>

                        <a href="" className="a-categoria-vehiculos">
                            <li>Vehículos</li>
                            <img src="src\assets\images\televisor.jpg" alt="" />

                        </a>

                        <a href="" className="a-categoria-muebles">
                            <li>Muebles</li>
                            <img src="src\assets\images\televisor.jpg" alt="" />

                        </a>
                        <a href="" className="a-categoria-computadoras"    >
                            <li>Computadoras</li>
                            <img src="src\assets\images\televisor.jpg" alt="" />

                        </a>
                        <Link to="/categoriaGeneral" className="a-mas">
                            <li>
                                <img className="img-mas" src="src\assets\icons\mas.png" alt="" />
                                <p>Más categorías</p>
                            </li>
                        </Link>
                    </ul>
                </div>                            
                <div className="body-div-medio-marcas">
                    
                    <h4>Marcas</h4>
                    <ul>
                        <a href="">
                            <li>
                                <img src="src\assets\images\samsung.png" alt="" />
                                </li>
                        </a>
                        <a href="">
                            <li>
                                <img src="src\assets\images\apple.png" alt="" />
                                </li>
                        </a>
                        <a href="">
                            <li>
                                <img src="src\assets\images\rockstar.png" alt="" />
                                </li>
                        </a>
                    </ul>  

                    <ul>
                    <a href="">
                            <li>
                                <img src="src\assets\images\sony-ericson.jpg" alt="" />
                                </li>
                        </a>
                        <a href="">
                            <li>
                                <img src="src\assets\images\tide.jpg" alt="" />
                                </li>
                        </a>
                        <a href="">
                            <li>
                                <img src="src\assets\images\motorola.jpg" alt="" />
                                </li>
                        </a>                          
                    </ul>  

                    
                    <ul>
                    <a href="">
                            <li>
                                <img src="src\assets\images\general.png" alt="" />
                                </li>
                        </a>
                        <a href="">
                            <li>
                                <img src="src\assets\images\hp.png" alt="" />
                                </li>
                        </a>
                        <a href="">
                            <li>
                                <img src="src\assets\images\intel.png" alt="" />
                                </li>
                        </a>                          
                    </ul>    

                    
                    <ul>
                    <a href="">
                            <li>
                                <img src="src\assets\images\timberland.jpg" alt="" />
                                </li>
                        </a>
                        <a href="">
                            <li>
                                <img src="src\assets\images\huawei.png" alt="" />
                                </li>
                        </a>
                        <a href="">
                            <li>
                                <img src="src\assets\images\xiaomi.png" alt="" />
                                </li>
                        </a>  
                                                
                    </ul> 
                    <ul>
                        <a href="" className="a-mas-marcas">
                            <li>
                                <img className="img-mas-marcas" src="src\assets\icons\mas.png" alt="" />
                                <p>Más marcas</p>
                            </li>
                        </a>
                    </ul>                 
                </div>  

                <div className="body-div-medio-interesar">

                    <div className="body-div-medio-interesar-interes">
                        <h4>Productos que te pueden interesar</h4>
                        <ul>
                            <a href="">
                                <li>
                                    <img src="src\assets\images\televisor.jpg" alt="" />
                                </li>
                            </a>

                            <a href="">
                                <li>
                                    <img src="src\assets\images\televisor.jpg" alt="" />
                                </li>
                            </a>

                            <a href="">
                                <li>
                                    <img src="src\assets\images\televisor.jpg" alt="" />
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    <img src="src\assets\images\televisor.jpg" alt="" />
                                </li>
                            </a>    
                        </ul>                        
                    </div>
                    <ul className="ul-mas-interes">
                        <a href="" className="a-mas-interes">
                            <li>
                                <img className="img-mas-interes" src="src\assets\icons\mas.png" alt="" />
                                <p>Más productos de interés</p>
                                    
                            </li>
                        </a>
                    </ul>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Body;
