import React, {  useState } from "react";
import { BsCart } from 'react-icons/bs';
import classes from './AddToCartButton.module.css';
import { addProductToCart } from "../Cart/Cart";
import { productsInCart } from "../Cart/Cart";

const AddToCartButton = (props) => {

  // useContext 

    // const name = props.name;
    const id = props.id;
    const image = props.image
    // const price = props.price;

    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('Add To Cart');

    // const quantityHandler = (event) => {
    //     setQuantity(event.target.value);
    // }

    const submitHandler = (event) => {
      event.preventDefault()

      const itemToAdd = {
        id: id,
        quantity: quantity,
        image: image
      }

      console.log('submitHandler')
      addProductToCart(itemToAdd.id, itemToAdd.quantity, itemToAdd.image);

      setQuantity(1);
      setMessage('Done!')
    }

    return (
        <>
          <form onSubmit={submitHandler} className={classes.form} >
            {/* <label htmlFor="quantity">Qty</label> */}
            {/* <input onChange={quantityHandler} type='number' value={quantity} min={1}></input> */}
            <button type="submit" className={classes.button}>
              <BsCart className={classes.icon} />
              <span>{message}</span>
            </button>
          </form>
        </>  
    )
}

export default AddToCartButton;