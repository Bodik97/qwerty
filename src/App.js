import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Reviews from './components/Reviews';
import OrderForm from './components/OrderForm';


const App = () => {
  return (
    <div>
      <Home/>
      <Products/>
      <Reviews/>
      <OrderForm/>
    </div>
  );
};

export default App;

