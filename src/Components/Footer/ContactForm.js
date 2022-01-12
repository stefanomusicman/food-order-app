import React, { useState } from "react";
import { BsTelephone } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im'
import classes from './ContactForm.module.css';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const formInfo = {
            name: name,
            email: email
        }

        console.log(formInfo);

        setName('');
        setEmail('');
    }

    return (
        <div className={classes['section-container']}>
            <div className={classes['footer-top']}>
                <h3>Join Our Mailing List</h3>
                <h5>Allow us to keep you up to date with any promotions by joining our mailing list!</h5>
            </div>
            <div className={classes['main-container']}>
                <div className={classes['form-container']}>
                    <form onSubmit={formSubmitHandler} id='clientForm'>
                        <div className={classes.name}>
                            <label htmlFor="name">Name</label>
                            <input onChange={nameHandler} value={name} id='name' type='text' ></input>
                        </div>
                        <div className={classes.phone}>
                            <label htmlFor="email">Email</label>
                            <input onChange={emailHandler} value={email} id='email' type='text' ></input>
                        </div>
                        <button className={classes['email-list__submit']} type="submit">Submit</button>
                    </form>
                </div>
                <div className={classes.location}>
                    <div className={classes['phone-number']}>
                        <BsTelephone /><span>514-886-9089</span>
                    </div>
                    <div className={classes['address']}>
                        <ImLocation/><span>2534 Rue Sainte-Catherine Ouest</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;