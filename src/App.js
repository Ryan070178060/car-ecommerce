import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarCategory from './Pages/CarCategory';
import Product from './Pages/Product';
//import LoginSignup from './pages/LoginSignup';
import { Shop } from './Pages/shop';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/muscle' element={<CarCategory category="muscle" />} />
          <Route path='/sports' element={<CarCategory category="sports" />} />
          <Route path='/electric' element={<CarCategory category="electric" />} />
          <Route path='/product' element={<Product />} />
          <Route path=':productId' element={<Product />} />
          {/* <Route path='/login' element={<LoginSignup/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
