import './footer.css'

const Footer = () => {

  return (
    <div className="footer">
      <div className='logo'>
        <img src="src\assets\images\logo_footer.png" alt="" />
      </div>

      <hr></hr>

      <div className='sb__footer section__pading'>
        <div className='sb__footer-links'>
          <div className='sb__footer-links-div'>
              <a href='#'>Inicio</a>
              <a href='#'>Productos</a>
              <a href='#'>Nosotros</a>
              <a href='#'>Categorías</a>
          </div>
          <div className='sb__footer-links-div'>
              <a href='#'>Mi carrito</a>
              <a href='#'>Historial</a>
              <a href='#'>Mi cuenta</a>
              <a href='#'>Mis compras</a>
          </div>
          <div className='sb__footer-links-div'>
              <a href='#'>FAQ</a>
              <a href='#'>Soporte</a>
              <a href='#'>Contáctanos</a>
          </div>
          <div className='sb__footer-links-div'>
              <a href='#'>Políticas de privacidad</a>
              <a href='#'>Términos y condiciones</a>
          </div>   
          <div className='sb__footer-links-div-search'>
            <input type="text" placeholder="Busca lo que deseas" />
            <h1>Suscríbete y recibe todas las novedades de Wijo Store</h1>
            <div className='sb__footer-input-btn'>
              <input type="text" placeholder="Email" />
              <button>Suscribirme</button>
            </div>
          </div>      
        </div>
        
      </div>

      <div>

      <div className="linea">&nbsp;</div>
      <div className="leyenda">Síguenos</div>
      <div className="linea">&nbsp;</div>
      </div>


      <div className='socialmedia'>
          <a href='facebook'>
          <img src="src\assets\images\facebook.png" alt="" />
          </a>
          <a href='instagram'>
            <img src="src\assets\images\instagram.png" alt="" />
          </a>
          <a href='twitter'>
            <img src="src\assets\images\twitter.png" alt="" />
          </a>
          <a href='youtube'>
            <img src="src\assets\images\youtube.png" alt="" />
          </a>
      </div>

      <hr></hr>

      <div className='sb__footer-below'>
        <div className='sb__footer-copyright'>
          <p>Copyright © @{new Date().getFullYear()} Wijos. All rights reserved.</p>   
        </div>
      </div>
    </div>
  )
}
export default Footer;
