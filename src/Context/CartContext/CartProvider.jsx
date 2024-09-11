import {createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItems = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.item.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { item, quantity }]);
        }
    };
    


    const isInCart = (itemId) => {
        return cart.some((cartItem) => cartItem.item.id === itemId);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce((total, cartItem) => total + cartItem.item.precio * cartItem.quantity, 0);
    };
    
    const getTotalProducts = () => {
        return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    };
    

    const removeItem = (itemId) => {
        setCart(cart.filter((cartItem) => cartItem.item.id !== itemId));
    };
    
    const incrementItem = (itemId) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.item.id === itemId && cartItem.quantity < cartItem.item.stock
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };
    
    const decrementItem = (itemId) => {
        setCart((prevCart) =>
            prevCart.map((cartItem) =>
                cartItem.item.id === itemId && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    };

    return (
        <CartContext.Provider value={{
            cart, addItems, isInCart, clearCart, getTotal, getTotalProducts, removeItem, incrementItem, decrementItem
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;