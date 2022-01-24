import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import classes from './CheckoutPage.module.css';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from 'react-icons/si';
import { CartContext } from "../../Context/CartContext";

const CheckoutPage = () => {

    const [items] = useContext(CartContext);
    const [cardNumber, setCardNumber] = useState(0);
    const [cvv, setCvv] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const cardNumberHandler = (event) => {
        if(event.target.value.trim().length === 17) {
            setIsValid(true)
        }
        setCardNumber(event.target.value);
    }

    const cvvHandler = (event) => {
        if(event.target.value.trim().length === 3) {
            setIsValid(true)
        }
        setCvv(event.target.value);
    }

    const nameHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEmail(event.target.value);
    }

    const orderSubmitHandler = (event) => {
        event.preventDefault();
        if(cardNumber.length < 17) {
            setIsValid(false);
            return;
        }
        if(cvv.length > 3) {
            setIsValid(false);
            return;
        }
        if(email.length === 0) {
            setIsValid(false);
            return;
        }
        if(name.length === 0) {
            setIsValid(false);
        }
    }

    const total = items.map(item => Number(item.price)).reduce((previousValue, currentValue) => {return previousValue + currentValue}, 0);
    
    return(
        <div className={classes['checkout-primary']}>
            <form onSubmit={orderSubmitHandler} className={classes['checkout-container']}>
                <h1 style={{fontFamily: 'Abel'}}>Checkout</h1>
                <div className={classes['cc-icons__container']}>
                    <FaCcVisa style={{width: '3.5em', height: '3.5em'}} />
                    <FaCcMastercard style={{width: '3.5em', height: '3.5em'}} />
                    <SiAmericanexpress style={{width: '3.5em', height: '3.5em'}} />
                </div>
                <div className={classes['cc-info__container']}>
                    <input type='number' onChange={cardNumberHandler} value={cardNumber} placeholder='Card Number' className={classes['cc-number']} style={{borderColor: !isValid ? 'red' : 'grey'}}/>
                    <input type='date' placeholder='Exp Date' className={classes['cc-expdate']}/>
                    <input type='number' onChange={cvvHandler} value={cvv} placeholder='CVV' className={classes['cc-cvv']} style={{borderColor: !isValid ? 'red' : 'grey'}}/>
                </div>
                <div className={classes['client-info__container']}>
                    <input type='string' onChange={nameHandler} value={name} placeholder="Name on Card" style={{borderColor: !isValid ? 'red' : 'grey'}}/>
                    <input type='email' onChange={emailHandler} value={email} placeholder='Email' style={{borderColor: !isValid ? 'red' : 'grey'}}/>
                </div>
                {!isValid && <p>*Please verify that all fields have been filled out correctly</p>}
                <div className={classes['payment-button__container']}>
                    <div className={classes['payment-button__submit']}>
                        <button type="submit">Submit Order</button>
                    </div>
                    <Link to='/cart' className={classes['payment-button__return']}>
                        <button>Back</button>
                    </Link>
                </div>
            </form>
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
                    <div>Total Amount: {total.toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage;