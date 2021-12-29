import React, { useState } from "react";
import classes from './Slider.module.css';

const reviews = [
    {
        client: 'Anna Johnson',
        review: 'Absolutely amazing! I always look forward to starting my day with a nice espresso from Cafe Vici!',
        id: 1
    },
    {
        client: 'Giusseppe Saviano',
        review: 'I am an Italian immigrant and can honestly say that I am impressed with the level of authenticity in everything that Cafe Vici offers.',
        id: 2
    },
    {
        client: 'Jack Peters',
        review: 'Big fan of the Cannolis, goes great with a nice Cappuccino!',
        id: 3
    },
    {
        client: 'Lisa Pietrantonio',
        review: 'The food is amazing, I\'ve gotten to know the chef Antonino quite well and you can tell how passionate he is about what he does.',
        id: 4
    }
]

const Slider = () => {

    const [current, setCurrent] = useState(reviews[0]);
    const [active, setActive] = useState(0);

    const handleSetClick = (event) => {
        // event.preventDefault();
        // setCurrent(reviews[event.target.getAttribute('data-quote')]);
        console.log(event.target.getAttribute('data-quote'));
    } 

    return(
        <div className={classes['slider-container']}>
            <p>{current.review}</p>
            <p>{current.client}</p>
            <div className={classes['dot-container']}>
                {reviews.map((review) => {
                    return <span onClick={event => handleSetClick(event)} data-quote={review.index} key={review.id}/>
                })}
            </div>
        </div>
    )
}

export default Slider;