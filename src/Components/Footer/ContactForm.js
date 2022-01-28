import React, { useState } from "react";
import { BsTelephone } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import MapContainer from "./MapContainer";
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
                    <div className={classes['street-phone__container']}>
                        <div className={classes['phone-number']}>
                            <BsTelephone /><span>514-886-9089</span>
                        </div>
                        <div className={classes['address']}>
                            <ImLocation/><span>2534 Rue Sainte-Catherine Ouest</span>
                        </div>
                    </div>
                    <MapContainer />
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.0282711565346!2d-73.5866504851148!3d45.48937543978537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a6d64e91351%3A0x9f4bf07f2242b891!2s2534%20Rue%20Sainte-Catherine%20O%2C%20Montr%C3%A9al%2C%20QC!5e0!3m2!1sen!2sca!4v1643404555343!5m2!1sen!2sca" 
                        title="myMap"
                        width="600" 
                        height="450" 
                        style={{border: "0", borderRadius: '5px'}} 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe> */}
                </div>
            </div>
        </div>
    )
}

export default ContactForm;