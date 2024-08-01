import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import data from "../data/products.json";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export const ItemListContainer = () => {
 const [items, setItems] = useState([]);

 const {id } = useParams();

 useEffect (() => {
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve(data), 2000) ;
    })
    .then((response) => {
    if (!id) {
        setItems(response);
    } else{
        const filtro = response.filter((i) => i.category === id);
        setItems(filtro);
    }
    });
}, [id]);

    return (
        <Container className="mt-3 " >
        <h1>Libros</h1>
        <Container className="mt-4 d-flex" >
        {items.map((i) => (
                <Card key={i.id} style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={i.img}  />
                  <Card.Body>
                    <Card.Title>{i.title}</Card.Title>
                    <Card.Text>
                      {i.detail}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Editor: {i.editor}</ListGroup.Item>
                    <ListGroup.Item>Precio: $ {i.price}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Link to={`/item/${i.id}`}>Ver Detalle</Link>
                  </Card.Body>
                </Card>
        ))}
            </Container>
        </Container>
)
}

