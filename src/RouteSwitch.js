import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './helper/Navbar';
import Footer from './helper/Footer';
import Cart from './pages/Cart';

const RouteSwitch = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default RouteSwitch;
