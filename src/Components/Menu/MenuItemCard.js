import React from "react";
import AddToCartButton from "./AddToCartButton";
import classes from './MenuItemCard.module.css';

const MenuItemCard = (props) => {

    const price = `${props.price.toFixed(2)}$`

    return(
        <div className={classes['card-container']}>
            <div className={classes['image-container']}>
                <img src={props.image.type} alt="menu-item" />
            </div>
            <h3>{props.name}</h3>
            <h4>{price}</h4>
            <AddToCartButton id={props.id} name={props.name} price={props.price} />
        </div>
    )
}

export default MenuItemCard;