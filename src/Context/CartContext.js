import React, { createContext, useState } from "react";
import { productsInCart } from "../Components/Cart/Cart";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [items, setItems] = useState(productsInCart);

    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}
