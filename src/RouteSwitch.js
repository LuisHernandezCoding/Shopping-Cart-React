import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Store from './pages/Store';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './helper/Navbar';

const RouteSwitch = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default RouteSwitch;
