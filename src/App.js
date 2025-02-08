import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Reviews from './components/Reviews';
import OrderForm from './components/OrderForm';
import OrderModal from './components/OrderModal';


const App = () => {
  return (
    <div>
      <Home/>
      <Products/>
      <Reviews/>
      <OrderForm/>
      <OrderModal/>
    </div>
  );
};

export default App;

