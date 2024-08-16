import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {

    const [item, setItem] = useState("");
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
        try{
            const response = await fetch('../../../public/productos.json')
            const data = await response.json()
            const newProduct = data.find(p => p.id === Number(id))
            setItem(newProduct)
        }catch (error) {
            console.log(error)
        }
    }
    fetchData()
}, [id])

return (
    <div>
        {item == undefined ? <Spinner/> : <ItemDetail item={item} />}
    </div>
)
}

export default ItemDetailContainer