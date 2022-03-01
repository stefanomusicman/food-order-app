import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import MenuContainer from './Components/Menu/MenuContainer';
import Slider from './Components/Slider/Slider';
import ContactForm from './Components/Footer/ContactForm';
import { CartProvider } from './Context/CartContext';

const Cart = React.lazy(() => import('./Components/Cart/Cart'));
const CheckoutPage = React.lazy(() => import('./Components/Checkout/CheckoutPage'));

function App() {

  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<h2>Loading...</h2>}>
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
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;
