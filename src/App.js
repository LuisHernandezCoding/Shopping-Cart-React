import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './helper/Navbar';
import Footer from './helper/Footer';
import Cart from './pages/Cart';

const App = () => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  const addItemToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeItemFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const updateItemQuantity = (item, quantity) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity };
      }
      return cartItem;
    });
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const getCart = () => cart;

  const checkoutCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
    // eslint-disable-next-line no-alert
    alert('Thank you for your order!');
  };

  const cartMethods = {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    updateItemQuantity,
    getCart,
    checkoutCart,
  };

  return (
    <BrowserRouter basename="/Shopping-Cart-React">
      <Navbar cartQuantity={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu cart={cart} cartMethods={cartMethods} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} cartMethods={cartMethods} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
