import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart } from 'react-icons/bs';
import classes from './HeaderCartButton.module.css'; 
import { CartContext } from "../../Context/CartContext";

const HeaderCartButton = () => {

    const [items] = useContext(CartContext);

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