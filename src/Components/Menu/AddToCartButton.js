import React, {  useState, useContext } from "react";
import { menuItems } from "./MenuContainer";
import { BsCart } from 'react-icons/bs';
import classes from './AddToCartButton.module.css';
// import { addProductToCart } from "../Cart/Cart";
import { CartContext } from "../../Context/CartContext";

const AddToCartButton = (props) => {

//   const addProductToCart = (id, quantity, image) => {
//     // 0 , [1,2,0,1]; -1
//     const i = items.findIndex(item => item.id === id); // false = -1
//     if(i === -1) {
//         items.push({
//             ...getProductById(id),
//             quantity,
//             image,
//             price: getPriceForQuantity(id,quantity).toFixed(2)
//         });
//     }
// }

  // useContext 
    const [items, setItems] = useContext(CartContext);
    const id = props.id;
    const image = props.image
    const name = props.name;
    const price = props.price

    // const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('Add To Cart');

    // const quantityHandler = (event) => {
    //     setQuantity(event.target.value);
    // }

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
            price: getPriceForQuantity(id,quantity).toFixed(2)
      });
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

      addProductToCart(itemToAdd.id, itemToAdd.quantity, itemToAdd.image, itemToAdd.name, itemToAdd.price);
      
      // setItems((prevItems) => [...prevItems, addedItem]);
      
      // setQuantity(1);
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