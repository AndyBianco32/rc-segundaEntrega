import  { createContext, useState } from "react";

 export const ItemContext = createContext();

 export const Provider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        const siExiste = items.some((i) => i.id === item.id)

        if (siExiste){
            const transform = items.map ((i) => {
                if (i.id === item.id){
                    return { ...i, quantity: i.quantity + item.quantity };
                } else {
                    return i;
                }
            });
            setItems(transform);
        } else {
            setItems ((prev) => [...prev, item])

            }
        };
    const removeItem = (id) => {
        const remove = items.find((i) => i.id !== id);
        setItems(remove)
    }

    const reset = () => {
        setItems ([])
    }

    console.log(items)

    return <ItemContext.Provider value={{items, addItem, reset, removeItem}}>
        { children }
    </ItemContext.Provider>
 }