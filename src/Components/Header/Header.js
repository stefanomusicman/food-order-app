import React from 'react';
import classes from './Header.module.css';
import header_image from '../../Images/las-vegas-cafe.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {

    let p1 = 'The home of Montreal\'s finest cafe offering a variety of products from coffee, to Pizza Al Taglio to sandwiches as well as fine desserts.';
    let p2 = 'Our head chef and owner Antonino Soprano came to Montreal over 40 years ago. His dream was to bring his recipes to Canada for all to enjoy! We invite everyone to come try our high quality products!';

    return (
        <div className={classes['primary-container']}>
            <header className={classes.header}>
                <h1>Cafe VICI</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']} >
                <img src={header_image} alt='An cup of coffee' />
                <div>
                    <h2>Benvenuti a Cafe VICI!</h2>
                    <p>{p1}</p>
                    <p>{p2}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;