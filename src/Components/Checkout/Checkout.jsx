import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext/CartProvider';
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Checkout.css';

const Checkout = () => {
    const { cart, getTotal, clearCart } = useContext(CartContext);
    
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const handleForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !celular || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden");
            return;
        }

        const db = getFirestore();

        const order = {
            items: cart.map((item) => ({
                id: item.item.id,
                titulo: item.item.titulo,
                quantity: item.quantity,
                stock: item.item.stock,
            })),
            total: getTotal(),
            date: new Date(),
            nombre,
            apellido,
            celular,
            email,
        };

        Promise.all(
            order.items.map(async (itemOrder) => {
                const itemRef = doc(db, "item", itemOrder.id);
                const itemDoc = await getDoc(itemRef);
                const stock = itemDoc.data().stock;

                await updateDoc(itemRef, {
                    stock: stock - itemOrder.quantity,
                });
            })
        )
        .then(() => {
            addDoc(collection(db, "orders"), order)
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCart();
                resetForm();
                toast.success(`¡Orden generada con éxito! Número de orden: ${docRef.id}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                setError("No se pudo generar la orden, intentelo nuevamente en unos minutos");
            });
        })
        .catch((error) => {
            setError("No se pudo actualizar el stock, intentelo nuevamente en unos minutos");
        });
    };

    const resetForm = () => {
        setNombre("");
        setApellido("");
        setCelular("");
        setEmail("");
        setEmailConfirmacion("");
        setError("");
    };

    return (
        <div className="checkout-container">
            <ToastContainer />
            <h2 className="checkout-title">Ingresa tus datos</h2>
            <div className="checkout-item-list">
                {cart.map((item) => {
                    if (!item.item) {
                        return <p key={item.id || Math.random()}>Producto no disponible</p>;
                    }

                    return (
                        <div key={`${item.item.id}-${item.quantity}`} className="checkout-item">
                            <p>{item.item.titulo}</p>
                            <p>${item.item.precio}</p>
                            <hr />
                        </div>
                    );
                })}
            </div>

            <form onSubmit={handleForm} className="checkout-form">
                <div>
                    <label htmlFor="nombre" className="checkout-label">Nombre</label>
                    <input 
                        type="text" 
                        id="nombre"
                        className="checkout-input"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="apellido" className="checkout-label">Apellido</label>
                    <input 
                        type="text" 
                        id="apellido"
                        className="checkout-input"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="celular" className="checkout-label">Celular</label>
                    <input 
                        type="number" 
                        id="celular"
                        className="checkout-input"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="checkout-label">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        className="checkout-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="emailConfirmacion" className="checkout-label">Email de confirmación</label>
                    <input 
                        type="email" 
                        id="emailConfirmacion"
                        className="checkout-input"
                        value={emailConfirmacion}
                        onChange={(e) => setEmailConfirmacion(e.target.value)}
                    />
                </div>

                <button type='submit' className="checkout-button">Generar orden de compra</button>
                {error && <p className="checkout-error">{error}</p>}
                {orderId && (
                    <div className="checkout-order-confirmation">
                        <p>¡Gracias por tu compra! Tu número de orden es: {orderId}</p>
                        <Link to="/" className="checkout-link">Volver al inicio</Link>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Checkout;


