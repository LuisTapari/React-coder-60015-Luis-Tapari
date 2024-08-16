import ItemCount from "../ItemCount/ItemCount"
import "./itemDetail.css"
const ItemDetail = ( {item} ) => {
    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="titulo">{item.titulo}</h3>
                    <p className="detalle">{item.detalle}</p>
                    <p className="categoria">Categoría: {item.categoria}</p>
                    <p className="precio">${item.precio}</p>
                    <p>Stock: {item.stock}</p>
                    <ItemCount initial={1} stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail