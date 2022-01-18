import React, {useState} from "react";
import { getProductById } from "../Menu/MenuContainer";
import { getPriceForQuantity } from "../Menu/MenuContainer";
import { Link } from "react-router-dom";
import classes from './Cart.module.css';
import { BsCart } from 'react-icons/bs';
import { BsTrash } from "react-icons/bs";


// const getSessionOrDefault = (key, defaultValue) => {
//     const stored = sessionStorage.getItem(key);
//     if(stored === null) {
//       return defaultValue;

//     return JSON.parse(stored);    }
// }

export let productsInCart = [];

export const addProductToCart = (id, quantity, image) => {
    // 0 , [1,2,0,1]; -1
    const i = productsInCart.findIndex(item => item.id === id); // false = -1
    if(i === -1) {
        productsInCart.push({
            ...getProductById(id),
            quantity,
            image,
            price: getPriceForQuantity(id,quantity).toFixed(2)
        });
    }
}
const Cart = () => {


    // const [cart, setCart] = useState(getSessionOrDefault('cartItems', [productsInCart]));
    // useEffect(() => {
    //   sessionStorage.setItem('cartItems', JSON.stringify(cart))
    // }, [cart]);
    // const [total, setTotal] = useState(0);
    
    const [cart, setCart] = useState(productsInCart);

    const handleIncreaseQuantity = (id) => {
        const i = productsInCart.findIndex(item => item.id === id);
        productsInCart[i].quantity = productsInCart[i].quantity + 1;
        productsInCart[i].price = getPriceForQuantity(id,productsInCart[i].quantity).toFixed(2);
        setCart([...productsInCart]);
    }
    
    const handleDecreaseQuantity = (id) => {
        const i = productsInCart.findIndex(item => item.id === id);
        productsInCart[i].quantity = productsInCart[i].quantity - 1;
        productsInCart[i].price = getPriceForQuantity(id,productsInCart[i].quantity).toFixed(2);
        setCart([...productsInCart]);
    }

    const handleDelete = (id) => {
        productsInCart = productsInCart.filter(item => item.id !== id);
        setCart(productsInCart);
    }

    const total = cart.map(item => Number(item.price)).reduce((previousValue, currentValue) => {return previousValue + currentValue}, 0);

    return(
        <div className={classes['cart-container']}>
            <div className={classes.cart}>
                <h1 style={{fontFamily: 'Abel'}}>Your Cart</h1>
                <div className={classes['cart-items__container']}>
                   { cart.map((el, i) => <div className={classes['cart-items']} key={i}>
                        <div className={classes['imageBox']}>
                            <img src={el.image} alt="menu-item" />
                        </div>
                        <div className={classes['item-info']}>
                            <h3 className={classes.quantity}>{el.quantity}</h3>
                            <h3 className={classes.name}>{el.name}</h3>
                            <h3 className={classes.price}>{`${el.price}$`}</h3>
                        </div>
                        <div className={classes['cart-buttons__container']}>
                            <button onClick={() => handleIncreaseQuantity(el.id)}>+</button>
                            <button disabled={el.quantity === 1} onClick={() => handleDecreaseQuantity(el.id)}>-</button>
                            <button onClick={() => handleDelete(el.id)}><BsTrash /></button>
                        </div>
                   </div>)}
                   {cart.length === 0 && <p>Your Cart is Empty</p>}
                </div>
                <div className={classes['cart-footer__container']}>
                    <div className={classes['buttons-container']}>
                        <button onClick={() => console.log(productsInCart)} className={classes['checkout-button']}>
                            <BsCart className={classes['checkout-icon']} />
                            <span>Proceed To Checkout</span>
                        </button>
                        <Link to='/' className={classes['return-to__home']}>
                            <button className={classes['back-button']}>Back</button>
                        </Link>
                    </div>
                    <div className={classes['total-amount']}>
                        <div>Total Amount: {total.toFixed(2)}$</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;