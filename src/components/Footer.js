import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fawhatsapp} from "@fortawesome/free-solid-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"


const footer = ()=>{
    return(
    <>
        <div className="footer-container">
          <div className="footer-content-container">
            <h3>HOD<span className="fantasy">IAB</span></h3>
            <span>1138725280</span>
            <span>www.hodiab.com</span>
            <br></br> <br></br> <br></br>
            <span>© HODIAB 2022 Todos los derechos reservados</span>
          </div>
          <div className="footer-menus">
            <div className="footer-content-container">
              <span className="menu-title">Menu</span>
              <a href="../index.html" className="menu-item-footer">INICIO</a>
              <a href="#" className="menu-item-footer">PRODUCTOS</a>
              <a href="pages/sucusales.html" className="menu-item-footer">HODDIES</a>
              <a href="pages/sobrenosotros.html" className="menu-item-footer">ENVIOS / PAGOS</a>
              <a href="pages/contacto.html" className="menu-item-footer">CONTACTO</a>
            </div>
    
            <div className="footer-menus">
              <div className="footer-content-container">
                <span className="menu-title">Legal</span>
                <a href="" className="menu-item-footer">Politica de seguridad</a>
                <a href="" className="menu-item-footer">cookies</a>
                <a href="" className="menu-item-footer">Terminos & condiciones</a>
              </div>
    
              <div className="footer-content-container">
                <span className="menu-title">Seguinos</span>
                <div className="social-container">
                  <a href="https://www.instagram.com/ariibendersky/" className="social-link"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
                  <a href="https://www.facebook.com/ariel.bendersky" className="social-link"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
                  <a href="https://twitter.com/ariibendersky" className="social-link"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                </div>
              </div>
            </div>
            </div>

            </div>
            </>
)}

export default footer