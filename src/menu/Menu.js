import React, { useEffect, useState } from 'react';
import ProductDB from "../menu/Data";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Menu.css'
import Loader from "./Loader"


function Menu() {
  const [items, setItems] = useState([]);
  const [baseItems, setBaseItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all'); // Set a default category

  const filterItem = (category) => {
    setSelectedCategory(category);
    let filteredItems;
    if (category === 'all') {
      // If category is 'all', show all items
      filteredItems = baseItems;
    } else {
      // If category is specific, filter items based on the category
      filteredItems = baseItems.filter(item => item.category === category);
    }
    // Update the state with the filtered items
    setItems(filteredItems);
  };

  useEffect(() => {
    fetch('https://motivation-api.fly.dev/api/products')
      .then(res => res.json())
      .then(data => {
        setBaseItems(data);
        // Show all products by default
        setItems(data);
        setLoader(false);
      })
  }, []);


  return (
    <>
      <Navbar />
{/* {loader?<Loader/>:null} */}
      {/* FILTER METHOD-START */}
      < div>
        <ul className="d-flex flex-wrap justify-content-center gap-5 mt-5">
          <li>
            <a className='btn '
              href="#"
              style={{ color: selectedCategory === 'all' ? 'gray' : 'White' }}
              onClick={() => filterItem('all')}
            >
              All
            </a>
          </li>
          <li>
            <a className='btn '
              href="#"
              style={{ color: selectedCategory === 'paratha' ? 'gray' : 'White' }}
              onClick={() => filterItem('paratha')}
            >
              Paratha
            </a>
          </li>
          {/* Add more category links here */}
          <li>
            <a className='btn '
              href="#" style={{ color: selectedCategory === 'shake' ? 'gray' : 'White' }}
              onClick={() => filterItem('shake')}
            >
              Shakes
            </a>
          </li>
          <li>
            <a className='btn '
              href="#"
              style={{ color: selectedCategory === 'sandwich' ? 'gray' : 'White' }}
              onClick={() => filterItem('sandwich')}
            >
              Sandwiche
            </a>
          </li>
          <li>
            <a className='btn '
              href="#"
              style={{ color: selectedCategory === 'tea' ? 'gray' : 'White' }}
              onClick={() => filterItem('tea')}
            >
              Tea
            </a>
          </li>
          <li>
            <a className='btn '
              href="#"
              style={{ color: selectedCategory === 'cake' ? 'gray' : 'White' }}
              onClick={() => filterItem('cake')}
            >
              Cake
            </a>
          </li>
        </ul>
      </div>
      {/* FILTER METHOD-END */}
      {loader?<Loader/>:null}

      {/* CARDS-START */}
      {/* <div className="col-lg-10"> */}
      < div className="d-flex flex-wrap justify-content-center gap-3 mt-5">
        {
          items.map((item) => {
            return (
              <div key={item.id} className="col-lg-3 col-md-6 my-2">
                <div class="CARDSS" style={{ height: '470px', width: '300px' }}>

                  <img src={item.image} style={{ height: '300px', width: '373px' }} alt="" />

                  <div class="title">{item.title.slice(0, 15)}....</div>
                  <p class="desc">{item.description.slice(0, 45)}....</p>
                  <div class="price">{item.price}/RS</div>
                  <div class="btn ml-2 mt-2"><Link to={`/products/${item.id}`}>Add to cart </Link>
                  </div>
                  {/* <buuton><Link to={`/products/${item.id}`} >Add to cart </Link></buuton> */}
                </div>
              </div>
            )
          }
          )
        }
      </div>
      {/* CARDS-END */}


    </>
  )
}

export default Menu;
