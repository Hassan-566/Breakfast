

import React, { useState, useEffect } from 'react';
import img5 from '../assets/img6.png'
import './Offers.css'
import shap5 from '../assets/shape5.png'
import shap6 from '../assets/shape6.png'
import shape3 from '../assets/shape3.png'

const CountdownTimer = ({ targetDate }) => {
  // Set the initial state
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the countdown every second
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentDate = new Date().getTime();
      const remainingTime = targetDate - currentDate;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      // Check if the countdown has reached zero
      if (remainingTime < 0) {
        clearInterval(countdownInterval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(countdownInterval);
  }, [targetDate]);

  return (
    <div>
          <div className='time'>
      <div className='box-content'>
        {/* style={{fontWeight:"300"}}> */}
        <section>
          <p>{countdown.days}<br></br>
            <small >dd</small></p>
        </section>
        <span>:</span>
        <section>
          <p>{countdown.hours}<br></br>
            <small>hr</small></p>
        </section>
        <span >:</span>

        <section>
          <p>{countdown.minutes}
            <br></br>
            <small>min</small></p>
        </section>
        <span>:</span>

        <section>
          <p>{countdown.seconds}<br></br>
            <small>sec</small></p>
        </section>
        </div>

        {/* <div>{`${countdown.days}${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}</div> */}
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  // Set your target date (replace with your desired date)
  const targetDate = new Date('November 31, 2023 00:00:00').getTime();

  return (
    <div>
      <div className='img5'>
        <div className='shape5'>

          <img src={shap5} />
        </div>
        <div className='shape6'>

          <img src={shap6} />
        </div>
        <div className='shape7'>

          <img src={shape3} />
        </div>
        <div className='img6'>
          <img src={img5} />
          <h3>Special Offers Ending in</h3>
        </div>
        <div class="box-container">
          <div class="box-content">
            <CountdownTimer targetDate={targetDate} />
          </div></div></div>
    </div>
  );
};

export default App;

