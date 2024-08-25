import { Link } from "react-router-dom"
import { useContext } from "react"

import carrito from "../assets/carrito.png"
import { ItemContext } from '../contexts/ItemsContexts';

export const CartWidget = () => {
    const { items } =useContext(ItemContext)

    return (
    <Link to="/cart">
    <img src={carrito} height={38}/> 
    <span>{items.length}</span>
    </Link>
)
}