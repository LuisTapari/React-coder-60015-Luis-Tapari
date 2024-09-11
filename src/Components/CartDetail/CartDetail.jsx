import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartProvider';
import { Link } from 'react-router-dom';
import './CartDetail.css';

const CartDetail = () => {
    const { cart, getTotal, getTotalProducts, removeItem, clearCart, buy, incrementItem, decrementItem } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cart && cart.length > 0 ? (
                cart.map((item, index) => (
                    <div key={`${item.item.id}-${index}`} className="cart-item">
                        <img src={item.item.imagen} alt={item.item.titulo} />
                        <div className="cart-item-details">
                            <p>{item.item.titulo}</p>
                            <div className="cart-item-controls">
                                <button 
                                    onClick={() => decrementItem(item.item.id)} 
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span>Cantidad: {item.quantity}</span>
                                <button 
                                    onClick={() => incrementItem(item.item.id)} 
                                    disabled={item.quantity >= item.item.stock}
                                >
                                    +
                                </button>
                            </div>
                            <p>Precio: ${item.item.precio}</p>
                        </div>
                        <button onClick={() => removeItem(item.item.id)}>Eliminar</button>
                    </div>
                ))
            ) : (
                <p>El carrito está vacío</p>
            )}
            <div className="cart-summary">
                <h3>Total productos: {getTotalProducts()}</h3>
                <h3>Total a pagar: ${getTotal()}</h3>
            </div>
            <div className="cart-actions">
                <button onClick={clearCart}>Vaciar carrito</button>
                <Link to="/checkout">Comprar</Link>
            </div>
        </div>
    );
}

export default CartDetail;




