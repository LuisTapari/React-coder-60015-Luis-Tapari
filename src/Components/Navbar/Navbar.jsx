import { CartWidget } from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="container-nav">
                <Link to="/" className="logo">BullBeat</Link>
                <ul className="navbar-lista">
                    <li>
                        <NavLink 
                            to="/category/Instrumentales" 
                            className={({ isActive }) => isActive ? "link active" : "link"}
                        >
                            Instrumentales
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/Soundkit" 
                            className={({ isActive }) => isActive ? "link active" : "link"}
                        >
                            SoundKits
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/Producciones" 
                            className={({ isActive }) => isActive ? "link active" : "link"}
                        >
                            Producciones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/category/Promociones" 
                            className={({ isActive }) => isActive ? "link active" : "link"}
                        >
                            Promociones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" className={({ isActive }) => isActive ? "link active" : "link"}>
                            Contacto
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
