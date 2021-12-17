import React from "react";
import AddToCartButton from "./AddToCartButton";
import classes from './MenuItemCard.module.css';

const MenuItemCard = (props) => {

    return(
        <div className={classes['card-container']}>
            <img src={props.image} alt="menu-item"/>
            <h3>{props.name}</h3>
            <h4>{`${props.price}$`}</h4>
            <AddToCartButton />
        </div>
    )
}

export default MenuItemCard;