Proyecto Final React.js "Luis Tapari" - E-commerce de Música Urbana
¡Bienvenidos a mi proyecto final de React.js! Este es un e-commerce dedicado a la venta de instrumentales, Soundkits, producciones y promociones relacionadas con la música urbana.

Descripción del Proyecto
Este proyecto es un e-commerce completo que permite a los usuarios explorar y adquirir productos relacionados con la música urbana. Desde instrumentales hasta kits de sonido, el sitio web ofrece una experiencia fluida y moderna para los amantes de la música.

Funcionalidades Principales
Vista General de Productos: Una página de inicio que muestra todos los productos disponibles. Los usuarios pueden explorar una amplia gama de productos con solo unos clics.

Navbar y Categorías: Un Navbar intuitivo permite a los usuarios navegar fácilmente por las diferentes categorías de productos, como instrumentales, soundkits, producciones, etc.

Item Detail: Al seleccionar un producto, los usuarios son redirigidos a una página de detalles (ItemDetail) donde pueden ver más información sobre el producto seleccionado, incluyendo el precio, la descripción y la cantidad disponible.

Carrito de Compras: Los usuarios pueden añadir productos al carrito, modificar las cantidades y ver el total de su compra en tiempo real. Todo esto se maneja eficientemente mediante un contexto de carrito (CartContext).

Checkout: Una vez que los usuarios están listos para realizar su compra, pueden dirigirse al Checkout, donde se les pedirá que ingresen sus datos para generar una orden de compra. El stock se actualiza automáticamente en Firebase y se genera un número de orden único para cada compra.

Notificaciones: Al completar una compra, se muestra una alerta utilizando react-toastify para mejorar la experiencia del usuario.

Tecnologías Utilizadas
React.js: El marco principal utilizado para desarrollar la aplicación.
Firebase: Usado para manejar la base de datos y las órdenes de compra.
React Router: Para la navegación entre diferentes vistas de la aplicación.
React Context API: Para manejar el estado global del carrito de compras.
React Toastify: Implementado para mostrar notificaciones y alertas elegantes.
Mui Material: para el diseño del CartWidget
