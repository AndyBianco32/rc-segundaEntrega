import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import data from "../data/products.json";


export const ItemDetailContainer = () => {
const [item, setItem] = useState(true);

const {id } = useParams();

useEffect (() => {
    new Promise ((resolve, reject) => {
        setTimeout(() => resolve(data), 1000) ;
    })
    .then((response) => {
        const busqueda = response.find((i) => i.id === Number(id));
        setItem(busqueda);

    });
 }, [id]);

 console.log(item)

    return (
        <Container className="mt-3 " >
        <h1>Libro</h1>
        <h2>{item.title}</h2>
        <img src={item.img} style={{ width: 300 }}/>
        <h4>{item.category}</h4>
        <p>{item.detail}</p>
        
        </Container>
);
}

