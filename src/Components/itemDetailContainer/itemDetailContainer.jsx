import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css"; 
const ItemDetailContainer = () => {
    const [item, setItem] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const newDoc = doc(db, "item", id);

        getDoc(newDoc).then(res => {
            const data = res.data();
            const newProduct = { id: res.id, ...data };
            setItem(newProduct);
        });
    }, [id]);

    return (
        <div className="item-detail-container">
            {item === undefined ? <Spinner /> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
