import React from "react";
import { Link } from "react-router-dom";
import { BsCart } from 'react-icons/bs';
import classes from './HeaderCartButton.module.css'; 

const HeaderCartButton = () => {

    // const [amountInCart, setAmountInCart] = useState(0);

    return (
        <Link to='/cart'>
            <button className={classes.button}>
                <BsCart className={classes.icon} />
                <span>Your Cart</span>
                <span className={classes.badge}>0</span>
            </button>
        </Link>
    )
}

export default HeaderCartButton;