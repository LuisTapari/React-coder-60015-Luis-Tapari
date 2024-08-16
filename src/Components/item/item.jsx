import { Link } from "react-router-dom"
import "./item.css"

const Item = ( {producto} ) => {
    return (
        <Link to={`/item/${producto.id}`}>
                <div key={Item.id}className="producto">
            <img src={producto.imagen} />
            <div className="producto-container">
                <h4 className="titulo">{producto.titulo}</h4>
                <p className="precio">Precio: ${producto.precio}</p>
                <p className="categoria">Categoría: {producto.categoria}</p>
            </div>
        </div>
        </Link>
    )
}

export default Item