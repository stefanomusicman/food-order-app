import React, {  useState } from "react";
import { BsCart } from 'react-icons/bs';
import classes from './AddToCartButton.module.css';

const AddToCartButton = () => {

    const [quantity, setQuantity] = useState(1);

    const quantityHandler = (event) => {
        setQuantity(event.target.value);
    }

    return (
        <>
          <form className={classes.form}>
            <label htmlFor="quantity">Qty</label>
            <input onChange={quantityHandler} type='number' value={quantity} min={1}></input>
          </form>
          <button className={classes.button}>
            <BsCart className={classes.icon} />
            <span>Add To Cart</span>
          </button>
        </>  
    )
}

export default AddToCartButton;