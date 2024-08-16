import { CartWidget } from "../CartWidget/CartWidget"
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="container-nav">
            <Link to= "/" className="logo">BullBeat</Link>
            <ul className="navbar-lista">
                <li>
                    <Link to = "/category/Instrumentales" className="link">Instrumentales</Link>
                </li>
                <li>
                    <Link to = "/category/Soundkit" className="link">SoundKits</Link>
                </li>
                <li>
                    <Link to = "/category/Producciones" className="link">Producciones</Link>
                </li>
                <li>
                    <Link to = "/category/Promociones" className="link">Promociones</Link>
                </li>
            </ul>
            </div>
            <CartWidget />
        </nav>
        );
    };

export default Navbar