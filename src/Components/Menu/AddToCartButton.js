import React from "react";
import { BsCart } from 'react-icons/bs';
import classes from './AddToCartButton.module.css';

const AddToCartButton = () => {
    return (
        <button className={classes.button}>
            <BsCart className={classes.icon} />
            <span>Add To Cart</span>
        </button>
    )
}

export default AddToCartButton;