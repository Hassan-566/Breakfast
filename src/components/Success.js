import React from 'react'
import Navbar from './Navbar'
import {AiOutlineCheckCircle } from "react-icons/ai";
const Success = () => {
  return (
    <>
    <Navbar/>
    <div className='icon text-6xl text-orange-600 mt-3 align-middle' style={{marginLeft:'40rem'}}><AiOutlineCheckCircle/></div>
   
    <div className='HEAD text-center mt-5 text-3xl text-orange-700'>THANK YOU</div>

    <div className='HEAD text-center mt-5  text-orange-700'>YOUR ORDER IS SUCCESSFUL</div>
    </>
  )
}

export default Success
