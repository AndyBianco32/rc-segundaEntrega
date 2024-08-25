import { useState } from "react";


export const ItemCount = ({onAdd, stock}) => {
    const [count, setCount] = useState(1);
    
    const Incrementar = () =>{
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };
    const Decrecer = () =>{
        if (count > 1){
            setCount((prev) => prev - 1);
        }
    };

    const handleAdd =() =>{
        onAdd (count);
        setCount(1);
    }

    return (
    <div>
        <button onClick= {Incrementar}>+</button>
        <span>{count}</span>
        <button onClick= {Decrecer}>-</button>
        <hr />
        <button onClick={handleAdd}>Agregar al Carrito</button>
    </div>
    );
};