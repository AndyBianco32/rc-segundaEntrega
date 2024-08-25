import { useContext, useState } from "react";
import { getFirestore, collection, addDoc} from "firebase/firestore";

import { ItemContext } from "../contexts/ItemsContexts";


const initialValues = {
    telefono: "",
    email: "",
    nombre: "",
    mensaje: "",
}

export const Cart = () => {
const [buyer, setBuyer] = useState(initialValues);
const {items, removeItem, reset} = useContext(ItemContext);

const total = items.reduce((acc, act) => acc + act.price * act.quantity , 0);

const handleChange = (ev) => {
    setBuyer ((prev) => {
        return{...prev, [ev.target.name] : ev.target.value};
    });
};

const handleOrder = () =>{
    const order ={
        buyer,
        items,
        total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
        if (id) {
            alert ("Su orden: " + " ha sido completada");
            reset()
            setBuyer(initialValues)
        }
    })
}

 if (!items.length) return "No hay productos en el carrito";

    return (
    <>
    <button onClick={reset}>Reset</button>
    {items?.map((i) => (<div key= {i.id}>
        <div>{i.title}</div>
        <img src={i.img} width={150}></img>
        <h2>Cantidad: {i.quantity}</h2>
        <h3>Precio: {i.price}</h3>
        {/* <span onClick={() => removeItem(i.id)}>Eliminar</span> */}
    </div>))}
    
    <h1>Total: {total}</h1>

    <hr/>
    {!!items.length &&
    <form>
        <div>
            <label>Nombre</label>
            <input value={buyer.nombre} onChange={handleChange} name="nombre"/>
        </div>
        <div>
            <label>Email</label>
            <input value={buyer.email} onChange={handleChange} name="email"/>
        </div>
        <div>
            <label>Telefono</label>
            <input value={buyer.telefono} onChange={handleChange} name="telefono"/>
        </div>
        <div>
            <label>Mensaje</label>
            <input value={buyer.mensaje} onChange={handleChange} name="mensaje"/>
        </div>
        <button type="button" onClick={handleOrder}>Comprar</button>
    </form>
    }
    </>
    )

};