import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import MenuContainer from './Components/Menu/MenuContainer';
import Slider from './Components/Slider/Slider';
import ContactForm from './Components/Footer/ContactForm';
import Cart from './Components/Cart/Cart';



function App() {

  return (
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
      </Switch>
    </Router>
  );
}

export default App;
