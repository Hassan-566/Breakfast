import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Box.css'
import shap1 from '../assets/shap2.png'
import shap2 from '../assets/shap6.png'
import shap3 from '../assets/shape7.png'
import shap4 from '../assets/shap4.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'

const Box = () => {

    return (
        <>
            {/* //SECTION-1-START */}
            <div className='boxe d-flex flex-wrap'>
                <div className='contai d-flex'>
                    <div className='row'>
                        {/* SHAPE-1 */}
                        <div className='col-12 col-md-6 '>
                            <div className='shap01'>
                                <img src={shap1} alt='Shape 1' />
                            </div>
                            {/* CARD-1 */}
                            <div class="cards1" style={{ width: "18rem" }}>
                                <div class="card-bodys">
                                    <h1>'</h1>
                                    <h6 class="card-subtitle mb-2 text-light">New Tastes</h6>
                                    <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                        sectetur adipisicing elit, tation omne <br></br>
                                        ullamco laboris nisi ut aliqolore.</p>

                                </div>
                            </div>
                            {/* CARD-2 */}

                            <div class="cards2" style={{ width: "18rem" }}>
                                <div class="card-bodys">
                                    <h1>''</h1>
                                    <h6 class="card-subtitle mb-2 text-light">New Dishes cooking</h6>
                                    <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                        sectetur adipisicing elit, tation omne <br></br>
                                        ullamco laboris nisi ut aliqolore..</p>

                                </div>
                            </div>
                            {/* CARD-3 */}

                            <div class="cards3" style={{ width: "18rem" }}>
                                <h1>'''</h1>
                                <div class="card-bodys">
                                    <h6 class="card-subtitle mb-2 text-light">New Resturant</h6>
                                    <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                        sectetur adipisicing elit, tation omne <br></br>
                                        ullamco laboris nisi ut aliqolore.</p>

                                </div>
                            </div>
                            {/* SHAPE-2 */}

                            <div className='shap20'>
                                <img src={shap2} alt='Shape 2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // SECTION-1-END */}

            {/* //section-2-start */}
            <div className='boxeS'>
                <section>
                    <div className='shap03'>
                        <img src={shap3} />
                        <h6>DISCOVER</h6>
                    </div>
                    <h3>SPECIAL OFFERS</h3>
                    <div className='shap04'>
                        <img src={shap1} />
                    </div>
                    <div className='shap05'>
                        <img src={shap2} />
                    </div>
                    <div className='shap06'>
                        <img src={shap4} />
                    </div>
                    {/* LEFT */}
                    <div className='left'>
                        {/* 1 */}
                        <div className='car'>
                            <div className='ic1'>
                                <img src={icon1} />
                            </div>
                            <h2>Breakfast tarts</h2>
                            <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                sectetur adipisicing elit, tation omne <br></br>
                                ullamco laboris nisi ut aliqolore.$14.95</p>

                        </div>
                        {/* 2 */}
                        <div className='car1'>
                            <div className='ic2'>
                                <img src={icon2} />
                            </div>
                            <h2>Coffee Cake Muffins</h2>
                            <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                sectetur adipisicing elit, tation omne <br></br>
                                ullamco laboris nisi ut aliqolore. $18.95</p>

                        </div>
                        {/* 3 */}
                        <div className='car2'>
                            <div className='ic3'>
                                <img src={icon3} />
                            </div>
                            <h2>Cinnamon Buns</h2>
                            <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                sectetur adipisicing elit, tation omne <br></br>
                                ullamco laboris nisi ut aliqolore.$17.95</p>

                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className='right'>
                        {/* 1 */}
                        <div className='car'>
                            <div className='ic1'>
                                <img src={icon4} />
                            </div>
                            <h2>Acai Breakfast Bowl</h2>
                            <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                sectetur adipisicing elit, tation omne <br></br>
                                ullamco laboris nisi ut aliqolore.$14.95</p>

                        </div>
                        {/* 2 */}
                        <div className='car1'>
                            <div className='ic2'>
                                <img src={icon5} />
                            </div>
                            <h2>Huevos Rancheros</h2>
                            <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                sectetur adipisicing elit, tation omne <br></br>
                                ullamco laboris nisi ut aliqolore. $18.95</p>

                        </div>
                        {/* 3 */}
                        <div className='car2'>
                            <div className='ic3'>
                                <img src={icon6} />
                            </div>
                            <h2>Breakfast Crescent Ring</h2>
                            <p class="card-texta">Lorem ipsum dolor sit amet, consecte<br></br>
                                sectetur adipisicing elit, tation omne <br></br>
                                ullamco laboris nisi ut aliqolore.$17.95</p>

                        </div>
                    </div>
                </section>
            </div>
            {/* //section-2-end */}
        </>
    );
};

export default Box;

