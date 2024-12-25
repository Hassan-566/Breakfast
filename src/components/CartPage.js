import React from 'react';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { addtoCart, emptyCart, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  let { carts } = useSelector((state) => state.cartSlice);
  console.log("Data on cart page", carts);

  const dispatch = useDispatch();

  const incQty = (ele) => {
    dispatch(addtoCart(ele));
  };

  const decQty = (ele) => {
    dispatch(removeFromCart(ele.id));
  };

  const delPro = (ele) => {
    dispatch(emptyCart(ele));
  };

  const totalBill = carts.reduce((total, item) => total + item.price * item.qnty, 0);

  return (
    <>
      <Navbar />
      <div>
        <div className='container-fluid mt-4 mx-auto'>
          <div className='row'>
            {/* left side */}
            <div className='col-lg-8 me-2'>
              {carts.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr className='bg-warning text-dark'>
                      <th scope="col">&nbsp;</th>
                      <th scope="col">Item</th>
                      <th scope="col">Detail</th>
                      <th scope="col">Price</th>
                      <th scope="col">QTY</th>
                      <th scope="col">Sub-Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map(item => (
                      <tr key={item.id}>
                        <td className='text-danger fs-3'>
                          <div onClick={() => delPro(item)}><FaTrash /></div>
                        </td>
                        <td>
                          <img src={item.image} width={40} alt={item.title} />
                        </td>
                        <td className='text-start'>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                          <div onClick={() => incQty(item)} className='btn me-2 btn-sm'>+</div>
                          {item.qnty}
                          <div onClick={() => decQty(item)} className='btn ms-2 btn-sm'>-</div>
                        </td>
                        <td>{item.price * item.qnty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className='div text-3xl' style={{textAlign:'center',marginLeft:'452px'}}>Your cart is empty</div>
              )}

              {carts.length > 0 && (
                <div className='w-25'>
                  <div className='row'>
                    <div className='col-md-12 fw-bold'>Total Bill: PKR = {totalBill}</div>
                  </div>
                </div>
              )}
            </div>

            {/* summary area / right side */}
            <div className='col-lg-3'>
              {carts.length > 0 && (
                <ul className="list-group">
                 <li className="list-group-item active fw-bold" aria-current="true">SUMMARY DETAIL</li>
                  <li className="list-group-item fw-bold">Estimate Shipping & Tax</li>
                  <li className="list-group-item text-start">SUBTOTAL:</li>
                  <li className="list-group-item text-start">Shipping Domestic: 99PKR</li>
                  <hr />
                  <li className="list-group-item">ORDER TOTAL: {totalBill}</li>
                  
                </ul>
              )}

              {carts.length > 0 && (
                <div className='mt-2'>
                  <Link to='/checkout' className='btn'>CHECKOUT</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
