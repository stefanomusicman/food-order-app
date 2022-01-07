import React from "react";
import { Link } from "react-router-dom";
import classes from './Cart.module.css';
import { BsCart } from 'react-icons/bs';


const Cart = () => {

    return(
        <div className={classes['cart-container']}>
            <div className={classes.cart}>
                <h1>Your Cart</h1>
                <div>
                    <h1>Menu Items</h1>
                </div>
                <div className={classes['cart-footer__container']}>
                    <div className={classes['buttons-container']}>
                        <button className={classes['checkout-button']}>
                            <BsCart className={classes['checkout-icon']} />
                            <span>Proceed To Checkout</span>
                        </button>
                        <Link to='/'>
                            <button className={classes['back-button']}>Back</button>
                        </Link>
                    </div>
                    <div className={classes['total-amount']}>
                        <p>Total Amount: 0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;