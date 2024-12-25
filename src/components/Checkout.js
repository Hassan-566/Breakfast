import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../redux/cartSlice';

const Checkout = () => {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [pnumber, setpNumber] = useState('');
  const [address, setAddress] = useState('');
  const [info, setInfo] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      let result = await fetch('http://localhost:8000/checkout', {
        method: 'post',
        body: JSON.stringify({ fname, lname, email, pnumber, address, info }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      result = await result.json();
      console.log("___________", result);

      // Optionally, you can reset the form fields after successful submission
      setfName('');
      setlName('');
      setEmail('');
      setpNumber('');
      setAddress('');
      setInfo('');

      // // Clear the cart in the Redux store
      // dispatch(emptyCart());

      // Navigate to a different page after successful checkout
      navigate('/success');
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact_us_2">
        <div className="responsive-container-block big-container">
          <div className="blueBG"></div>
          <div className="responsive-container-block container">
            <form className="form-box">
              <div className="container-block form-wrapper">
                <p className="text-blk contactus-head">PLACE YOUR ORDER</p>
                <p className="text-blk contactus-subhead">Nunc erat cursus tellus gravida.</p>
                <div className="responsive-container-block">
                <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
                    <p className="text-blk input-title">FIRST NAME*</p>
                    <input
                      className="input"
                      id="ijowk"
                      value={fname}
                      onChange={(e) => setfName(e.target.value)}
                      name="FirstName"
                      placeholder="Please enter first name..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME*</p>
                    <input
                      className="input"
                      id="indfi"
                      value={lname}
                      onChange={(e) => setlName(e.target.value)}
                      name="Last Name"
                      placeholder="Please enter last name..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL*</p>
                    <input
                      className="input"
                      id="ipmgh"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="Email"
                      placeholder="Please enter email..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER*</p>
                    <input
                      className="input"
                      id="imgis"
                      value={pnumber}
                      onChange={(e) => setpNumber(e.target.value)}
                      name="PhoneNumber"
                      placeholder="Please enter phone number..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">ADDRESS*</p>
                    <input
                      className="input"
                      id="imgis"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      name="Address"
                      placeholder="Please enter address..."
                    />
                  </div>
                  <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
                    <p className="text-blk input-title">Special Delivery Instruction*</p>
                    <textarea
                      className="input" // Changed to use the 'input' class
                      value={info}
                      onChange={(e) => setInfo(e.target.value)}
                      id="i5vyy"
                      placeholder="Please enter query..."
                    ></textarea>
                  </div>
                </div>
                <button onClick={registerUser} className="submit-btn">
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
