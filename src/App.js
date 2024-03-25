import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import LoginSignup from './pages/LoginSignup';
import { Shop } from './Pages/shop';
import Footer from './Components/Footer/Footer';
import CarCategory from './Pages/CarCategory';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/muscle' element={<CarCategory   category="men"/>} />
          <Route path='/sports' element={<CarCategory  category="sports"/>}/>
          <Route path='/electric' element={<CarCategory  category="electric"/>}/>
          <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

          </Route>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
