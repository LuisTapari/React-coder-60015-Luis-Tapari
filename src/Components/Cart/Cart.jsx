import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext/CartProvider';
import CartDetail from '../CartDetail/CartDetail';

const Cart = () => {
    const { cart } = useContext(CartContext);
    console.log(cart)

    return (
        <div>
            {cart.length === 0 ? (
                <h1>No hay productos en el carrito</h1>
            ) : (
                <>
                <CartDetail/>
                </>
            )}
            </div>
    );
};


export default Cart;
