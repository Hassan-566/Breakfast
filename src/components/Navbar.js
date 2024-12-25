import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from '@mui/material/Badge';

import { BsFillCartFill } from 'react-icons/bs';
import logo from '../assets/image 2.png';
import { useSelector } from 'react-redux';

const Navbar = () => {

  let { carts } = useSelector(state => state.cartSlice)
  console.log("data in navbar ______ ", carts)

  return (
    <div>
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* NAVIGATION MENU */}
        <ul className="nav-links">
          {/* USING CHECKBOX HACK */}
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          {/* NAVIGATION MENUS */}
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/blog">Event</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <div className='cart'>
              <Link to="/cart" className=" btn-light " type="submit">
                <div className='c-2'>
                  <span class="MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary css-106c1u2-MuiBadge-badge" >{carts.length}

                  </span>
                </div>
                <BsFillCartFill />
              </Link>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
