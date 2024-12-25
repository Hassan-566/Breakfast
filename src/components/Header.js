import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import Badge from '@mui/material/Badge';
// import image1 from '../assets../image'
import img1 from '../assets/image 2.png'
import img2 from '../assets/image3.png'
import shape1 from '../assets/Shape1.png'
import shape2 from '../assets/shape2.png'
import shape3 from '../assets/shape3.png'
import shape4 from '../assets/shape4.png'
import Offers from '../components/Offers'
import Cards from './Cards';
import Box from './Box';
import Palate from './Palate';
// Import the animate.css library
// import 'animate.css/animate.min.css'; 
const Header = () => {
  return (
    <div>
    
        {/* ELEMENTS */}
        <div class="navbars">
        {/* <a to="/cart" className="btn btn-warning" type="submit">
             <Badge badgeContent={2} color="primary">
           
               <FaShoppingCart />
               </Badge></a>
  */}
         <Link to="/contact" >CONTACTS</Link>
         <Link to="/blog">EVENTS</Link>
         <Link to='/menu'>MENU</Link>
         <a href="#home">HOME</a>
        {/* SHAPE1 */}
        <div className='img '>
       <img src={shape1}/>
       </div>
       {/* SHAPE2 */}
        <div className='img1'>
       <img src={shape2}/>
       </div>
       {/* SHAPE3 */}
       <div class="image1">
            <img src={img1} alt=""/>
        </div>
   <div class="image2">
        <img src={img2} alt=""/>
      <h4>Fresh & delecious</h4>
        </div>
        <h5>OPEN  EVERY  DAY<br/>ONLY MORNING</h5>
        <button className='butn'>BOOK NOW</button>
      <div className='img2'>
       <img src={shape3}/>
       </div>
       <div className='img3'>
       <img src={shape4}/>
       </div>

</div>
      <Offers/>
      <Cards/>
      <Box/>
      <Palate/>
     
     </div>
  )
}

export default Header
