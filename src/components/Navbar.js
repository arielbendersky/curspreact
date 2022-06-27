import CartWidget from "./CartWidget";
import { Link }  from "react-router-dom";
const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><p className="navbar-brand">HODIAB</p></Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    
                    <Link to="categoria/Hodies" className="navbar-brand"><p className="nav-link">HODDIES</p></Link>
                    <Link to="categoria/REMERAS" className="navbar-brand"><p className="nav-link">REMERAS</p></Link>
                    <Link to="categoria/pantalon" className="navbar-brand"><p className="nav-link">PANTALON</p></Link>
                    <Link to="categoria/ENVIOS" className="navbar-brand"><p className="nav-link">ENVIOS</p></Link>
                    <Link to="categoria/CONTACTO" className="navbar-brand"><p className="nav-link">CONTACTO</p></Link>
                </div>
                </div>
            </div>
            <CartWidget />     
</nav>    
        </>
    )
}      
export default Navbar 