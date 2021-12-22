import React from "react";
import classes from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <>
            <h3>Contact Us</h3>
            <h5>Feel free to contact us or fill out the form and we'll contact you!</h5>
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
            </div>
        </>
    )
}

export default ContactForm;