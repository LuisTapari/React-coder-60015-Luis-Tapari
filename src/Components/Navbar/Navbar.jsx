import { CartWidget } from "../CartWidget/CartWidget"
import "./Navbar.css";
const Navbar = () => {
    const categorias = ["Instrumentales", "soundKits", "Mix"];
    return (
        <nav className="navbar-container">
            <div className="container">
            <h1> BullBeat </h1>
            <ul className="navbar-lista">
                {categorias.map((categoria) => (
                <li key={categoria}>
                <a href="{categoria}">{categoria}</a>
                </li>
            ))}
            </ul>
            </div>
            <CartWidget />
        </nav>
        );
    };

export default Navbar