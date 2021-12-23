import React from "react";
import { BsTelephone } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im'
import classes from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <>
            <div className={classes['footer-top']}>
                <h3>Contact Us</h3>
                <h5>Feel free to contact us or fill out the form and we'll contact you!</h5>
            </div>
            <div className={classes['main-container']}>
                <div className={classes['form-container']}>
                    <form id='clientForm'>
                        <div className={classes.name}>
                            <label htmlFor="name">Name</label>
                            <input id='name' type='text' />
                        </div>
                        <div className={classes.phone}>
                            <label htmlFor="phone">Phone Number</label>
                            <input id='phone' type='number' />
                        </div>
                    </form>
                    <textarea form="clientForm">What can we do for you?</textarea>
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
        </>
    )
}

export default ContactForm;