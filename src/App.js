import React ,{useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './store/CartProvider.js'

function App() {
  const [cartIsShown,isCartIsShown]=useState(false)
  const showcartHandler=()=>{
    isCartIsShown(true);
  };
  const hideCartHandler=()=>{
    isCartIsShown(false);
  }
  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showcartHandler}/>
     <main>
      <Meals/>
     </main>
    </CartProvider>
  );
}

export default App;
