import React from "react";
import classes from './Cart.module.css';

const Cart = () => {

    return(
        <div className={classes['cart-container']}>
            <div className={classes.cart}>
                <h1>Your Cart</h1>
            </div>
        </div>
    )
}

export default Cart;