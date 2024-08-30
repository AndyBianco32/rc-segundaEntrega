import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import './ItemDetailContainer.css';
import Container from 'react-bootstrap/Container';
// import data from "../data/products.json";
import { ItemContext } from '../contexts/ItemsContexts';
import { ItemCount } from './ItemCount';

export const ItemDetailContainer = () => {
const [item, setItem] = useState(true);

const {addItem} = useContext(ItemContext)

const {id } = useParams();

useEffect (() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    getDoc(refDoc)
    .then((snapshot) => {
        setItem({id: snapshot.id, ...snapshot.data() });
    });

 }, [id]);

 const onAdd = (count) =>{
    addItem({...item, quantity: count});
 }


    return (
        <Container className="mt-5 detailContainer" >
        <div className="detailContainer1">

            <div className="detailContainerInside">
            <h1>{item.title}</h1>
            <img src={item.img} style={{ width: 200 }}/>

            </div>
        </div>

        <div className="detailContainer2">
            <h4>Categoria: {item.category}</h4>
            <p> <b>Descripcion:</b> {item.detail}</p>
            <p>Editorial: {item.editor}</p>
            <p>Precio: ${item.price}</p>
            <ItemCount stock={item.stock} onAdd={onAdd}/>
          </div>
        
        </Container>
);
}

