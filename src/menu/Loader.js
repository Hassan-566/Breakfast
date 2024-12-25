import React from 'react'
import './Loader.css'
// import LoaderImage from '../assets/ZKZg.gif'
function Loader() {
  return (
    <div>
      <div className="d-flex justify-content-center">
      {/* <img src={LoaderImage} alt='Loader Image'/> */}
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    </div>
  )
}

export default Loader
