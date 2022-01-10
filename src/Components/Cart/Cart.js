import React, {useState} from "react";
import { getProductById } from "../Menu/MenuContainer";
import { getPriceForQuantity } from "../Menu/MenuContainer";
import { Link } from "react-router-dom";
import classes from './Cart.module.css';
import { BsCart } from 'react-icons/bs';


let productsInCart = [];

export const addProductToCart = (id, quantity) => {
    productsInCart.push({...getProductById(id), quantity, price: getPriceForQuantity(id,quantity)});
}


const Cart = () => {

    // Just for making rerender happen
    const [update, setUpdate] = useState(0);

    const handleIncreaseQuantity = (id) => {
        const i = productsInCart.findIndex(item => item.id === id);
        productsInCart[i].quantity = productsInCart[i].quantity + 1;
        productsInCart[i].price = getPriceForQuantity(id,productsInCart[i].quantity)
        setUpdate(update+1);
    }
    
    const handleDecreaseQuantity = (id) => {
        const i = productsInCart.findIndex(item => item.id === id);
        productsInCart[i].quantity = productsInCart[i].quantity - 1;
        productsInCart[i].price = getPriceForQuantity(id,productsInCart[i].quantity)
        setUpdate(update+1);
    }

    return(
        <div className={classes['cart-container']}>
            <div className={classes.cart}>
                <h1>Your Cart</h1>
                <div>
                   { productsInCart.map((el, i) => <div key={i}>
                        <h1>{el.name}</h1>
                        <h3>{el.price}</h3>
                        <h3>{el.quantity}</h3>
                        <button onClick={() => handleIncreaseQuantity(el.id)}>+</button>
                        <button onClick={() => handleDecreaseQuantity(el.id)}>-</button>
                   </div>)}
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