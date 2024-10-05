import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.titulo} />
            <div className="producto-container">
                <h4 className="titulo">{producto.titulo}</h4>
                <p className="precio">Precio: ${producto.precio}</p>
                <p className="categoria">Categoría: {producto.categoria}</p>
                <Link to={`/item/${producto.id}`} className="producto-link">
                    Ver más detalles
                </Link>
            </div>
        </div>
    );
};

export default Item;
