import React, { useContext } from "react";
import classes from './CheckoutSummary.module.css';
import { CartContext } from "../../Context/CartContext";

const CheckoutSummary = () => {

    const [items] = useContext(CartContext);
    const total = items.map(item => Number(item.price)).reduce((previousValue, currentValue) => {return previousValue + currentValue}, 0);

    return(
        <div className={classes['order-summary__conatiner']}>
            <h1 style={{fontFamily: 'Abel'}}>Order Summary</h1>
            <div className={classes['summary-items__container']}>
                {items.map((el, i) => <div className={classes['order-item']} key={i} >
                    <div className={classes['order-item__img']}>
                        <img src={el.image} alt="checkout-item"/>
                    </div>
                    <div className={classes['order-item__info']}>
                        <h3>{el.quantity}</h3>
                        <h3>{el.name}</h3>
                        <h3>{el.price}</h3>
                    </div>
                </div>)}
            </div>
            <div className={classes['order-summary__footer']}>
                <div>Total Amount: {total.toFixed(2)}$</div>
            </div>
        </div>
    )
}
export default CheckoutSummary;