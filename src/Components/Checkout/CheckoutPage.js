import React from "react";
import { Link } from "react-router-dom";
import classes from './CheckoutPage.module.css';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from 'react-icons/si';
import CheckoutSummary from "./CheckoutSummary";

const CheckoutPage = () => {

    // const [cardNumber, setCardNumber] = useState(0);
    // const [cvv, setCvv] = useState(0);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [isValid, setIsValid] = useState(true);

    // const cardNumberHandler = (event) => {
    //     if(event.target.value.trim().length === 17) {
    //         setIsValid(true)
    //     }
    //     setCardNumber(event.target.value);
    // }

    // const cvvHandler = (event) => {
    //     if(event.target.value.trim().length === 3) {
    //         setIsValid(true)
    //     }
    //     setCvv(event.target.value);
    // }

    // const nameHandler = (event) => {
    //     if(event.target.value.trim().length > 0) {
    //         setIsValid(true)
    //     }
    //     setName(event.target.value);
    // }

    // const emailHandler = (event) => {
    //     if(event.target.value.trim().length > 0) {
    //         setIsValid(true)
    //     }
    //     setEmail(event.target.value);
    // }

    // const orderSubmitHandler = (event) => {
    //     event.preventDefault();
    //     if(cardNumber.length < 17) {
    //         setIsValid(false);
    //         return;
    //     }
    //     if(cvv.length > 3) {
    //         setIsValid(false);
    //         return;
    //     }
    //     if(email.length === 0) {
    //         setIsValid(false);
    //         return;
    //     }
    //     if(name.length === 0) {
    //         setIsValid(false);
    //     }
    // }
    
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
                {/* {!isValid && <p>*Please verify that all fields have been filled out correctly</p>} */}
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