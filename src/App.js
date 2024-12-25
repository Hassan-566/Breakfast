import './App.css';
import Blog from './components/Blog';
// import Box from './components/Box';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import Offers from './components/Offers';
import { useState } from 'react';
import Men from './menu/Menu';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
import CheckoutForm from './components/Checkout';
import Checkout from './components/Checkout';
import Cart from './components/Checkout';
import Success from './components/Success';
import Menu from './menu/Menu';
// import Palate from './components/Palate';

function App() {
  // const [menuItems,setMenuItems ]=useState(items);

  return (
    <>
    <Routes>

 
<Route path='/' element={<Header/>}/>
  <Route path='/menu' element={<Menu/>}/>
  <Route path="/products/:id" element={<ProductDetail/>}/>

  <Route path='/contact' element={<Contact/>}/>
  

  {/* <Route path='/product-detail/:id' element={<PoductDetail />}/> */}
<Route path='/blog' element={<Blog/>}/>
<Route path='/cart' element={<CartPage />} />
<Route path='/checkout' element={<Checkout />} />
<Route path='/success' element={<Success />} />




</Routes>
    <Footer/> 
    </>
  );
}

export default App;