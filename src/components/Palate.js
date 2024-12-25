import React from 'react'
import './Palate.css'
// IMPORT PICS
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'
import pic6 from '../assets/pic6.jpg'
// IMPORT SHAPES
import shap1 from '../assets/Shape1.png'
import shap2 from '../assets/shape2.png'
import shap3 from '../assets/SHAPE-4.png'
import shap4 from '../assets/shape4.png'


const Palate = () => {
    return (
        <>
  
            <div className='BOX'>
                
                <h1>We bring tradition</h1>
                <p>TO YOUR PLATE</p>
            </div>   {/* SHAPE_1 */}
            <div className='shap-01'>
            <img src={shap1}/>
        </div>
            
            {/* IMAGE-1  */}
            <div className='pic-1'>
                <div className='p-1'>
                <div className='pic-01'>
                    <img src={pic1} />
                </div>
                <h3>Fruits & Juices</h3>
                <p>Lorem ipsum dolor <br></br>
                    sit amet, consectetur<br></br>
                    adipisicing elit sed do</p>
                    <h6>$14.95</h6>
                    </div>
            </div>
            {/* IMAGE-2 */}
            <div className='pic-2'>
                <div className='p-2'>
                <h3>Avocado Toasts</h3>
                <p>Lorem ipsum dolor <br></br>
                    sit amet, consectetur<br></br>
                    adipisicing elit sed do</p>
                    <h6>$11.95</h6>
                    <div className='pic-02'>
                    <img src={pic3} />
                </div>
                </div>
            </div>
            {/* IMAGE-3 */}
            <div className='pic-3'>
                <div className='p-1'>
                <div className='pic-01'>
                    <img src={pic2} />
                </div>
                <h3>Scrambled Eggs</h3>
                <p>Lorem ipsum dolor <br></br>
                    sit amet, consectetur<br></br>
                    adipisicing elit sed do</p>
                    <h6>$12.95</h6>
                    </div>
            </div>
            {/* IMAGE-4 */}
            <div className='pic-4'>
                <div className='p-2'>
                <h3>Coffe with cookies</h3>
                <p>Lorem ipsum dolor <br></br>
                    sit amet, consectetur<br></br>
                    adipisicing elit sed do</p>
                    <h6>$16.95</h6>
                    <div className='pic-02'>
                    <img src={pic5} />
                </div>
                </div>
            </div>
            {/* IMAGE-5 */}
            <div className='pic-5'>
                <div className='p-1'>
                <div className='pic-01'>
                    <img src={pic4} />
                </div>
                <h3>omlette+tea+cake</h3>
                <p>Lorem ipsum dolor <br></br>
                    sit amet, consectetur<br></br>
                    adipisicing elit sed do</p>
                    <h6>$8.95</h6>
                    </div>
            </div>
            
            {/* IMAGE-6 */}
            <div className='pic-6'>
                <div className='p-1'>
                <div className='pic-01'>
                    <img src={pic6} />
                </div>
                <h3>Strawberry  Granola</h3>
                <p>Lorem ipsum dolor <br></br>
                    sit amet, consectetur<br></br>
                    adipisicing elit sed do</p>
                    <h6>$14.95</h6>
                    </div>
            </div>
         
        
            {/* SHAPE-3 */}
            <div className='shap-03'>
            <img src={shap3}/>
        </div>
            {/* shape-2 */}
            <div className='shap-02'>
            <img src={shap2}/>
        </div>
           {/* shape-4 */}
           <div className='shap-04'>
            <img src={shap4}/>
        </div>
        </>

    )
}

export default Palate
