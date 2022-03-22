import React, {  useState, useContext } from "react";
import { menuItems } from "./MenuContainer";
import { BsCart } from 'react-icons/bs';
import classes from './AddToCartButton.module.css';
import { CartContext } from "../../Context/CartContext";

const AddToCartButton = (props) => {

    const [items, setItems] = useContext(CartContext);

    const id = props.id;
    const image = props.image
    const name = props.name;
    const price = props.price

    const [message, setMessage] = useState('Add To Cart');

    const getPriceForQuantity = (id, quantity) => {
      return menuItems.find(item => item.id === id).price * quantity;
    }

    const getProductById = (id) => {
      return menuItems.find(item => item.id === id);
    }

    const addProductToCart = (id, quantity, image) => {
      const i = items.findIndex(item => item.id === id); // false = -1
        if(i === -1) {
          items.push({
            ...getProductById(id),
            quantity,
            image,
            price: getPriceForQuantity(id,quantity).toFixed(2),
          });
          setItems([...items]);
        } else {
          setItems([...items]);
    }
}
    const submitHandler = (event) => {
      event.preventDefault()
      
      const itemToAdd = {
        id: id,
        quantity: 1,
        image: image,
        name: name,
        price: price
      }
      
      addProductToCart(itemToAdd.id, itemToAdd.quantity, itemToAdd.image, itemToAdd.name, itemToAdd.price)

      setMessage('Done!')
    }

    return (
        <>
          <form onSubmit={submitHandler} className={classes.form} >
            <button type="submit" className={classes.button}>
              <BsCart className={classes.icon} />
              <span>{message}</span>
            </button>
          </form>
        </>  
    )
}

export default AddToCartButton;