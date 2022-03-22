import React from "react";
import { Link } from "react-router-dom";
import classes from './CheckoutPage.module.css';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from 'react-icons/si';
import CheckoutSummary from "./CheckoutSummary";

const CheckoutPage = () => {
    
    return(
        <div className={classes['checkout-primary']}>
            <form className={classes['checkout-container']}>
                <h1 style={{fontFamily: 'Abel'}}>Checkout</h1>
                <div className={classes['cc-icons__container']}>
                    <FaCcVisa style={{width: '3.5em', height: '3.5em'}} />
                    <FaCcMastercard style={{width: '3.5em', height: '3.5em'}} />
                    <SiAmericanexpress style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <div className={classes['cc-info__container']}>
                    <input type='number' placeholder='Card Number' className={classes['cc-number']} />
                    <input type='date' placeholder='Exp Date' className={classes['cc-expdate']}/>
                    <input type='number' placeholder='CVV' className={classes['cc-cvv']} />
                </div>
                <div className={classes['client-info__container']}>
                    <input type='string' placeholder="Name on Card" />
                    <input type='email' placeholder='Email' />
                </div>
                <div className={classes['payment-button__container']}>
                    <div className={classes['payment-button__submit']}>
                        <button type="submit">Submit Order</button>
                    </div>
                    <Link to='/cart' className={classes['payment-button__return']}>
                        <button>Back</button>
                    </Link>
                </div>
            </form>
            <CheckoutSummary />
        </div>
    )
}

export default CheckoutPage;