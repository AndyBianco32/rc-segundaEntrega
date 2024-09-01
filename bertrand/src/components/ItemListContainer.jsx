import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, getDocs, where, query, collection, } from 'firebase/firestore';
import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
// import data from "../data/products.json";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export const ItemListContainer = () => {
 const [items, setItems] = useState([]);

 const {id } = useParams();

 useEffect (() => {
    const db = getFirestore();

    const refCollection = !id
    ? collection( db, "items")
    : query(collection(db, "items"), where("category", "==", id))

    getDocs(refCollection)
    .then((snapshot) => {
      
      setItems(snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data()};
        }))
     
    });

    
}, [id]);

console.log(items)

    return (
        <Container className="mt-3 " >
        <h3>Libreria Bertrand</h3>
        <Container className="mt-4 d-flex contPrincipal">
        
        {items.map((i) => (
                <Card key={i.id} className="cardPrincipal">
                  <Card.Img variant="top" src={i.img} height={210} />
                  <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{i.title}</Card.Title>
                
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Editor: {i.editor}</ListGroup.Item>
                    <ListGroup.Item>Precio: $ {i.price}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body className="cardBodyLink">
                    <Link to={`/item/${i.id}`} height={50}>Ver Detalle</Link>
                  </Card.Body>
                </Card>
        
        ))}
     
            </Container>
        </Container>
)
}

