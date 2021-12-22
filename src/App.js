import React, { Fragment } from 'react';
import Header from './Components/Header/Header';
import MenuContainer from './Components/Menu/MenuContainer';
import ContactForm from './Components/Footer/ContactForm';
import Biscotti from './Images/biscotti.jpg';
import Cannoli from './Images/cannoli.jpg';
import Cappuccino from './Images/cappuccino.jpg';
import Espresso from './Images/espresso.jpg';
import Focaccia from './Images/focaccia.jpg';
import Panino from './Images/panino.jpg';

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

function App() {
  return (
    <Fragment>
      <Header />
      <MenuContainer menu={menuItems}/>
      <ContactForm />
    </Fragment>
  );
}

export default App;
