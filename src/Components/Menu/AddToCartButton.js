import React, {  useState } from "react";
import { BsCart } from 'react-icons/bs';
import classes from './AddToCartButton.module.css';

const AddToCartButton = (props) => {

    const name = props.name;
    const price = props.price;

    const [quantity, setQuantity] = useState(1);

    const quantityHandler = (event) => {
        setQuantity(event.target.value);
    }

    const submitHandler = (event) => {
      event.preventDefault()
      const itemsToAdd = {
        name: name,
        price: price,
        quantity: quantity,
        totalAmount: price * quantity
      }

      console.log(itemsToAdd);
    }

    return (
        <>
          <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="quantity">Qty</label>
            <input onChange={quantityHandler} type='number' value={quantity} min={1}></input>
            <button type="submit" className={classes.button}>
              <BsCart className={classes.icon} />
              <span>Add To Cart</span>
            </button>
          </form>
        </>  
    )
}

export default AddToCartButton;