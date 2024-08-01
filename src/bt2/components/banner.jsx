import React from 'react'
import Carousell from '../img/Carousell.webp'

function Banner() {
  return (
    <div className='h-[800px] w-full bg-red-500 flex justify-around'>
      {/* <div className='mt-[200px]'>
        <div className='text-3xl'>SALE CUC MANH</div>
        <div><p>mua ngay di trc khi moi chuyen toi te hon</p></div>
        <div ><button className='bg-black text-white '>BUYNOW</button></div>
      </div>
      <div><img src="https://cdn1.concung.com/img/adds/2024/06/1717396084-FLOATING(4).png" alt="#" className='h-full w-full' /></div> */}
   <img src={Carousell} alt="#" className='w-full'/>
    </div>
  )
}

export default Banner
