import { useContext, useState } from "react";
import './Cart.css';
import { ItemContext } from "../contexts/ItemsContexts";
import {useForm, useFormState} from "react-hook-form";
import swal from "sweetalert"


export const Cart = () => {

    const {items, removeItem, reset} = useContext(ItemContext);
    const {register,formState:{errors}, handleSubmit} = useForm();
    
    const total = items.reduce((acc, act) => acc + act.price * act.quantity , 0);
    
    function insertar(){
        swal ("Su compra ha sido ejecutada con exito")
        reset();
    }


 if (!items.length) return "No hay productos en el carrito";

    return (
    <>
    <button className="reset" onClick={reset}>Vaciar Carrito</button>
    <div className="cartsCar">
    {items?.map((i) => (
        
        <div key= {i.id} className="cartCarrito">
        <h3>{i.title}</h3>
        <img src={i.img} width={150}></img>
        <p>Cantidad: {i.quantity}</p>
        <p>Precio: $ {i.price}</p>
        </div> 

        ))
    }
    </div>
    
    <div className="totalImporte"><h2>Total de la Compra: $ {total}</h2> </div>


    
    <hr/>
    {!!items.length &&
    <form className="formulario" onSubmit={handleSubmit(insertar)}>
        <div>
            <label>Nombre :</label>
            <input placeholder="Ingrese su nombre" type="text" size="30"{...register("ingresoNombre",{required:true,minLength:2,maxLength:20})}/>
            {
                errors.ingresoNombre?.type==="required" && (
                    <p>Ingrese su nombre</p>
                )
            }
            {
                errors.ingresoNombre?.type==="minLength" && (
                    <p>Ingrese como minimo 2 caracteres</p>
                )
            }
            {
                errors.ingresoNombre?.type==="maxLength" && (
                    <p>Ingrese como maximo 20 caracteres</p>
                )
            }
        </div>
        <div>
            <label>Email :</label>
            <input type="text" placeholder="Ingrese su email" size="30" {
                ...register("correo",{required:true,pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i})
            }/>
            {
                errors.correo?.type==="required" && (
                    <p>Este campo es requerido</p>
                )    
            }
            {
                errors.correo?.type==="pattern" && (
                <p>Correo no valido</p>
            )    
            }
        </div>
        <div>
            <label>Telefono :</label>
            <input type="number" placeholder="Ingrese su telefono" size="30" {...register("telefono", {required:true, valueAsNumber:true})}/>
            {
                errors.telefono?.type==="required" && (
                    <p>Ingrese por favor su telefono</p>
                )
            }
            {
                errors.telefono?.type==="valueAsNumber" && (
                    <p>Ingrese un numero valido</p>
                )
            }
        </div>
        <div>
            <label>Mensaje :</label>
            <input placeholder="Detalle su solicitud si lo desea" type="text" size="90"{...register("ingresoSolicitud",{maxLength:60})}/>
            {
                errors.ingresoSolicitud?.type==="maxLength" && (
                    <p>Ingrese como maximo 60 caracteres</p>
                )
            }
        </div>
        <button type="submit" >Comprar</button>
    </form>
    }
    </>
    )

};