import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos, categoryId }) => {
    const getTitle = () => {
        if (!categoryId) {
            return "Productos";
        }
        return categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
    };

    return (
        <div className="container">
            <h2 className="main-title">{getTitle()}</h2>

            <div className="productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    );
};

export default ItemList;
