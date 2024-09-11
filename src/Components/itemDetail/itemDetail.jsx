import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartProvider";
import { useState } from "react";

const ItemDetail = ({ item }) => {
    const { addItems } = useContext(CartContext);
    const [showItemCount, setShowItemCount] = useState(true);
    const [outOfStock, setOutOfStock] = useState(false);

    const onAdd = (quantity) => {
        if (item.stock > 0) {
            addItems(item, quantity);
            setShowItemCount(false);
        } else {
            setOutOfStock(true);
        }
    };

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
                    {outOfStock ? (
                        <p className="sin-stock">Por el momento no tenemos stock de este producto, por favor intente de nuevo más tarde.</p>
                    ) : (
                        showItemCount ? (
                            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                        ) : (
                            <Link to="/cart">Terminar mi compra</Link>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
