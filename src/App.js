import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import LoginSignup from './pages/LoginSignup';
import { Shop } from './Pages/shop';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/muscle' element={<ShopCategory   category="muscle"/>} />
          <Route path='/sports' element={<ShopCategory  category="sports"/>}/>
          <Route path='/electric' element={<ShopCategory  category="electric"/>}/>
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
