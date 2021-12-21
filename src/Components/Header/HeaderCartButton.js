import React, { useState } from "react";
import { BsCart } from 'react-icons/bs';
import classes from './HeaderCartButton.module.css'; 

const HeaderCartButton = () => {

    const [amountInCart, setAmountInCart] = useState(0);

    return (
        <button className={classes.button}>
            <BsCart className={classes.icon} />
            <span>Your Cart</span>
            <span className={classes.badge}>{amountInCart}</span>
        </button>
    )
}

export default HeaderCartButton;