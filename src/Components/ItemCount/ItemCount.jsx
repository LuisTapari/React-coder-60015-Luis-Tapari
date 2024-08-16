import {useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);

    const decrement = () => {
        if(count >1){
            setCount(count - 1);
        }
    }
    const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    const addToCart = () => {
        alert ('Se agregaron ${count} items al carrito');
    }
    return (
        <div className="item-count">
            <button onClick={decrement}>decrementar</button>
            <p>{count}</p>
            <button onClick={increment}>Incrementar</button>
            <button className="agregar-al-carrito" onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount