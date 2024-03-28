import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/shop';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Service from './Components/Services/Services';
import ServiceDes from './Components/ServiceDes/ServiceDes';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/muscle" element={<ShopCategory category="muscle" />} />
          <Route path="/sports" element={<ShopCategory category="sports" />} />
          <Route path="/electric" element={<ShopCategory category="electric" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/services" element={<Service/>} />
          <Route path="/service-description" element={<ServiceDes/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
