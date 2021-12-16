import React from "react";
import { BsCart } from 'react-icons/bs';
import classes from './HeaderCartButton.module.css'; 

const HeaderCartButton = () => {
    return (
        <button className={classes.button}>
            <BsCart className={classes.icon} />
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    )
}

export default HeaderCartButton;