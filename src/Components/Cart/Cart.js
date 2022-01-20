import React, {useContext} from "react";
// import { getProductById } from "../Menu/MenuContainer";
// import { getPriceForQuantity } from "../Menu/MenuContainer";
import { Link } from "react-router-dom";
import classes from './Cart.module.css';
import { BsCart } from 'react-icons/bs';
import { BsTrash } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";
import { menuItems } from "../Menu/MenuContainer";


const Cart = () => {

    const getPriceForQuantity = (id, quantity) => {
        return menuItems.find(item => item.id === id).price * quantity;
      }
    
    const [items, setItems] = useContext(CartContext);

    const handleIncreaseQuantity = (id) => {
        const i = items.findIndex(item => item.id === id);
        items[i].quantity = items[i].quantity + 1;
        items[i].price = getPriceForQuantity(id,items[i].quantity).toFixed(2);
        setItems([...items]);
    }
    
    const handleDecreaseQuantity = (id) => {
        const i = items.findIndex(item => item.id === id);
        items[i].quantity = items[i].quantity - 1;
        items[i].price = getPriceForQuantity(id,items[i].quantity).toFixed(2);
        setItems([...items]);
    }

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    const total = items.map(item => Number(item.price)).reduce((previousValue, currentValue) => {return previousValue + currentValue}, 0);

    return(
        <div className={classes['cart-container']}>
            <div className={classes.cart}>
                <h1 style={{fontFamily: 'Abel'}}>Your Cart</h1>
                <div className={classes['cart-items__container']}>
                   { items.map((el, i) => <div className={classes['cart-items']} key={i}>
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
                   {items.length === 0 && <p>Your Cart is Empty</p>}
                </div>
                <div className={classes['cart-footer__container']}>
                    <div className={classes['buttons-container']}>
                        <Link to='/checkout' className={classes['return-to__home']}>
                            <button className={classes['checkout-button']}>
                                <BsCart className={classes['checkout-icon']} />
                                <span>Proceed To Checkout</span>
                            </button>
                        </Link>
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