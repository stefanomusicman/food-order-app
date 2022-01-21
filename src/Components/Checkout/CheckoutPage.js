import React, { useContext } from "react";
import classes from './CheckoutPage.module.css';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from 'react-icons/si';
import { CartContext } from "../../Context/CartContext";
// import { Link } from "react-router-dom";

const CheckoutPage = () => {

    const [items] = useContext(CartContext);
    
    return(
        <div className={classes['checkout-primary']}>
            <div className={classes['checkout-container']}>
                <h1 style={{fontFamily: 'Abel'}}>Checkout</h1>
                <div className={classes['cc-icons__container']}>
                    <FaCcVisa style={{width: '3.5em', height: '3.5em'}} />
                    <FaCcMastercard style={{width: '3.5em', height: '3.5em'}} />
                    <SiAmericanexpress style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <div className={classes['cc-info__container']}>
                    <input type='number' placeholder='Card Number' className={classes['cc-number']}/>
                    <input type='date' placeholder='Exp Date' className={classes['cc-expdate']}/>
                    <input type='number' placeholder='CVV' className={classes['cc-cvv']}/>
                </div>
                <div className={classes['client-info__container']}>
                    <input type='string' placeholder="Name on Card" />
                    <input type='email' placeholder='Email' />
                </div>
                <div className={classes['payment-button__container']}>
                    <button>Submit Order</button>
                </div>
            </div>
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
            </div>
        </div>
    )
}

export default CheckoutPage;