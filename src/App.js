import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import MenuContainer from './Components/Menu/MenuContainer';
import Slider from './Components/Slider/Slider';
import ContactForm from './Components/Footer/ContactForm';
import Cart from './Components/Cart/Cart';
import CheckoutPage from './Components/Checkout/CheckoutPage';
import { CartProvider } from './Context/CartContext';

function App() {
  // create a context for the cart
  // const [cart, setCart] = React.useState([]);


  return (
    // Provider is used to pass data from one component to another, value = cart
    <CartProvider>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Header />
            <MenuContainer />
            <Slider />
            <ContactForm />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/checkout'>
            <CheckoutPage />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
