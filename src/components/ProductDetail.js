import React, { useEffect, useState } from 'react';
import './ProductDetail.css'
/*import ProductDB from '../menu/Data';*/
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../redux/cartSlice';

const ProductDetail = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch()

  // increasing quantity 

  useEffect(() => {
    fetch('https://motivation-api.fly.dev/api/products')
      .then(res => res.json())
      .then(data => {
        setItems(data);

      })
  }, []);

  const incQty = (ele) => {
    dispatch(addtoCart(ele))
  }
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    // Handle case where product is not found
    return <div>Product not found</div>;
  }

  const sendData = (item) => {
    dispatch(addtoCart(item))
  }
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <div className="card-0-title mb-5 fw-bold text-warning" style={{ textAlign: 'center', fontSize: '25px' }}>{product.title}</div>
            {/* <h6 className="card-subtitle">globe type chair for rest</h6> */}
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-6">
                <div className="white-box text-center"><img src={product.image} className="img-responsive" width={350} height={400} /></div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6">
                <div className="box-title fw-bolder fs-1 mt-5 mb-4">Product Description</div>
                <p className="lead">
                  {product.description}
                </p>
                <div className="lead text-success fw-bolder fs-4">
                  RATINGS: {product.ratings && product.ratings.rate} And Rating Count: {product.ratings && product.ratings.count}
                </div>
                <div className="mt-5 font-bold">
                  ${product.price}<small className="text-success">(36%off)</small>
                </div>
                <div className='d-flex flex-wrap'>
                  <div className='btn-001'>
                    <Link className=" " data-toggle="tooltip" title data-original-title="Add to cart">
                      <i className="fa fa-shopping-cart" />
                    </Link>
                  </div>
                  {/* <div className='btn-00'> */}
                  {/* <div onClick={() => { incQty(product) }} style={{ width: '90px' }}>
          Buy Now
        </div> */}
                  <div onClick={() => sendData(product)} style={{ marginLeft: ' 11px' }}
                    href="#" className="btn">Buy Now</div>
                </div>
                {/* <button style={{marginLeft:' 56px',marginTop:'20px'}} onClick={()=>incQty(product)} className="btn btn-primary btn-rounded">Buy Now</button> */}
                {/* </div> */}
              </div>
              <div className="box-title font-bold mt-5">Key Highlights</div>
              <ul className="list-unstyled">
                <li><i className="fa fa-check text-success" />High quality product</li>
                <li><i className="fa fa-check text-success" />Azadi offer during August 2023</li>
                <li><i className="fa fa-check text-success" />Perfect furniture to flaunt your wonderful collectibles</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProductDetail;
