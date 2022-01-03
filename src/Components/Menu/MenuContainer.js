import React from "react";
import classes from './MenuContainer.module.css';
import MenuItemCard from "./MenuItemCard";

import Biscotti from '../../Images/biscotti.jpg';
import Cannoli from '../../Images/cannoli.jpg';
import Cappuccino from '../../Images/cappuccino.jpg';
import Espresso from '../../Images/espresso.jpg';
import Focaccia from '../../Images/focaccia.jpg';
import Panino from '../../Images/panino.jpg';

const menuItems = [
    {
      name: 'Espresso',
      price: 2.50,
      image: <Espresso/>,
      id: 1
    },
    {
      name: 'Cappuccino',
      price: 3.50,
      image: <Cappuccino />,
      id: 2
    },
    {
      name: 'Focaccia con Mortadella',
      price: 4.50,
      image: <Focaccia />,
      id: 3
    },
    {
      name: 'Cannoli',
      price: 3.25,
      image: <Cannoli />,
      id: 4
    },
    {
      name: 'Panino Bistecca',
      price: 8.50,
      image: <Panino />,
      id: 5
    },
    {
      name: 'Biscotti',
      price: 2.75,
      image: <Biscotti />,
      id: 6
    }
  ];

const MenuContainer = () => {
    return(
        <div className={classes['menu-container']}>
            <h1>Menu</h1>
            <div className={classes['items-container']}>
                {menuItems.map((item) => {
                    return <MenuItemCard name={item.name} price={item.price} image={item.image} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default MenuContainer;