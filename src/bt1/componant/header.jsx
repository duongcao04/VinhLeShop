import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='text-[#00ffff] h-[50px] w-full flex ml-[200px]'>
    <div className='text-black bg-white p-5 flex justify-center items-center'>HOME</div>
    <div className='text-black bg-white p-5 flex justify-center items-center '>HOME SIUU</div>
    <div className='text-white bg-blue-600 p-5 flex justify-center items-center'>SINGLE PRODUCT</div>
    <div className='text-black bg-white p-5 flex justify-center items-center'>CART</div>
    <div className='text-black bg-white p-5 flex justify-center items-center'>ORTHER</div>
    <div className='text-black bg-white p-5 flex justify-center items-center'>CONTACT</div>
    </div>
  )
}

export default Header
