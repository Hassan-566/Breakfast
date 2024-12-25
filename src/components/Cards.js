import React, { useState } from 'react'
import './Cards.css'
import img1 from '../assets/shape7.png'
import image1 from '../assets/Cardimage1.jpg'
import image2 from '../assets/image5.png'
import shp1 from '../assets/shap1.png'
import shp2 from '../assets/shap2.png'
import shp3 from '../assets/shap4.png'
import shp4 from '../assets/shap5.png'
import shp5 from '../assets/shap3.png'
import image from '../assets/image5.png'
const Cards = () => {

    return (
        <>
            <div className='box'>

                <div className='img-1'>
                    <img src={img1} />
                    <div className='h6'>
                        <h6>Discover</h6>
                    </div>
                    <div className='h3'>
                        <h3>Special Offer</h3>
                    </div>
                </div>
                <div className='shap1'>
                    <img src={shp1} />
                </div>
                <div className='shap2'>
                    <img src={shp2} />
                </div>
                <section className='container'>
                    {/* Card1 */}
                    <div className='cards'>
                        <div className='card-image car-1'>
                        </div>
                        <h2>Egg / 10th Jan, 2020</h2>
                        <h2 className='cate'>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit amet lipum consectetur adipisicing elit, sed</p>
                        <a href=''>Read more</a>
                        <div className='line'>

                        </div>
                    </div>
                    {/* Card2 */}
                    <div className='cards'>
                        <div className='card-image car-2'>
                        </div>
                        <h2>Fruits / 10th Jan, 2020</h2>
                        <h2 className='cate'>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit amet lipum consectetur adipisicing elit, sed</p>
                        <a href=''>Read more</a>
                        <div className='line'>

                        </div>
                    </div>
                    {/* Card3 */}
                    <div className='cards'>
                        <div className='card-image car-3'>

                        </div>
                        <h2>Juices/ 10th Jan, 2020</h2>
                        <h2 className='cate'>Lorem ipsum dolor sit</h2>
                        <p>Lorem ipsum dolor sit amet lipum consectetur adipisicing elit, sed</p>
                        <a href=''>Read more</a>
                        <div className='line'>

                        </div>
                    </div>
                </section>
                <div className='shap3'>
                    <img src={shp3} />
                </div>
                <div className='shap4'>
                    <img src={shp4} />
                </div>
                <div className='shap5'>
                    <img src={shp5} />
                </div>
                {/* CARDS-END */}
                {/* LEFT SIDE */}
                <div className='left'>
                    <div className='heading'>
                    <h2 >What do we actually cook?</h2>
                    </div>
                    <div className='para'>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do ei <br></br>usmod tempor incididunt ut labore et dolorem magna aliqua. Ut<br></br> enim ad minim veniam, quis nostrud       </p>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className='right'>
                    <div className='cup-image'>
                        <img src={image}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
