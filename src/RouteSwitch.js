import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import Store from './pages/Store';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './helper/Navbar';

const RouteSwitch = () => (
  <BrowserRouter>
    <Navbar active="home" />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/store" element={<Store />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default RouteSwitch;
