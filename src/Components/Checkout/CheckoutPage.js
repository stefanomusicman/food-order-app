import React from "react";
import classes from './CheckoutPage.module.css';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from 'react-icons/si';
// import { Link } from "react-router-dom";

const CheckoutPage = () => {
    return(
        <div className={classes['checkout-primary']}>
            <div className={classes['checkout-container']}>
                <h1 style={{fontFamily: 'Abel'}}>Checkout</h1>
                <div className={classes['cc-icons__container']}>
                    <FaCcVisa style={{width: '2.5em', height: '2.5em'}} />
                    <FaCcMastercard style={{width: '2.5em', height: '2.5em'}} />
                    <SiAmericanexpress style={{width: '2.5em', height: '2.5em'}} />
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
            </div>
        </div>
    )
}

export default CheckoutPage;