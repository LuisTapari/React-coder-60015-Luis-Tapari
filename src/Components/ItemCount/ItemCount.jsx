import {useState } from "react";
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if(count > initial){
            setCount(count - 1);
        }
    }
    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    return (
        <div className="item-count">
            <button onClick={decrement}>decrementar</button>
            <p>{count}</p>
            <button onClick={increment}>Incrementar</button>
            <button className="agregar-al-carrito" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount