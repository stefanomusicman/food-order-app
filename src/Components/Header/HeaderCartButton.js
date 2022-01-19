import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart } from 'react-icons/bs';
import classes from './HeaderCartButton.module.css'; 
import { productsInCart } from "../Cart/Cart";
import { CartContext } from "../../Context/CartContext";

const HeaderCartButton = () => {

    const {items, setItems} = useContext(CartContext);

    //TODO: to be removed after that you check it out
    useEffect(() => {
        console.log('hello', items);
    }, [items]);


    return (
        <Link to='/cart' >

            <button className={classes.button}>
                <BsCart className={classes.icon} />
                <span>Your Cart</span>
                <span className={classes.badge}>{items.length}</span>
            </button>
        </Link>
    )
}

export default HeaderCartButton;