import "./itemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('../../../public/productos.json');
                const data = await response.json()
                const filterProducts = categoryId ? data.filter((p) => p.categoria === categoryId) : data;
                setProductos(filterProducts)
            } catch(error){
                console.error(error)
            } finally{
                setLoading(false)
            }
        }
    fetchData()
    },[categoryId])


return (
    <div className="container">
        {loading ? <Spinner/> : <ItemList productos={productos} />}
    </div>
)
}

export default ItemListContainer