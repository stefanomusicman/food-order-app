import React from "react";
import classes from './MenuContainer.module.css';
import MenuItemCard from "./MenuItemCard";

const MenuContainer = (props) => {
    return(
        <div className={classes['menu-container']}>
            <h1>Menu</h1>
            <div className={classes['items-container']}>
                {props.menu.map((item) => {
                    return <MenuItemCard name={item.name} price={item.price} image={item.image} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default MenuContainer;