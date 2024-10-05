import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {collection,getDocs,getFirestore,query,where} from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const db = getFirestore();

        const myProducts = categoryId 
            ? query(collection(db,"item"), where("categoria", "==", categoryId))
            : collection(db, "item");

        getDocs(myProducts)
            .then((res) => {
                const newProducts = res.docs.map((doc) => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProductos(newProducts);
            })
            .catch((error) => console.log("Error buscando los items", error))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <div className="container">
            {loading ? <Spinner className="spinner"/> : <ItemList productos={productos} categoryId={categoryId} />}
        </div>
    );
};

export default ItemListContainer;
